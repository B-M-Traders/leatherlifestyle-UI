"use client";
import { Button, Form, FormProps, Input, Modal } from "antd";
import Image from "next/image";
import React, { useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useForm } from "antd/es/form/Form";
import { useRouter } from "next/navigation";
import { Loader2, User } from "lucide-react";

type FieldType = {
  password?: string;
  email?: string;
};

const ForgotPasswordForm = () => {
  const router = useRouter();
  const [otpForm] = useForm();
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState<string | null>();
  const [flag, setFlag] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleGetOtp = async (e: any) => {};

  const handleOtpVerify = async (values: any) => {};

  const handleUpdateNewPassword = async (values: any) => {};

  return (
    <>
      {flag ? (
        <div className="bg-white shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] w-[350px] space-y-4 p-6 rounded-md">
          <h2 className="text-xl text-templateBrown text-center">
            Set new password
          </h2>
          <div className="">
            <Form
              form={otpForm}
              onFinish={handleUpdateNewPassword}
              className="w-full text-center "
              size="large"
            >
              <Form.Item name="newPassword">
                <Input.Password
                  placeholder="New password"
                  className="w-full text-center"
                />
              </Form.Item>
              <div className="-mt-2">
                <Form.Item>
                  <button
                    type="submit"
                    disabled={loading}
                    className={`${
                      loading
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:opacity-90"
                    } flex rounded-lg items-center uppercase justify-center w-full gap-2 border border-templateBrown bg-templateBrown  py-3 text-sm text-white font-medium`}
                  >
                    {loading && <Loader2 size={15} className="animate-spin" />}
                    Verify
                  </button>
                </Form.Item>
              </div>
            </Form>
          </div>
        </div>
      ) : (
        <div className="bg-white shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] w-[350px] space-y-4 p-6 rounded-md">
          <div className="space-y-3">
            <h2 className="text-lg text-templateBrown">
              Forgot Your Password?
            </h2>
            <p className="text-[0.8rem] text-templateBrown tracking-wide ">
              Enter your email address, and we’ll send you a 6 digit One-Time
              Password (OTP) to verify your identity and reset your password.
            </p>
          </div>
          <div className="">
            <form onSubmit={handleGetOtp}>
              <div className="mb-4">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  // value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`block w-full rounded border-gray-300 shadow-sm focus:border-black focus:ring-black px-3 py-2.5 text-base border outline-none`}
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className={`${
                    loading
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:opacity-90"
                  } flex rounded items-center  justify-center w-full gap-2 border border-templateBrown bg-templateBrown  py-3 text-sm text-white font-medium`}
                >
                  {loading && <Loader2 size={15} className="animate-spin" />}
                  Get code
                </button>
                <p className="text-center mt-2 text-templateBrown text-xs">
                  {/* Remember your password ?{" "} */}
                  <Link
                    href={"/auth/login"}
                    className="text-templateBrown underline"
                  >
                    Login ?
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      )}
      <Modal width={400} open={isModalOpen} footer={null}>
        <div className="space-y-4 px-5 pb-5 pt-8">
          <div className="space-y-2">
            <h2 className="text-base text-center font-medium text-templateBrown">
              Enter OTP Verification Code
            </h2>
            <p className="text-xs text-templateBrown text-center">
              We’ve sent a 6-digit OTP to your registered email address. Please
              enter it below to verify your identity.
            </p>
          </div>
          <Form
            form={otpForm}
            onFinish={handleOtpVerify}
            className="w-full text-center "
          >
            <Form.Item name="otp">
              <Input.OTP length={6} className="w-full text-center" />
            </Form.Item>
            <Form.Item>
              <button
                type="submit"
                disabled={loading}
                className={`${
                  loading ? "opacity-50 cursor-not-allowed" : "hover:opacity-90"
                } flex rounded-lg items-center uppercase justify-center w-full gap-2 border border-templateBrown bg-temptemplateBrownlateText  py-3 text-sm text-white font-medium`}
              >
                {loading && <Loader2 size={15} className="animate-spin" />}
                Verify
              </button>
            </Form.Item>
          </Form>
          <p className="text-xs text-templateBrown text-center">
            Didn’t receive the code ?{" "}
            <p className="text-templateBrown hover:underline  cursor-pointer">
              Resend OTP
            </p>
          </p>
        </div>
      </Modal>
    </>
  );
};

export default ForgotPasswordForm;
