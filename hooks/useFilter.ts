"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export const useFilter = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [filters, setFilters] = useState<Record<string, Set<string>>>({});
  const [page, setPage] = useState(1);

  // ✅ Sync state with URL
  useEffect(() => {
    const newFilters: Record<string, Set<string>> = {};
    let currentPage = 1;

    searchParams.forEach((value, key) => {
      if (key === "page") {
        currentPage = parseInt(value, 10) || 1;
      } else {
        if (!newFilters[key]) newFilters[key] = new Set();
        newFilters[key].add(value);
      }
    });

    setFilters(newFilters);
    setPage(currentPage);
  }, [searchParams]);

  const updateURL = (newFilters: Record<string, Set<string>>, newPage = 1) => {
    const params = new URLSearchParams();
    Object.entries(newFilters).forEach(([category, values]) => {
      values.forEach((v) => params.append(category, v));
    });
    params.set("page", newPage.toString());
    router.push(`?${params.toString()}`, { scroll: false });
  };

  // ✅ Toggle filter
  const toggleFilter = (category: string, value: string) => {
    setFilters((prev) => {
      const updated = new Set(prev[category] || []);
      updated.has(value) ? updated.delete(value) : updated.add(value);
      const newFilters = { ...prev, [category]: updated };
      updateURL(newFilters, 1); // reset to page 1 when filter changes
      return newFilters;
    });
  };

  // ✅ Clear all filters
  const clearFilters = () => {
    setFilters({});
    updateURL({}, 1);
  };

  // ✅ Remove single filter
  const removeSingleFilter = (category: string, value: string) => {
    setFilters((prev) => {
      const updated = new Set(prev[category]);
      updated.delete(value);
      const newFilters = { ...prev, [category]: updated };
      updateURL(newFilters, 1);
      return newFilters;
    });
  };

  // ✅ Handle page change
  const changePage = (newPage: number) => {
    setPage(newPage);
    updateURL(filters, newPage);
  };

  return {
    filters,
    page,
    toggleFilter,
    clearFilters,
    removeSingleFilter,
    changePage,
    hasSelectedFilters: Object.values(filters).some((set) => set.size > 0),
  };
};
