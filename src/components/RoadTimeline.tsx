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
const DESKTOP_VIEWBOX_HEIGHT = 680;
const DESKTOP_ROAD_PATH =
  "M 70 175 L 970 175 A 85 85 0 0 1 1055 260 A 85 85 0 0 1 970 345 L 150 345 A 85 85 0 0 1 65 430 A 85 85 0 0 1 150 515 L 1050 515";

const DESKTOP_STOP_DISTANCES = [0, 200, 520, 840, 1420, 1800, 2540, 3000];

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
    totalDist: 3185,
    activeStopIndex: 0,
    isMoving: false,
    bubbleText: "Start",
  });

  const car = prefersReducedMotion
    ? {
        x: 885,
        y: 515,
        angle: 0,
        isFlipped: false,
        travelledDist: 3185,
        totalDist: 3185,
        activeStopIndex: 7,
        isMoving: false,
        bubbleText: PATH_STOPS[6].year,
      }
    : carState;

  const rafIdRef = useRef<number | null>(null);

  // Measure mobile cards and construct vertical winding road
  const measureMobileRoad = useCallback(() => {
    if (!isMobile || !mobileCardsRef.current) return;
    const containerTop = mobileCardsRef.current.getBoundingClientRect().top;
    const points: { x: number; y: number }[] = [];

    mobileCardItemRefs.current.forEach((el, index) => {
      if (!el) return;
      const r = el.getBoundingClientRect();
      const cardCenterY = r.top - containerTop + r.height / 2;
      const xPositions = [38, 56, 26, 54, 26, 52, 38];
      const x = xPositions[index % xPositions.length];
      points.push({ x, y: cardCenterY });
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
      const targetY = r.top - containerTop + r.height / 2;

      let bestDist = 0;
      let minDiff = Infinity;
      const samples = 120;
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
          // Mobile scroll logic
          if (
            !mobilePathRef.current ||
            mobileStopPoints.length !== 7 ||
            !mobileCardsRef.current
          )
            return;

          const path = mobilePathRef.current;
          const total = path.getTotalLength();
          const screenCenter = window.innerHeight / 2;

          let activeIndex = 0;

          const cardPositions = mobileCardItemRefs.current.map((el) => {
            if (!el) return 0;
            const r = el.getBoundingClientRect();
            return r.top + r.height / 2;
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
          const p1 = path.getPointAtLength(Math.max(0, targetDist - 3));
          const p2 = path.getPointAtLength(Math.min(total, targetDist + 3));
          const dx = p2.x - p1.x;
          const dy = p2.y - p1.y;
          const angle = (Math.atan2(dy, dx) * 180) / Math.PI;

          let bubble = "Start";
          if (activeIndex > 0 && activeIndex <= 7) {
            bubble = PATH_STOPS[activeIndex - 1].year;
          }

          setCarState({
            x: pt.x,
            y: pt.y,
            angle,
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

  return (
    <section
      ref={sectionRef}
      className={`about-road-section ${isMobile ? "about-road-section--mobile" : ""}`}
      aria-labelledby="path-title"
    >
      <div className="about-road-sticky">
        <div className="container">
          <div className="about-sec-heading">
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
                height: "680px",
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
                {/* Road Base: wide stroke (44px), dark grey slightly lighter than background */}
                <path
                  ref={desktopPathRef}
                  d={DESKTOP_ROAD_PATH}
                  fill="none"
                  stroke="#232429"
                  strokeWidth={44}
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

                {/* Seven Stops: round markers on road */}
                {DESKTOP_STOP_DISTANCES.slice(1).map((dist, idx) => {
                  const stopId = idx + 1;
                  const coords = [
                    { x: 270, y: 175 },
                    { x: 590, y: 175 },
                    { x: 910, y: 175 },
                    { x: 713, y: 345 },
                    { x: 333, y: 345 },
                    { x: 425, y: 515 },
                    { x: 885, y: 515 },
                  ];
                  const pt = coords[idx];
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
                          r={14}
                          fill="rgba(213, 183, 122, 0.2)"
                          stroke="rgba(213, 183, 122, 0.4)"
                          strokeWidth={1}
                        />
                      )}
                      <circle
                        cx={pt.x}
                        cy={pt.y}
                        r={7}
                        fill={isReached ? "var(--accent)" : "#18191D"}
                        stroke="var(--accent)"
                        strokeWidth={2.5}
                      />
                    </g>
                  );
                })}
              </svg>

              {/* Phase Labels */}
              <div
                className="about-road-phase-label"
                style={{
                  position: "absolute",
                  left: "6%",
                  top: "26%",
                }}
                aria-hidden="true"
              >
                Operations
              </div>
              <div
                className="about-road-phase-label"
                style={{
                  position: "absolute",
                  left: "78%",
                  top: "46%",
                }}
                aria-hidden="true"
              >
                The switch
              </div>
              <div
                className="about-road-phase-label"
                style={{
                  position: "absolute",
                  left: "42%",
                  top: "46%",
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
                  className="about-road-bubble"
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
                  <RoadCar width={56} />
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

                  // Isolated, non-overlapping coordinates in stage:
                  // Card 1: Run 1, above road (x: 270)
                  // Card 2: Run 1, above road (x: 590)
                  // Card 3: Run 1, above road (x: 910)
                  // Card 4: Run 2, below road (x: 713)
                  // Card 5: Run 2, above road (x: 333)
                  // Card 6: Run 3, above road (x: 425)
                  // Card 7: Run 3, below road (x: 885)
                  const desktopPositions = [
                    {
                      left: "23.3%",
                      top: "10px",
                      transform: "translateX(-50%)",
                      width: "24%",
                    },
                    {
                      left: "50.8%",
                      top: "10px",
                      transform: "translateX(-50%)",
                      width: "24%",
                    },
                    {
                      left: "78.4%",
                      top: "10px",
                      transform: "translateX(-50%)",
                      width: "24%",
                    },
                    {
                      left: "68%",
                      top: "370px",
                      transform: "translateX(-50%)",
                      width: "24%",
                    },
                    {
                      left: "28%",
                      top: "220px",
                      transform: "translateX(-50%)",
                      width: "24%",
                    },
                    {
                      left: "32%",
                      top: "370px",
                      transform: "translateX(-50%)",
                      width: "24%",
                    },
                    {
                      left: "76.3%",
                      top: "545px",
                      transform: "translateX(-50%)",
                      width: "24%",
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
                <div
                  className={`about-road-car-rotator ${car.isMoving ? "road-car-bob" : ""}`}
                  style={{
                    transform: `rotate(${car.angle}deg)`,
                    transformOrigin: "center center",
                    color: "var(--accent)",
                  }}
                >
                  <RoadCar width={40} />
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
