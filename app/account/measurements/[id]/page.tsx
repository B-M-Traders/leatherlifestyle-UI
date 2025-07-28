import MeasurementEdit from "@/components/AccountComps/Measurement/MeasurementEdit";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

interface Props {
  params: Promise<{ id: number }>;
}

const MeasurementDetail = async ({ params }: Props) => {
  const measurementId = (await params).id;

  return (
    <div className="space-y-4">
      <Link
        href={"/account/measurements"}
        className="inline-flex hover:underline underline-offset-4 items-center gap-1 hover:gap-2 transition-all ease-in-out duration-200"
      >
        <ChevronLeft strokeWidth={1} size={20} />
        <button className="font-light text-sm">Go back</button>
      </Link>
      <MeasurementEdit id={measurementId} />
    </div>
  );
};

export default MeasurementDetail;
