"use client";
import confetti from "canvas-confetti";
import React, { useEffect } from "react";

const Showconfetti = () => {
  const showConfetti = () => {
    const duration = 2 * 1000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };

  useEffect(() => {
    showConfetti();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return null;
};

export default Showconfetti;
