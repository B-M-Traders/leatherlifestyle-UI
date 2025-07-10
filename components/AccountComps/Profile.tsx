"use client";
import React, { useState } from "react";
import { Pencil, UserRound } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import CustomInput from "../ui/custom-input";
import CustomSelect from "../ui/custom-select";

const Profile = () => {
  const [editMode, setEditMode] = useState("");
  return (
    <div className="space-y-10">
      <h2 className="text-xl uppercase tracking-wide font-normal flex items-center gap-2">
        <UserRound size={24} strokeWidth={1} /> My Profile
      </h2>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-light uppercase tracking-wide">
            Basic Information
          </h3>
          <p
            onClick={() => setEditMode("basic-information")}
            className="underline flex items-center gap-1 underline-offset-2 text-xs cursor-pointer font-light text-templateBrown"
          >
            <Pencil size={12} strokeWidth={1.5} /> Edit
          </p>
        </div>
        <div className="space-y-4">
          <div className="text-sm grid grid-cols-[30%_70%]">
            <p className="font-light tracking-wide text-gray-600">First Name</p>
            <p className="font-normal tracking-wide">Ansari</p>
          </div>
          <div className="text-sm grid grid-cols-[30%_70%]">
            <p className="font-light tracking-wide text-gray-600">Last Name</p>
            <p className="font-normal tracking-wide">Afroz</p>
          </div>
          <div className="text-sm grid grid-cols-[30%_70%]">
            <p className="font-light tracking-wide text-gray-600">Gender</p>
            <p className="font-normal tracking-wide">-</p>
          </div>
          {/* <div className="text-sm grid grid-cols-[30%_70%]">
            <p className="font-light tracking-wide text-gray-600">
              Date of birth
            </p>
            <p className="font-normal tracking-wide">-</p>
          </div> */}
        </div>
      </div>
      <hr />
      <div className="space-y-6">
        <h3 className="text-base font-light uppercase tracking-wide">
          Contact Information
        </h3>
        <div className="space-y-4">
          <div className="text-sm relative grid grid-cols-[30%_70%]">
            <p className="font-light tracking-wide text-gray-600">Email</p>
            <p className="font-normal tracking-wide">
              ansariafroz720@gmail.com
            </p>
            <p
              onClick={() => setEditMode("email")}
              className="underline absolute right-0 top-0 flex items-center gap-1 underline-offset-2 text-xs cursor-pointer font-light text-templateBrown"
            >
              <Pencil size={12} strokeWidth={1.5} /> Edit
            </p>
          </div>
          <div className="text-sm relative grid grid-cols-[30%_70%]">
            <p className="font-light tracking-wide text-gray-600">
              Mobile Number
            </p>
            <p className="font-normal tracking-wide">+91 72088 20113 </p>
            <p
              onClick={() => setEditMode("phone")}
              className="underline absolute right-0 top-0 flex items-center gap-1 underline-offset-2 text-xs cursor-pointer font-light text-templateBrown"
            >
              <Pencil size={12} strokeWidth={1.5} /> Edit
            </p>
          </div>
          <div className="text-sm relative grid grid-cols-[30%_70%]">
            <p className="font-light tracking-wide text-gray-600">Password</p>
            <p className="font-normal tracking-wide">********</p>
            <p
              onClick={() => setEditMode("password")}
              className="underline absolute right-0 top-0 flex items-center gap-1 underline-offset-2 text-xs cursor-pointer font-light text-templateBrown"
            >
              <Pencil size={12} strokeWidth={1.5} /> Change
            </p>
          </div>
        </div>
      </div>
      <Dialog
        open={!!editMode}
        onOpenChange={(open) => !open && setEditMode("")}
      >
        <DialogContent className="sm:max-w-[450px]">
          <DialogHeader>
            <DialogTitle className="capitalize font-normal text-base tracking-normal">
              Update {editMode.replaceAll("-", " ")}
            </DialogTitle>
            <DialogDescription className="text-[12px] font-light">
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <div>
            {editMode === "basic-information" && (
              <form action="">
                <div className="grid gap-3 grid-cols-2">
                  <CustomInput name="firstName" required />
                  <CustomInput name="lastName" required />
                  <div className="col-span-2">
                    <CustomSelect
                      name="gender"
                      list={[
                        { label: "Male", code: "male" },
                        { label: "Female", code: "female" },
                        { label: "Other", code: "other" },
                      ]}
                    />
                  </div>
                </div>
                <div className="w-full mt-6 flex items-center justify-end gap-2">
                  <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogClose>
                  <Button className="bg-templateBrown">Update</Button>
                </div>
              </form>
            )}
            {editMode === "email" && (
              <form action="">
                <div className="">
                  <CustomInput
                    name="email"
                    placeholder="Enter email"
                    required
                  />
                </div>
                <div className="w-full mt-6 flex items-center justify-end gap-2">
                  <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogClose>
                  <Button className="bg-templateBrown">Update Email</Button>
                </div>
              </form>
            )}
            {editMode === "phone" && (
              <form action="">
                <div className="">
                  <CustomInput
                    name="number"
                    placeholder="Enter email"
                    required
                  />
                </div>
                <div className="w-full mt-6 flex items-center justify-end gap-2">
                  <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogClose>
                  <Button className="bg-templateBrown">Update Phone</Button>
                </div>
              </form>
            )}
            {editMode === "password" && (
              <form action="" className="space-y-3">
                <CustomInput
                  name="newPassword"
                  placeholder="New Password"
                  required
                />
                <CustomInput
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  required
                />
                <div className="w-full mt-6 flex items-center justify-end gap-2">
                  <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogClose>
                  <Button className="bg-templateBrown">Update Password</Button>
                </div>
              </form>
            )}
          </div>
          <DialogFooter></DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Profile;
