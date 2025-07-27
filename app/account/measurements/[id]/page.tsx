import { ChevronLeft, MoveLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const MeasurementDetail = () => {
  return (
    <div>
      <Link
        href={"/account/measurements"}
        className="inline-flex hover:underline underline-offset-4 items-center gap-1 hover:gap-2 transition-all ease-in-out duration-200"
      >
        <ChevronLeft strokeWidth={1} size={20} />
        <button className="font-light text-sm">Go back</button>
      </Link>
    </div>
  );
};

export default MeasurementDetail;
