"use client";

import React, { useEffect, useRef, useState, useCallback, useSyncExternalStore } from "react";
import RoadCar from "@/components/RoadCar";

export interface StepData {
  id: number;
  phase: string | null;
  phaseIndex: number;
  year: string;
  title: string;
  desc: string;
  isNow: boolean;
  desktopRun: 1 | 2 | 3;
}

export const PATH_STOPS: StepData[] = [
  {
    id: 1,
    phase: "Operations",
    phaseIndex: 0,
    year: "2019 to 2021",
    title: "Manager, family business",
    desc: "Ran daily operations: customer orders, deliveries, suppliers and transport.",
    isNow: false,
    desktopRun: 1,
  },
  {
    id: 2,
    phase: null,
    phaseIndex: 0,
    year: "2021 to 2023",
    title: "Event and Venue Manager, convention hall",
    desc: "Ran weddings, corporate functions and school events, working with clients and vendors on each one. Made the venue's promotions in Canva.",
    isNow: false,
    desktopRun: 1,
  },
  {
    id: 3,
    phase: null,
    phaseIndex: 0,
    year: "2023 to 2024",
    title: "Sourcing and Vendor Relationship Manager, trading company",
    desc: "Managed vendors and sourcing and cut procurement costs by 15%. Made the product brochures and wrote the website content.",
    isNow: false,
    desktopRun: 1,
  },
  {
    id: 4,
    phase: "The switch",
    phaseIndex: 1,
    year: "2025",
    title: "Digital Marketing and Analytics, Boston Institute of Analytics",
    desc: "Moved into marketing on purpose, starting with the fundamentals.",
    isNow: false,
    desktopRun: 2,
  },
  {
    id: 5,
    phase: "Marketing",
    phaseIndex: 2,
    year: "Aug 2025",
    title: "Marketing Intern, Roots Innovation Labs",
    desc: "Started on lead sourcing and content for AIQoD and VentureHub360.",
    isNow: false,
    desktopRun: 2,
  },
  {
    id: 6,
    phase: null,
    phaseIndex: 2,
    year: "Nov 2025",
    title: "Marketing Executive, Consultant",
    desc: "Took on more of the work, from campaigns to the websites.",
    isNow: false,
    desktopRun: 3,
  },
  {
    id: 7,
    phase: null,
    phaseIndex: 2,
    year: "May 2026",
    title: "Marketing Executive",
    desc: "Run marketing for both platforms.",
    isNow: true,
    desktopRun: 3,
  },
];

const DESKTOP_VIEWBOX_WIDTH = 1160;
const DESKTOP_VIEWBOX_HEIGHT = 625;

// Desktop road path:
// Run 1: left to right (y = 175)
// Right bend: smooth U-turn with corner radius 48
// Run 2: right to left (y = 385)
// Left bend: smooth U-shaped curve with radius 48 (counter-clockwise sweep, no sharp point)
// Run 3: left to right (y = 481)
const DESKTOP_ROAD_PATH =
  "M 70 175 L 990 175 A 48 48 0 0 1 1038 223 L 1038 337 A 48 48 0 0 1 990 385 L 140 385 A 48 48 0 0 0 140 481 L 1050 481";

const DESKTOP_STOP_DISTANCES = [0, 180, 500, 820, 1435, 1785, 2476, 2916];

const DESKTOP_STOP_COORDS = [
  { x: 250, y: 175, run: 1 },
  { x: 570, y: 175, run: 1 },
  { x: 890, y: 175, run: 1 },
  { x: 740, y: 385, run: 2 },
  { x: 390, y: 385, run: 2 },
  { x: 430, y: 481, run: 3 },
  { x: 870, y: 481, run: 3 },
];

const emptySubscribe = () => () => {};

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    (callback) => {
      const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
      mql.addEventListener("change", callback);
      return () => mql.removeEventListener("change", callback);
    },
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false
  );
}

function useIsMobile() {
  return useSyncExternalStore(
    (callback) => {
      const mql = window.matchMedia("(max-width: 1023px)");
      mql.addEventListener("change", callback);
      return () => mql.removeEventListener("change", callback);
    },
    () => window.matchMedia("(max-width: 1023px)").matches,
    () => false
  );
}

export default function RoadTimeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const desktopPathRef = useRef<SVGPathElement>(null);
  const mobilePathRef = useRef<SVGPathElement>(null);
  const mobileCardsRef = useRef<HTMLDivElement>(null);
  const mobileCardItemRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Safe SSR hydration detection without cascading re-renders
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const isMobile = useIsMobile();
  const prefersReducedMotion = usePrefersReducedMotion();

  // Mobile layout state
  const [mobileHeight, setMobileHeight] = useState(1200);
  const [mobileStopPoints, setMobileStopPoints] = useState<
    { x: number; y: number; distance: number }[]
  >([]);
  const [mobileRoadD, setMobileRoadD] = useState("");
  const [mobileTotalLength, setMobileTotalLength] = useState(1200);

  // Animation state (updated in requestAnimationFrame)
  const [carState, setCarState] = useState({
    x: 70,
    y: 175,
    angle: 0,
    isFlipped: false,
    travelledDist: 0,
    totalDist: 3096,
    activeStopIndex: 0,
    isMoving: false,
    bubbleText: "Start",
  });

  const car = prefersReducedMotion
    ? {
        x: 870,
        y: 481,
        angle: 0,
        isFlipped: false,
        travelledDist: 3096,
        totalDist: 3096,
        activeStopIndex: 7,
        isMoving: false,
        bubbleText: PATH_STOPS[6].year,
      }
    : carState;

  const rafIdRef = useRef<number | null>(null);

  // Measure mobile cards and construct vertical winding road
  // Stop markers are placed level with the top of each card (with the year label)
  const measureMobileRoad = useCallback(() => {
    if (!isMobile || !mobileCardsRef.current) return;
    const containerTop = mobileCardsRef.current.getBoundingClientRect().top;
    const points: { x: number; y: number }[] = [];

    mobileCardItemRefs.current.forEach((el, index) => {
      if (!el) return;
      const r = el.getBoundingClientRect();
      // Level with the top of the card (year label center)
      const cardTopY = r.top - containerTop + 12;
      const xPositions = [38, 54, 28, 52, 28, 52, 38];
      const x = xPositions[index % xPositions.length];
      points.push({ x, y: cardTopY });
    });

    if (points.length === 7) {
      const fullHeight = mobileCardsRef.current.offsetHeight;
      setMobileHeight(fullHeight);

      let d = `M 38 0 C 38 ${points[0].y * 0.4}, ${points[0].x} ${points[0].y * 0.7}, ${points[0].x} ${points[0].y}`;
      for (let i = 0; i < points.length - 1; i++) {
        const p1 = points[i];
        const p2 = points[i + 1];
        const midY = (p1.y + p2.y) / 2;
        d += ` C ${p1.x} ${midY}, ${p2.x} ${midY}, ${p2.x} ${p2.y}`;
      }
      const lastP = points[points.length - 1];
      d += ` C ${lastP.x} ${(lastP.y + fullHeight) / 2}, 38 ${(lastP.y + fullHeight) / 2}, 38 ${fullHeight}`;

      setMobileRoadD(d);
    }
  }, [isMobile]);

  useEffect(() => {
    if (!isMobile) return;
    measureMobileRoad();
    window.addEventListener("resize", measureMobileRoad);
    return () => window.removeEventListener("resize", measureMobileRoad);
  }, [isMobile, measureMobileRoad]);

  // Compute mobile stop distances once path is rendered
  useEffect(() => {
    if (!isMobile || !mobilePathRef.current || !mobileRoadD) return;
    const path = mobilePathRef.current;
    const total = path.getTotalLength();
    setMobileTotalLength(total);

    const stopPointsData: { x: number; y: number; distance: number }[] = [];
    const containerTop = mobileCardsRef.current?.getBoundingClientRect().top || 0;

    mobileCardItemRefs.current.forEach((el) => {
      if (!el) return;
      const r = el.getBoundingClientRect();
      const targetY = r.top - containerTop + 12;

      let bestDist = 0;
      let minDiff = Infinity;
      const samples = 140;
      for (let s = 0; s <= samples; s++) {
        const d = (s / samples) * total;
        const pt = path.getPointAtLength(d);
        const diff = Math.abs(pt.y - targetY);
        if (diff < minDiff) {
          minDiff = diff;
          bestDist = d;
        }
      }
      const finalPt = path.getPointAtLength(bestDist);
      stopPointsData.push({ x: finalPt.x, y: finalPt.y, distance: bestDist });
    });

    setMobileStopPoints(stopPointsData);
  }, [isMobile, mobileRoadD]);

  // Main scroll loop using passive scroll listener and requestAnimationFrame
  useEffect(() => {
    if (!mounted) return;

    const handleScroll = () => {
      if (rafIdRef.current !== null) return;

      rafIdRef.current = requestAnimationFrame(() => {
        rafIdRef.current = null;

        if (prefersReducedMotion) {
          if (!isMobile && desktopPathRef.current) {
            const total = desktopPathRef.current.getTotalLength();
            const pt = desktopPathRef.current.getPointAtLength(
              DESKTOP_STOP_DISTANCES[7]
            );
            setCarState({
              x: pt.x,
              y: pt.y,
              angle: 0,
              isFlipped: false,
              travelledDist: total,
              totalDist: total,
              activeStopIndex: 7,
              isMoving: false,
              bubbleText: PATH_STOPS[6].year,
            });
          }
          return;
        }

        if (!isMobile) {
          // Desktop scroll logic
          if (!sectionRef.current || !desktopPathRef.current) return;
          const rect = sectionRef.current.getBoundingClientRect();
          const topOffset = 72; // below sticky header
          const totalScrollable = rect.height - window.innerHeight;
          const progressRaw = (topOffset - rect.top) / totalScrollable;
          const progress = Math.min(1, Math.max(0, progressRaw));

          const path = desktopPathRef.current;
          const totalLength = path.getTotalLength();

          const scaled = progress * 7;
          const segIndex = Math.min(6, Math.floor(scaled));
          const localT = progress >= 1 ? 1 : scaled - segIndex;

          const fromDist = DESKTOP_STOP_DISTANCES[segIndex];
          const toDist = DESKTOP_STOP_DISTANCES[segIndex + 1];

          let dist: number;
          let isMoving = false;
          let activeIndex = 0;
          let bubble = "Start";

          if (progress === 0) {
            dist = 0;
            isMoving = false;
            activeIndex = 0;
            bubble = "Start";
          } else if (localT <= 0.6) {
            const t = localT / 0.6;
            const eased =
              t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
            dist = fromDist + (toDist - fromDist) * eased;
            isMoving = true;
            activeIndex = segIndex;
            bubble =
              segIndex === 0 ? "Start" : PATH_STOPS[segIndex - 1].year;
          } else {
            dist = toDist;
            isMoving = false;
            activeIndex = segIndex + 1;
            bubble = PATH_STOPS[segIndex].year;
          }

          const pt = path.getPointAtLength(dist);
          const p1 = path.getPointAtLength(Math.max(0, dist - 3));
          const p2 = path.getPointAtLength(Math.min(totalLength, dist + 3));
          const dx = p2.x - p1.x;
          const dy = p2.y - p1.y;

          let angle = (Math.atan2(dy, dx) * 180) / Math.PI;
          let isFlipped = false;

          if (dx < -0.05) {
            isFlipped = true;
            const rawAngle = (Math.atan2(dy, dx) * 180) / Math.PI;
            angle = rawAngle > 0 ? rawAngle - 180 : rawAngle + 180;
          }

          setCarState({
            x: pt.x,
            y: pt.y,
            angle,
            isFlipped,
            travelledDist: dist,
            totalDist: totalLength,
            activeStopIndex: activeIndex,
            isMoving,
            bubbleText: bubble,
          });
        } else {
          // Mobile scroll logic: car stays upright (angle 0) and syncs with card highlights
          if (
            !mobilePathRef.current ||
            mobileStopPoints.length !== 7 ||
            !mobileCardsRef.current
          )
            return;

          const path = mobilePathRef.current;
          const total = path.getTotalLength();
          const screenCenter = window.innerHeight * 0.45;

          let activeIndex = 0;

          const cardPositions = mobileCardItemRefs.current.map((el) => {
            if (!el) return 0;
            const r = el.getBoundingClientRect();
            return r.top + 12; // level with top year label
          });

          let targetDist = 0;
          let isMoving = false;

          if (cardPositions[0] > screenCenter) {
            targetDist = 0;
            activeIndex = 0;
            isMoving = false;
          } else if (cardPositions[6] <= screenCenter) {
            targetDist = mobileStopPoints[6].distance;
            activeIndex = 7;
            isMoving = false;
          } else {
            for (let i = 0; i < 6; i++) {
              const yA = cardPositions[i];
              const yB = cardPositions[i + 1];
              if (yA <= screenCenter && screenCenter < yB) {
                const segT = (screenCenter - yA) / (yB - yA);
                const distA = mobileStopPoints[i].distance;
                const distB = mobileStopPoints[i + 1].distance;

                if (segT < 0.25) {
                  targetDist = distA;
                  activeIndex = i + 1;
                  isMoving = false;
                } else if (segT > 0.75) {
                  targetDist = distB;
                  activeIndex = i + 2;
                  isMoving = false;
                } else {
                  const moveT = (segT - 0.25) / 0.5;
                  const eased =
                    moveT < 0.5
                      ? 2 * moveT * moveT
                      : 1 - Math.pow(-2 * moveT + 2, 2) / 2;
                  targetDist = distA + (distB - distA) * eased;
                  activeIndex = i + 1;
                  isMoving = true;
                }
                break;
              }
            }
          }

          const pt = path.getPointAtLength(targetDist);

          let bubble = "Start";
          if (activeIndex > 0 && activeIndex <= 7) {
            bubble = PATH_STOPS[activeIndex - 1].year;
          }

          setCarState({
            x: pt.x,
            y: pt.y,
            angle: 0, // Keep car upright on mobile
            isFlipped: false,
            travelledDist: targetDist,
            totalDist: total,
            activeStopIndex: activeIndex,
            isMoving,
            bubbleText: bubble,
          });
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, [mounted, isMobile, prefersReducedMotion, mobileStopPoints]);

  // Desktop speech bubble side: below car on Run 1 & 2, above car on Run 3
  const desktopBubbleSide = car.y > 430 ? "above" : "below";

  return (
    <section
      ref={sectionRef}
      className={`about-road-section ${isMobile ? "about-road-section--mobile" : ""}`}
      aria-labelledby="path-title"
    >
      <div className="about-road-sticky">
        <div className="container">
          <div className="about-sec-heading" style={{ marginBottom: "8px" }}>
            <h2 id="path-title" className="about-sec-title">
              The path
            </h2>
            <p className="about-path__subline">
              Before all this: B.Tech in Computer Science and Engineering, SRM
              Institute of Science and Technology, 2015 to 2019.
            </p>
          </div>
        </div>

        {/* Desktop Road View (1024px and up) */}
        {!isMobile && (
          <div className="container about-road-container">
            <div
              className="about-road-stage"
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "1160px",
                height: "625px",
                margin: "0 auto",
              }}
            >
              {/* SVG Road Paths */}
              <svg
                className="about-road-svg"
                viewBox={`0 0 ${DESKTOP_VIEWBOX_WIDTH} ${DESKTOP_VIEWBOX_HEIGHT}`}
                preserveAspectRatio="xMidYMid meet"
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  pointerEvents: "none",
                }}
              >
                {/* Road Base: wide stroke (42px), dark grey slightly lighter than background */}
                <path
                  ref={desktopPathRef}
                  d={DESKTOP_ROAD_PATH}
                  fill="none"
                  stroke="#232429"
                  strokeWidth={42}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Dashed Centre Line: muted off-white */}
                <path
                  d={DESKTOP_ROAD_PATH}
                  fill="none"
                  stroke="rgba(244, 240, 232, 0.35)"
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  strokeDasharray="10 12"
                />

                {/* Progress Centre Line: thin accent line behind car */}
                <path
                  d={DESKTOP_ROAD_PATH}
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth={3}
                  strokeLinecap="round"
                  strokeDasharray={`${car.travelledDist} ${car.totalDist}`}
                />

                {/* Dotted Connectors from each stop marker to its card */}
                {DESKTOP_STOP_COORDS.map((pt, idx) => {
                  const isReached =
                    prefersReducedMotion ||
                    car.travelledDist >= DESKTOP_STOP_DISTANCES[idx + 1] ||
                    car.activeStopIndex >= idx + 1;
                  const isCurrent = car.activeStopIndex === idx + 1;
                  const cardBoundaryY = pt.run === 3 ? 523 : pt.run === 2 ? 342 : 130;
                  const startY = pt.run === 3 ? pt.y + 8 : pt.y - 8;

                  return (
                    <line
                      key={`conn-${idx}`}
                      x1={pt.x}
                      y1={startY}
                      x2={pt.x}
                      y2={cardBoundaryY}
                      stroke={
                        isCurrent
                          ? "var(--accent)"
                          : isReached
                          ? "rgba(213, 183, 122, 0.6)"
                          : "rgba(244, 240, 232, 0.3)"
                      }
                      strokeWidth={1.5}
                      strokeDasharray="2 3"
                    />
                  );
                })}

                {/* Seven Stops: round markers on road */}
                {DESKTOP_STOP_COORDS.map((pt, idx) => {
                  const stopId = idx + 1;
                  const dist = DESKTOP_STOP_DISTANCES[stopId];
                  const isReached =
                    prefersReducedMotion ||
                    car.travelledDist >= dist ||
                    car.activeStopIndex >= stopId;
                  const isCurrent = car.activeStopIndex === stopId;

                  return (
                    <g key={stopId} className="about-road-stop-marker">
                      {isCurrent && (
                        <circle
                          cx={pt.x}
                          cy={pt.y}
                          r={13}
                          fill="rgba(213, 183, 122, 0.2)"
                          stroke="rgba(213, 183, 122, 0.4)"
                          strokeWidth={1}
                        />
                      )}
                      <circle
                        cx={pt.x}
                        cy={pt.y}
                        r={6.5}
                        fill={isReached ? "var(--accent)" : "#18191D"}
                        stroke="var(--accent)"
                        strokeWidth={2.2}
                      />
                    </g>
                  );
                })}
              </svg>

              {/* Phase Labels: placed on the side of the road opposite its cards, just before each first stop */}
              {/* Operations: below Run 1, before Stop 1, not under car start position */}
              <div
                className="about-road-phase-label"
                style={{
                  position: "absolute",
                  left: "140px",
                  top: "201px",
                }}
                aria-hidden="true"
              >
                Operations
              </div>

              {/* The switch: below Run 2, before Stop 4, well clear of Stop 7 */}
              <div
                className="about-road-phase-label"
                style={{
                  position: "absolute",
                  left: "960px",
                  top: "407px",
                }}
                aria-hidden="true"
              >
                The switch
              </div>

              {/* Marketing: below Run 2, before Stop 5, well clear of Stop 6 */}
              <div
                className="about-road-phase-label"
                style={{
                  position: "absolute",
                  left: "540px",
                  top: "407px",
                }}
                aria-hidden="true"
              >
                Marketing
              </div>

              {/* The Car & Speech Bubble */}
              <div
                className="about-road-car-anchor"
                aria-hidden="true"
                style={{
                  position: "absolute",
                  left: `${(car.x / DESKTOP_VIEWBOX_WIDTH) * 100}%`,
                  top: `${(car.y / DESKTOP_VIEWBOX_HEIGHT) * 100}%`,
                  transform: "translate(-50%, -50%)",
                  pointerEvents: "none",
                  zIndex: 10,
                }}
              >
                <div
                  className={`about-road-bubble about-road-bubble--${desktopBubbleSide}`}
                  key={car.bubbleText}
                >
                  {car.bubbleText}
                </div>

                <div
                  className={`about-road-car-rotator ${car.isMoving ? "road-car-bob" : ""}`}
                  style={{
                    transform: car.isFlipped
                      ? `rotate(${car.angle}deg) scaleX(-1)`
                      : `rotate(${car.angle}deg)`,
                    transformOrigin: "center center",
                    color: "var(--accent)",
                  }}
                >
                  <RoadCar width={50} />
                </div>
              </div>

              {/* Seven Step Cards in standard reading order */}
              <ol className="about-road-cards-list">
                {PATH_STOPS.map((stop) => {
                  const isCurrent = car.activeStopIndex === stop.id;
                  const isPassed = car.activeStopIndex > stop.id;
                  const isDimmed =
                    mounted &&
                    !prefersReducedMotion &&
                    !isCurrent &&
                    !isPassed;

                  // Coordinated, non-overlapping positions:
                  // Run 1 (stops 1-3): above Run 1
                  // Run 2 (stops 4-5): in band between Run 1 and Run 2, above Run 2
                  // Run 3 (stops 6-7): below Run 3
                  // Band between Run 2 and Run 3 is kept empty and compact
                  const desktopPositions = [
                    {
                      left: "21.55%",
                      top: "2px",
                      transform: "translateX(-50%)",
                      width: "25.5%",
                    },
                    {
                      left: "49.14%",
                      top: "2px",
                      transform: "translateX(-50%)",
                      width: "25.5%",
                    },
                    {
                      left: "76.72%",
                      top: "2px",
                      transform: "translateX(-50%)",
                      width: "25.5%",
                    },
                    {
                      left: "63.79%",
                      top: "230px",
                      transform: "translateX(-50%)",
                      width: "25.5%",
                    },
                    {
                      left: "33.62%",
                      top: "230px",
                      transform: "translateX(-50%)",
                      width: "25.5%",
                    },
                    {
                      left: "37.07%",
                      top: "525px",
                      transform: "translateX(-50%)",
                      width: "25.5%",
                    },
                    {
                      left: "75.00%",
                      top: "525px",
                      transform: "translateX(-50%)",
                      width: "25.5%",
                    },
                  ];
                  const pos = desktopPositions[stop.id - 1];

                  return (
                    <li
                      key={stop.id}
                      className={`about-road-card-item ${isDimmed ? "about-road-card-item--dimmed" : ""} ${isCurrent ? "about-road-card-item--current" : ""}`}
                      style={{
                        position: "absolute",
                        left: pos.left,
                        top: pos.top,
                        transform: pos.transform,
                        width: pos.width,
                        zIndex: 4,
                      }}
                    >
                      <span className="about-step__year">
                        {stop.year}
                        {stop.isNow && (
                          <span className="about-step__badge">Now</span>
                        )}
                      </span>
                      <div
                        className={`about-path-card ${stop.isNow ? "about-path-card--current" : ""} ${isCurrent ? "about-path-card--active" : ""}`}
                      >
                        <h3 className="about-path-card__title">{stop.title}</h3>
                        <p className="about-path-card__desc">{stop.desc}</p>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        )}

        {/* Mobile / Tablet Road View (below 1024px) */}
        {isMobile && (
          <div className="container about-road-mobile-layout">
            <div
              className="about-road-mobile-track"
              style={{ height: `${mobileHeight}px` }}
            >
              <svg
                className="about-road-mobile-svg"
                width={80}
                height={mobileHeight}
                viewBox={`0 0 80 ${mobileHeight}`}
                aria-hidden="true"
              >
                {mobileRoadD && (
                  <>
                    <path
                      ref={mobilePathRef}
                      d={mobileRoadD}
                      fill="none"
                      stroke="#232429"
                      strokeWidth={36}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d={mobileRoadD}
                      fill="none"
                      stroke="rgba(244, 240, 232, 0.35)"
                      strokeWidth={2}
                      strokeDasharray="8 10"
                      strokeLinecap="round"
                    />
                    <path
                      d={mobileRoadD}
                      fill="none"
                      stroke="var(--accent)"
                      strokeWidth={2.5}
                      strokeDasharray={`${car.travelledDist} ${mobileTotalLength}`}
                      strokeLinecap="round"
                    />
                  </>
                )}

                {/* Mobile Stop markers: positioned level with top of each card */}
                {mobileStopPoints.map((pt, idx) => {
                  const stopId = idx + 1;
                  const isReached =
                    prefersReducedMotion ||
                    car.travelledDist >= pt.distance ||
                    car.activeStopIndex >= stopId;
                  const isCurrent = car.activeStopIndex === stopId;

                  return (
                    <g key={stopId}>
                      {isCurrent && (
                        <circle
                          cx={pt.x}
                          cy={pt.y}
                          r={12}
                          fill="rgba(213, 183, 122, 0.2)"
                          stroke="rgba(213, 183, 122, 0.4)"
                          strokeWidth={1}
                        />
                      )}
                      <circle
                        cx={pt.x}
                        cy={pt.y}
                        r={6}
                        fill={isReached ? "var(--accent)" : "#18191D"}
                        stroke="var(--accent)"
                        strokeWidth={2}
                      />
                    </g>
                  );
                })}
              </svg>

              <div
                className="about-road-mobile-car-anchor"
                aria-hidden="true"
                style={{
                  position: "absolute",
                  left: `${car.x}px`,
                  top: `${car.y}px`,
                  transform: "translate(-50%, -50%)",
                  pointerEvents: "none",
                  zIndex: 10,
                }}
              >
                <div
                  className="about-road-bubble about-road-bubble--mobile"
                  key={car.bubbleText}
                >
                  {car.bubbleText}
                </div>
                {/* Mobile car stays upright and facing forward */}
                <div
                  className={`about-road-car-rotator ${car.isMoving ? "road-car-bob" : ""}`}
                  style={{
                    transform: "none",
                    color: "var(--accent)",
                  }}
                >
                  <RoadCar width={38} />
                </div>
              </div>
            </div>

            <div ref={mobileCardsRef} className="about-road-mobile-cards">
              <ol className="about-road-mobile-cards-list">
                {PATH_STOPS.map((stop, index) => {
                  const isCurrent = car.activeStopIndex === stop.id;
                  const isPassed = car.activeStopIndex > stop.id;
                  const isDimmed =
                    mounted &&
                    !prefersReducedMotion &&
                    !isCurrent &&
                    !isPassed;

                  return (
                    <li
                      key={stop.id}
                      className="about-road-mobile-card-wrapper"
                    >
                      {stop.phase && (
                        <span className="about-phase__header">
                          {stop.phase}
                        </span>
                      )}

                      <div
                        ref={(el) => {
                          mobileCardItemRefs.current[index] = el;
                        }}
                        className={`about-road-card-item ${isDimmed ? "about-road-card-item--dimmed" : ""} ${isCurrent ? "about-road-card-item--current" : ""}`}
                      >
                        <span className="about-step__year">
                          {stop.year}
                          {stop.isNow && (
                            <span className="about-step__badge">Now</span>
                          )}
                        </span>
                        <div
                          className={`about-path-card ${stop.isNow ? "about-path-card--current" : ""} ${isCurrent ? "about-path-card--active" : ""}`}
                        >
                          <h3 className="about-path-card__title">
                            {stop.title}
                          </h3>
                          <p className="about-path-card__desc">{stop.desc}</p>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
