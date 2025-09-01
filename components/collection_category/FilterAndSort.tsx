"use client";
import { useFilter } from "@/hooks/useFilter"; // adjust path
import { SlidersHorizontal, X } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { filterList } from "@/lib/utils";
import React, { useState } from "react";

const FilterAndSort = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const {
    filters,
    toggleFilter,
    clearFilters,
    hasSelectedFilters,
    removeSingleFilter,
  } = useFilter();

  return (
    <div>
      {/* Trigger */}
      <div
        onClick={() => setOpenDrawer(!openDrawer)}
        className="flex items-center gap-3 cursor-pointer group"
      >
        <span className="text-sm font-light tracking-wide group-hover:underline underline-offset-4">
          Filter & Sort
        </span>
        <SlidersHorizontal size={16} strokeWidth={1.5} />
      </div>

      {/* Backdrop */}
      {openDrawer && (
        <div
          onClick={() => setOpenDrawer(false)}
          className="bg-black/50 fixed top-0 bottom-0 left-0 right-0 z-20"
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 bottom-0 text-black right-0 w-[85%] md:w-[400px] bg-white shadow-lg z-30 p-6 ${
          openDrawer ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="overflow-y-auto h-full flex flex-col space-y-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-light tracking-wide">
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

            {/* Active filters */}
            {hasSelectedFilters && (
              <div className="flex flex-wrap gap-2">
                {Object.entries(filters).map(([category, values]) =>
                  Array.from(values).map((value) => (
                    <div
                      key={`${category}-${value}`}
                      className="flex items-center text-xs bg-gray-100 rounded-full px-3 py-1"
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
                      const checked = filters[item.label]?.has(value) || false;
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
      </div>
    </div>
  );
};

export default FilterAndSort;
