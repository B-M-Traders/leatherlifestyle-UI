"use client";
import { SlidersHorizontal, X } from "lucide-react";
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { filterList } from "@/lib/utils";
import { Button } from "../ui/button";

const FilterAndSort = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<
    Record<string, Set<string>>
  >({});

  const handleDrawerToggle = () => {
    setOpenDrawer(!openDrawer);
  };

  const toggleFilter = (category: string, value: string) => {
    setSelectedFilters((prev) => {
      const updated = new Set(prev[category] || []);
      updated.has(value) ? updated.delete(value) : updated.add(value);
      return { ...prev, [category]: updated };
    });
  };

  const clearFilters = () => {
    setSelectedFilters({});
  };

  const removeSingleFilter = (category: string, value: string) => {
    setSelectedFilters((prev) => {
      const updated = new Set(prev[category]);
      updated.delete(value);
      return { ...prev, [category]: updated };
    });
  };

  const hasSelectedFilters = Object.values(selectedFilters).some(
    (set) => set.size > 0
  );

  return (
    <div className="">
      {/* Filter Trigger */}
      <div
        onClick={handleDrawerToggle}
        className="flex items-center gap-3 cursor-pointer group"
      >
        <span className="text-sm font-light tracking-wide group-hover:underline underline-offset-4">
          Filter & Sort
        </span>
        <SlidersHorizontal size={16} strokeWidth={1.5} />
      </div>

      {/* Backdrop */}
      <div
        onClick={handleDrawerToggle}
        className="bg-black/50 fixed top-0 bottom-0 left-0 right-0 z-20 transition-opacity duration-300"
        style={{ display: openDrawer ? "block" : "none" }}
      ></div>

      {/* Drawer */}
      <div
        className={`fixed top-0 bottom-0 text-black right-0 w-[85%] md:w-[400px]  bg-white shadow-lg z-30  p-6 ${
          openDrawer ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="overflow-y-auto overflow-x-hidden h-full flex flex-col justify-between space-y-4 ">
          <div className="space-y-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-light tracking-wide text-center">
                  Filter & Sort
                </h4>
                {hasSelectedFilters && (
                  <button
                    onClick={clearFilters}
                    className="text-xs underline underline-offset-4 text-gray-500"
                  >
                    Clear All
                  </button>
                )}
              </div>

              <hr />

              {hasSelectedFilters && (
                <div className="flex flex-wrap gap-2">
                  {Object.entries(selectedFilters).map(([category, values]) =>
                    Array.from(values).map((value) => (
                      <div
                        key={`${category}-${value}`}
                        className="flex items-center text-xs  bg-gray-100 rounded-full px-3 py-1"
                      >
                        <span className="mr-1 text-gray-700">{value}</span>
                        <button
                          onClick={() => removeSingleFilter(category, value)}
                          className="text-gray-500 hover:text-black"
                        >
                          <X size={12} />
                        </button>
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>

            {/* Filters Accordion */}
            <Accordion type="single" className="w-full">
              {filterList.map((item, index) => (
                <AccordionItem
                  value={item.label}
                  key={index}
                  className="border-none"
                >
                  <AccordionTrigger className="hover:no-underline font-light tracking-wide text-sm">
                    {item.label}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      {item.list.map((value, idx) => {
                        const checked =
                          selectedFilters[item.label]?.has(value) || false;
                        return (
                          <label
                            key={idx}
                            htmlFor={`${item.label}-${value}`}
                            className="flex items-center gap-2 text-sm text-gray-800 cursor-pointer select-none"
                          >
                            <div
                              className={`w-4 h-4 rounded border flex items-center justify-center text-white text-[10px] font-bold transition ${
                                checked
                                  ? "bg-black border-black"
                                  : "border-gray-400"
                              }`}
                            >
                              {checked && <span>✔</span>}
                            </div>
                            <span>{value}</span>

                            {/* Hidden checkbox for accessibility */}
                            <input
                              id={`${item.label}-${value}`}
                              type="checkbox"
                              checked={checked}
                              onChange={() => toggleFilter(item.label, value)}
                              className="sr-only"
                            />
                          </label>
                        );
                      })}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div>
            <Button
              onClick={handleDrawerToggle}
              className="w-full h-10 font-extralight tracking-wider bg-templateBrown rounded"
            >
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterAndSort;
