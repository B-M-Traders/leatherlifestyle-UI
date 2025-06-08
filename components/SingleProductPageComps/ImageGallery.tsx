"use client";
import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  data: {
    product_images: string[];
  };
}

const OPTIONS: EmblaOptionsType = { loop: true };

const EmblaCarousel: React.FC<Props> = ({ data }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(OPTIONS);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    axis: "y",
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();
    emblaMainApi.on("select", onSelect).on("reInit", onSelect);
  }, [emblaMainApi, onSelect]);

  const scrollPrev = () => emblaMainApi?.scrollPrev();
  const scrollNext = () => emblaMainApi?.scrollNext();

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-4 max-w-5xl mx-auto">
      {/* Thumbnails */}
      <div className="">
        <div className="overflow-x-scroll" ref={emblaThumbsRef}>
          <div className="flex  lg:flex-col w-max gap-2">
            {data.product_images.map((item, index) => (
              <button
                key={index}
                onClick={() => onThumbClick(index)}
                className={`w-16 lg:w-[65px] h-16 lg:h-[75px] text-lg font-semibold flex items-center justify-center border-b-[6px] ${
                  selectedIndex === index
                    ? "border-templateBrown "
                    : "border-none bg-white text-templateBrown hover:border-templateBrown"
                }`}
              >
                <Image
                  src={item}
                  alt={item}
                  className="h-full w-full object-cover"
                  height={50}
                  width={50}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Carousel */}
      <div className="w-full relative">
        <div className="overflow-hidden" ref={emblaMainRef}>
          <div className="flex">
            {data.product_images.map((item, index) => (
              <div
                key={index}
                className="flex-[0_0_100%]  flex justify-center items-center border"
              >
                <Image
                  src={item}
                  alt={item}
                  sizes="100vw"
                  className="h-full w-full object-cover"
                  height={4}
                  width={4}
                />
              </div>
            ))}
          </div>
        </div>
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2  bg-white px-1 py-2 md:px-2 md:py-3 shadow-lg"
          onClick={scrollPrev}
        >
          <ChevronLeft className="h-6 w-6 md:h-8 md:w-8" strokeWidth={1} />
        </button>
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2  bg-white px-1 py-2 md:px-2 md:py-3 shadow-lg"
          onClick={scrollNext}
        >
          <ChevronRight className="h-6 w-6 md:h-8 md:w-8" strokeWidth={1} />
        </button>
      </div>
    </div>
  );
};

export default EmblaCarousel;
