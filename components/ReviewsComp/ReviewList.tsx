import React from "react";
import ReviewCard from "./ReviewCard";
import { reviews } from "@/lib/mockData";

const ReviewList = () => {
  return (
    <div
      id={"reviews"}
      className="max-w-5xl px-4 mx-auto space-y-8 py-6 md:py-10 lg:py-14"
    >
      <h2 className="text-center text-[24px] lg:text-[30px] tracking-tight font-normal text-templateBrown">
        Customer Reviews
      </h2>
      <div className="space-y-8">
        {reviews.map((item, index) => (
          <React.Fragment key={index}>
            <ReviewCard data={item} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ReviewList;
