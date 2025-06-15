"use client";
import React, { useActionState, useState } from "react";
import Link from "next/link";
import { LoaderCircle } from "lucide-react";
import { signup } from "@/lib/action/customer";
import Input from "./input";

type FieldType = {
  first_name?: string;
  last_name?: string;
  email?: string;
  password?: string;
};

interface formValues {
  first_name?: string;
  last_name?: string;
  email?: string;
  password?: string;
}

const RegisterForm = () => {
  const [isOtpModalOpen, setIsOtpModalOpen] = useState(false);
  const [formValues, setFormValues] = useState<formValues>({});

  const [message, formAction, isPending] = useActionState(signup, {
    success: false,
    error: null,
  })

  return (
    <>
      <div className="mx-auto shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] w-[350px] space-y-2 p-6 rounded-md">
        <div className="space-y-0.5">
          <h2 className="text-lg font-medium text-templateBrown">Welcome</h2>
          <p className="text-sm text-templateBrown">
            Login to access your profile
          </p>
        </div>
        <div className="pt-2">
          <form action={formAction} className="space-y-2">
            <div className="mt-2">
              <Input
                label="First name"
                name="first_name"
                required
                autoComplete="given-name"
              />
            </div>
            <div className="mt-2">
              <Input
                label="Last name"
                name="last_name"
                required
                autoComplete="family-name"
              />
            </div>
            <div className="mt-2">
              <Input
                label="Email"
                name="email"
                type="email"
                required
                autoComplete="email"
              />
            </div>
            <div className="mt-2">
              <Input
                label="Phone"
                name="phone"
                type="tel"
                autoComplete="tel"
              />
            </div>
            <div className="mt-2">
              <Input
                label="Password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
              />
            </div>

            <div>
              <button
                type="submit"
                disabled={isPending}
                className={`flex items-center capitalize justify-center w-full gap-2 border border-templateBrown bg-templateBrown hover:opacity-90 py-2.5 rounded-md text-sm tracking-widest text-white font-medium ${isPending ? "cursor-not-allowed" : "cursor-pointer"
                  }`}
              >
                {isPending && (
                  <LoaderCircle className="animate-spin" size={15} />
                )}
                {isPending ? "Registering..." : "Register"}
              </button>
              <p className="text-center text-templateBrown text-xs">
                Already {process.env.STORE_NAME?.replaceAll("-", " ")} user ?{" "}
                <Link
                  href={"/auth/login"}
                  className="text-templborder-templateBrown underline"
                >
                  Login now
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
      {/* OTP MODAL */}
      {/* <Modal width={400} open={isOtpModalOpen} footer={null}>
        <div className="space-y-4 py-2">
          <h2 className="text-lg font-medium text-center tracking-wide">
            Verify your email
          </h2>
          <p className="text-center text-[0.8rem] tracking-wide">
            An OTP has been sent to your email{" "}
            <span className="text-templborder-templateBrown underline">
              {formValues?.email}
            </span>{" "}
            Please enter the 6-digit OTP below to verify.
          </p>
          <Form form={otpForm} onFinish={handleOtpSubmit}>
            <div className="space-y-4">
              <div className="flex items-center justify-center">
                <Form.Item
                  rules={[{ required: true, message: "Please enter otp!" }]}
                  name="otp"
                >
                  <Input.OTP disabled={submittingOtp} length={6} />
                </Form.Item>
              </div>

              <Form.Item>
                <div className="flex items-center -mt-2 gap-2">
                  <button
                    onClick={handleClearOtp}
                    disabled={submittingOtp}
                    type="button"
                    className={`flex rounded-md items-center uppercase justify-center w-full gap-2 border border-templateBrown bg-white hover:opacity-90 py-3 text-sm text-templborder-templateBrown font-medium ${submittingOtp && "cursor-not-allowed"
                      }`}
                  >
                    Clear all
                  </button>
                  <button
                    type="submit"
                    disabled={submittingOtp}
                    className={`flex rounded-md items-center uppercase justify-center w-full gap-2 border border-templateBrown bg-templateBrown hover:opacity-90 py-3 text-sm text-white font-medium ${submittingOtp && "cursor-not-allowed"
                      }`}
                  >
                    {submittingOtp && (
                      <LoaderCircle size={15} className="animate-spin" />
                    )}
                    Submit
                  </button>
                </div>
              </Form.Item>
            </div>
          </Form> 
        </div>
      </Modal>*/}
    </>
  );
};

export default RegisterForm;
