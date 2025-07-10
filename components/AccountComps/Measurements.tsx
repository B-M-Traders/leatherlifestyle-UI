import { PencilRuler } from "lucide-react";
import React from "react";

const Measurements = () => {
  return (
    <div className="space-y-5 lg:space-y-10">
      <h2 className="lg:text-xl uppercase tracking-wide font-normal flex items-center gap-2">
        <PencilRuler size={24} strokeWidth={1} /> Measurements
      </h2>
      <div></div>
    </div>
  );
};

export default Measurements;
