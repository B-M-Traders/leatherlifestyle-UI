import { MoveLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const Back = () => {
  return (
    <>
      <div className="lg:hidden">
        <Link
          className="flex items-center text-sm font-medium gap-2"
          href={"/account"}
        >
          <MoveLeft size={20} strokeWidth={1.5} />
          Back
        </Link>
      </div>
      <div className="lg:hidden bg-templateBrown/20 h-[1px] w-full"></div>
    </>
  );
};

export default Back;
