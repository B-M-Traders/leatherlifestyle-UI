"use client";

import type React from "react";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import CustomInput from "../ui/custom-input";

type Props = {
  variant: "login" | "register";
  className?: string;
};

export function AuthForm({ variant, className }: Props) {
  const isLogin = variant === "login";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert(`${isLogin ? "Logging in" : "Creating account"} for ${email}`);
  }

  return (
    <form onSubmit={onSubmit} className={cn("space-y-5", className)}>
      {!isLogin && (
        <div className="space-y-2">
          <Label htmlFor="name" className="text-[13px]">
            Full name
          </Label>
          <CustomInput
            placeholder="John Deo"
            type="text"
            required
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="email" className="text-[13px]">
          Email
        </Label>
        <CustomInput
          placeholder="Johndoe@gmail.com"
          type="email"
          name="email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="password" className="text-[13px]">
            Password
          </Label>
          {isLogin && (
            <Link
              href="/forgot-password"
              className="text-xs text-neutral-500 hover:text-[#4f3424]"
            >
              Forgot?
            </Link>
          )}
        </div>
        <CustomInput
          placeholder="Password"
          type="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <Button
        type="submit"
        className="w-full h-10 bg-[#4f3424] text-white hover:bg-[#3f291d] focus-visible:ring-[#4f3424]"
      >
        {isLogin ? "Log in" : "Sign up"}
      </Button>

      <p className="text-center text-[13px] font-light text-neutral-600">
        {isLogin ? (
          <>
            Don&apos;t have an account?{" "}
            <Link href="/auth/register" className="font-medium text-[#4f3424]">
              Sign up
            </Link>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <Link href="/auth/login" className="font-medium text-[#4f3424]">
              Log in
            </Link>
          </>
        )}
      </p>
      <div className="flex gap-3 text-sm font-light items-center justify-center">
        <div className="h-[0.5px] w-full bg-gray-400"></div>
        <span>or</span>
        <div className="h-[0.5px] w-full bg-gray-400"></div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <button className="border flex items-center gap-2 justify-center border-templateBrown p-3 text-sm">
          <img
            className="h-5 w-5"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
            alt=""
          />
          Google
        </button>
        <button className="border flex items-center gap-2  justify-center border-templateBrown p-3 text-sm">
          <img
            className="h-5 w-5"
            src=" https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png"
            alt=""
          />
          Facebook
        </button>
      </div>
    </form>
  );
}
