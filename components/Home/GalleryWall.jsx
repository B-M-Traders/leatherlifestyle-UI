"use client";
import { useState } from "react";
import "@/style/galleryWall.css";
import Image from "next/image";

function GalleryWall({
  items = [],
  direction = "horizontal",
  pauseOnHover = false,
  size = "clamp(8rem, 1rem + 30vmin, 25rem)",
  duration = "60s",
  textColor = "#ffffff",
  bgColor = "#fff",
  bgAccentColor = "#111111",
}) {
  const [isPaused, setIsPaused] = useState(false);

  const wrapperClass = [
    "galleryWall-wrapper",
    direction === "vertical" && "wrapper--vertical",
  ]
    .filter(Boolean)
    .join(" ");

  const marqueeClass = [
    "marquee",
    direction === "vertical" && "marquee--vertical",
    isPaused && "paused",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article
      className={wrapperClass}
      style={{
        "--size": size,
        "--duration": duration,
        "--color-text": textColor,
        "--color-bg": bgColor,
        "--color-bg-accent": bgAccentColor,
      }}
    >
      <div
        className={marqueeClass}
        onMouseEnter={() => pauseOnHover && setIsPaused(true)}
        onMouseLeave={() => pauseOnHover && setIsPaused(false)}
      >
        <div className="marquee__group">
          {items.map((item, idx) => (
            <Image
              height={400}
              width={400}
              className="bg-gray-200 border"
              key={idx}
              src={item}
              alt={item}
            />
          ))}
        </div>
        <div className="marquee__group" aria-hidden="true">
          {items.map((item, idx) => (
            <Image
              height={400}
              width={400}
              className="bg-gray-200 border"
              key={`dup1-${idx}`}
              src={item}
              alt={item}
            />
          ))}
        </div>
      </div>

      <div
        className={`${marqueeClass} marquee--reverse`}
        onMouseEnter={() => pauseOnHover && setIsPaused(true)}
        onMouseLeave={() => pauseOnHover && setIsPaused(false)}
      >
        <div className="marquee__group">
          {items.map((item, idx) => (
            <Image
              height={400}
              width={400}
              key={`rev-${idx}`}
              className="bg-gray-200 border"
              src={item}
              alt={item}
            />
          ))}
        </div>
        <div className="marquee__group" aria-hidden="true">
          {items.map((item, idx) => (
            <Image
              height={400}
              width={400}
              key={`dup2-${idx}`}
              className="bg-gray-200 border"
              src={item}
              alt={item}
            />
          ))}
        </div>
      </div>
    </article>
  );
}

export default GalleryWall;
