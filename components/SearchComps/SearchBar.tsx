"use client";
import { featuredProducts } from "@/lib/Menudata";
import { Search, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import BasicProductCard from "../Cards/BasicProductCard";
import { useDebouncedCallback } from "use-debounce";

const SearchBar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState(featuredProducts);

  const handleSearchToggle = () => {
    setShowSearch(!showSearch);
    setSearchTerm("");
    setSearchResults(featuredProducts);
  };

  useEffect(() => {
    if (showSearch) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [showSearch]);

  // Debounced search handler
  const debouncedSearch = useDebouncedCallback((term: string) => {
    if (term.trim()) {
      const filtered = featuredProducts.filter((product) =>
        product.text.toLowerCase().includes(term.toLowerCase())
      );
      setSearchResults(filtered);
    } else {
      setSearchResults(featuredProducts);
    }

    setIsLoading(false); // Stop loading after processing
  }, 500);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    setIsLoading(true);
    debouncedSearch(value);
  };

  return (
    <div>
      <div
        onClick={handleSearchToggle}
        className="p-2 rounded-full hover:text-black cursor-pointer hover:bg-gray-100"
      >
        <Search size={18} strokeWidth={1.5} />
      </div>

      {showSearch && (
        <div className="fixed inset-0 py-6 space-y-5 bg-white z-[100] overflow-auto">
          <div
            onClick={handleSearchToggle}
            className="absolute top-2 lg:top-5 cursor-pointer text-templateBrown right-2 lg:right-5"
          >
            <X size={30} strokeWidth={1} />
          </div>

          <div className="templateContainer flex flex-col items-center justify-center space-y-2">
            <input
              type="search"
              value={searchTerm}
              onChange={handleInputChange}
              placeholder="Search what you want..."
              autoFocus
              className="max-w-xl mx-auto px-3 lg:px-6 placeholder:text-sm placeholder:font-light focus:outline-none text-templateBrown w-full h-10 lg:h-12 border border-templateBrown lg:rounded-full"
            />
          </div>

          <hr />

          <div className="templateContainer space-y-4">
            <div className="flex text-templateBrown text-sm font-light items-center justify-between">
              <h2 className="">
                {searchTerm ? "Search Results" : "Recommended for you"}
              </h2>
              {/* <p>
                {searchResults.length > 9
                  ? `${searchResults.length}`
                  : `0${searchResults.length} products`}
              </p> */}
            </div>

            {isLoading ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {Array(5)
                  .fill(5)
                  .map((_, index) => (
                    <div key={index} className="space-y-2">
                      <div className="aspect-[4/5] bg-gray-100 animate-pulse" />
                      <div className="h-8 bg-gray-100 animate-pulse" />
                    </div>
                  ))}
              </div>
            ) : searchResults.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {searchResults.map((product, index) => (
                  <div onClick={handleSearchToggle} key={index}>
                    <BasicProductCard item={product} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-6 text-templateBrown">
                No products found.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
