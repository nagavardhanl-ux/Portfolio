"use client";

import React from "react";
import type { Site } from "@/data/sites";
import { asset } from "@/lib/config";
import Clip from "./Clip";

interface BentoDeviceProps {
  site: Site;
  priority?: boolean;
  size?: "lead" | "regular";
}

export default function BentoDevice({
  site,
  priority = false,
  size = "regular",
}: BentoDeviceProps) {
  const desktopAlt = `Desktop scroll-through of ${site.name} on MacBook Pro`;
  const mobileAlt = `Mobile scroll-through of ${site.name} on Google Pixel 10`;
  const mobileSrc = asset(`shots/${site.shot}-mobile.webp`);

  return (
    <div className={`dual-showcase dual-showcase--${size}`} aria-label={`${site.name} on MacBook Pro and Google Pixel 10`}>
      {/* LEFT: Realistic MacBook Pro Device with Desktop Scrolling */}
      <a
        href={site.embedUrl || site.url}
        target="_blank"
        rel="noopener noreferrer"
        className="dual-showcase__macbook"
        aria-label={`View ${site.name} on MacBook Pro (opens in new tab)`}
      >
        <div className="bento-macbook">
          {/* Display Housing Clamshell */}
          <div className="bento-macbook__lid">
            <div className="bento-macbook__rim">
              <div className="bento-macbook__bezel">
                {/* Apple Camera Notch */}
                <div className="bento-macbook__notch" aria-hidden="true">
                  <div className="bento-macbook__lens">
                    <span className="bento-macbook__sensor" />
                    <span className="bento-macbook__indicator" />
                  </div>
                </div>

                {/* 16:10 Display Panel - Smooth Desktop Scroll Clip */}
                <div className="bento-macbook__screen">
                  <Clip
                    name={site.shot}
                    alt={desktopAlt}
                    priority={priority}
                    sizes={size === "lead" ? "(min-width: 1320px) 960px, 100vw" : "(min-width: 768px) 540px, 100vw"}
                  />
                  {/* Specular glass sheen */}
                  <div className="bento-macbook__glare" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>

          {/* Clutch hinge */}
          <div className="bento-macbook__hinge" aria-hidden="true" />

          {/* Lower aluminum base deck with center thumb notch */}
          <div className="bento-macbook__base" aria-hidden="true">
            <div className="bento-macbook__base-lip">
              <div className="bento-macbook__thumb-notch" />
            </div>
          </div>

          {/* Physical contact shadow */}
          <div className="bento-macbook__shadow" aria-hidden="true" />
        </div>
      </a>

      {/* RIGHT: Realistic Google Pixel 10 Smartphone with Mobile Scrolling */}
      <a
        href={site.url}
        target="_blank"
        rel="noopener noreferrer"
        className="dual-showcase__pixel"
        aria-label={`View ${site.name} on Google Pixel 10 (opens in new tab)`}
      >
        <div className="bento-pixel">
          {/* Signature Rear Google Pixel Camera Visor crowning the top */}
          <div className="bento-pixel__visor" aria-hidden="true">
            <div className="bento-pixel__visor-lens" />
          </div>

          {/* Aerospace Satin Aluminum Chassis */}
          <div className="bento-pixel__chassis">
            {/* Authentic Pixel Button Layout: Power ABOVE Volume */}
            <div className="bento-pixel__btn bento-pixel__btn--power" aria-hidden="true" />
            <div className="bento-pixel__btn bento-pixel__btn--vol" aria-hidden="true" />

            {/* Antenna line breaks */}
            <div className="bento-pixel__antenna bento-pixel__antenna--tl" aria-hidden="true" />
            <div className="bento-pixel__antenna bento-pixel__antenna--tr" aria-hidden="true" />
            <div className="bento-pixel__antenna bento-pixel__antenna--bl" aria-hidden="true" />
            <div className="bento-pixel__antenna bento-pixel__antenna--br" aria-hidden="true" />

            {/* Front Glass Surface & Slim Bezel */}
            <div className="bento-pixel__glass">
              {/* Earpiece slit */}
              <div className="bento-pixel__earpiece" aria-hidden="true" />

              {/* Centered Hole-Punch Selfie Camera */}
              <div className="bento-pixel__punch" aria-hidden="true">
                <span className="bento-pixel__lens-glint" />
              </div>

              {/* Active Display Panel - Mobile Scrolling Inside Screen */}
              <div className="bento-pixel__screen">
                <div className="bento-pixel__scroll-track" aria-hidden="true">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={mobileSrc}
                    alt={mobileAlt}
                    loading="eager"
                    decoding="async"
                    className="bento-pixel__scroll-img"
                  />
                </div>

                {/* Android navigation gesture pill */}
                <div className="bento-pixel__home-bar" aria-hidden="true" />

                {/* Specular glass reflection */}
                <div className="bento-pixel__glare" aria-hidden="true" />
              </div>
            </div>
          </div>

          {/* Layered physical shadow */}
          <div className="bento-pixel__shadow" aria-hidden="true" />
        </div>
      </a>
    </div>
  );
}
