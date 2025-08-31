"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import CustomInput from "../ui/custom-input";

export function ForgotForm() {
  const [email, setEmail] = useState("");
  const [codeSent, setCodeSent] = useState(false);
  const [verified, setVerified] = useState(false);
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!codeSent) {
      // Step 1: Request OTP
      console.log("Sending code to:", email);
      setCodeSent(true);
    } else if (codeSent && !verified) {
      // Step 2: Verify OTP
      console.log("Verifying OTP:", otp, "for email:", email);
      setVerified(true);
    } else if (verified) {
      // Step 3: Change Password
      if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      console.log("Resetting password for:", email, "New Password:", password);
      alert("Password successfully changed!");
    }
  }

  return (
    <form onSubmit={onSubmit} className={cn("space-y-5")}>
      {/* Step 1: Email Input */}
      {!codeSent && (
        <div className="space-y-2">
          <Label htmlFor="email" className="text-[13px]">
            Email
          </Label>
          <CustomInput
            placeholder="johndoe@gmail.com"
            type="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      )}

      {/* Step 2: OTP Input */}
      {codeSent && !verified && (
        <div className="space-y-2">
          <Label htmlFor="otp" className="text-[13px]">
            Enter Code
          </Label>
          <CustomInput
            placeholder="Enter verification code"
            type="text"
            name="otp"
            required
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
        </div>
      )}

      {/* Step 3: New Password Input */}
      {verified && (
        <>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-[13px]">
              New Password
            </Label>
            <CustomInput
              placeholder="Enter new password"
              type="password"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword" className="text-[13px]">
              Confirm Password
            </Label>
            <CustomInput
              placeholder="Re-enter new password"
              type="password"
              name="confirmPassword"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        </>
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        className="w-full h-10 bg-[#4f3424] text-white hover:bg-[#3f291d] focus-visible:ring-[#4f3424]"
      >
        {!codeSent
          ? "Get Code"
          : codeSent && !verified
          ? "Verify Code"
          : "Change Password"}
      </Button>

      {/* Footer */}
      {!verified && (
        <p className="text-center text-[13px] font-light text-neutral-600">
          Don&apos;t have an account?{" "}
          <Link href="/auth/register" className="font-medium text-[#4f3424]">
            Sign up
          </Link>
        </p>
      )}
    </form>
  );
}
