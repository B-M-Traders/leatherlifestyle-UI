"use client";
import { PencilRuler } from "lucide-react";
import React, { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import CustomInput from "../ui/custom-input";
import CustomSelect from "../ui/custom-select";
import { Button } from "../ui/button";
import MeasurementCard from "./MeasurementCard";
import { mockMeasurements } from "@/lib/mockData";

const typeList = [
  { label: "Jacket", code: "jacket" },
  { label: "Pant", code: "pant" },
  { label: "Suit", code: "suit" },
];

const genderList = [
  { label: "Male", code: "male" },
  { label: "Female", code: "female" },
  { label: "Other", code: "other" },
];

type Measurement = {
  id?: number | null;
  name: string;
  type: string;
  gender: string;
};

const Measurements = () => {
  const [showAddNew, setShowAddNew] = useState(false);
  const [newMeasurement, setNewMeasurement] = useState<Measurement>({
    name: "",
    type: "",
    gender: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setNewMeasurement((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange =
    (name: string) => (e: React.ChangeEvent<HTMLSelectElement>) => {
      setNewMeasurement((prev) => ({ ...prev, [name]: e.target.value }));
    };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("New Measurement Submitted:", newMeasurement);
  };

  return (
    <>
      <div className="space-y-5 lg:space-y-10">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <h2 className="text-lg text-templateBrown lg:text-xl uppercase tracking-wide font-medium flex items-center gap-2">
              <PencilRuler size={20} /> Measurements
            </h2>
            <p className="text-xs font-light">Manage your saved measurements</p>
          </div>
          <button
            onClick={() => setShowAddNew(true)}
            className="text-sm underline underline-offset-2"
          >
            Add New
          </button>
        </div>

        {mockMeasurements.length > 0 && (
          <ul className="text-sm space-y-4">
            {mockMeasurements.map((item, idx) => (
              <React.Fragment key={idx}>
                <MeasurementCard item={item} />
              </React.Fragment>
            ))}
          </ul>
        )}
      </div>

      <Dialog
        open={showAddNew}
        onOpenChange={(open) => !open && setShowAddNew(false)}
      >
        <DialogContent className="sm:max-w-[450px]">
          <DialogHeader>
            <DialogTitle className="capitalize font-normal text-base">
              Add New Measurements
            </DialogTitle>
            <DialogDescription className="text-[12px] font-light">
              Fill out the fields and click save when you’re done.
            </DialogDescription>
          </DialogHeader>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <CustomInput
              name="name"
              placeholder="Name"
              value={newMeasurement.name}
              onChange={handleInputChange}
              required
            />

            <CustomSelect
              name="type"
              list={typeList}
              value={newMeasurement.type}
              onChange={handleSelectChange("type")}
              required
            />

            <CustomSelect
              name="gender"
              list={genderList}
              value={newMeasurement.gender}
              onChange={handleSelectChange("gender")}
              required
            />

            <div className="w-full mt-6 flex items-center gap-2">
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button
                type="submit"
                className="bg-templateBrown font-light tracking-wide"
              >
                Save Measurement
              </Button>
            </div>
          </form>

          <DialogFooter />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Measurements;
