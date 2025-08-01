"use client";
import React, { useState } from "react";

type FAQsProps = {
  data: {
    question: string;
    answer: string;
  }[];
};

const FAQsection: React.FC<FAQsProps> = ({ data }) => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const handleToggle = (itemValue: string) => {
    setOpenItem((prevValue) => (prevValue === itemValue ? null : itemValue));
  };

  return (
    <div className="max-w-[45rem] mx-auto">
      <div className="">
        <div>
          {data.map((faq, index) => (
            <div key={index} className="text-white border-b border-mildGold">
              {/* Question */}
              <button
                className={`w-full BricolageGrotesqueFont flex cursor-pointer  justify-between items-center px-4 py-6 text-left tracking-wide text-[#242424] hover:bg-gray-50 focus:outline-none ${
                  openItem === faq.question ? "" : ""
                }`}
                onClick={() => handleToggle(faq.question)}
              >
                <span className="text-sm font-light">{faq.question}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-5 h-5 transform transition-transform duration-500 ${
                    openItem === faq.question ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden BricolageGrotesqueFont transition-all duration-500 ${
                  openItem === faq.question ? "max-h-40" : "max-h-0"
                }`}
                style={{
                  maxHeight: openItem === faq.question ? "1000px" : "0px",
                }}
              >
                <div className="p-4 text-gray-500 text-[13px]  tracking-wider">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQsection;
