"use client";
import { Button, Form, FormProps, Input, Modal, Space } from "antd";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { LoaderCircle, LockKeyhole, Mail, UserRound } from "lucide-react";
// import toast, { Toaster } from "react-hot-toast";
import { useForm } from "antd/es/form/Form";
import { useRouter } from "next/navigation";

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
  const [form] = useForm();
  const [otpForm] = useForm();
  const [submittingOtp, setSubmittingOtp] = useState(false);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [isOtpModalOpen, setIsOtpModalOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [formValues, setFormValues] = useState<formValues>({});

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {};

  const handleClearOtp = () => {
    otpForm.resetFields();
  };

  const handleOtpSubmit = async (values: any) => {};

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.error("Failed:", errorInfo);
  };

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
          <Form
            form={form}
            name="register_form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            size="large"
          >
            <Space>
              <Form.Item<FieldType>
                name="first_name"
                rules={[
                  {
                    required: true,
                    message: "Please input your name!",
                    type: "string",
                  },
                ]}
              >
                <Input
                  prefix={<UserRound size={14} className="mr-1" />}
                  placeholder="First Name"
                  className="border-gray-500 text-sm"
                />
              </Form.Item>
              <Form.Item<FieldType>
                name="last_name"
                rules={[
                  {
                    required: true,
                    message: "Please input your name!",
                    type: "string",
                  },
                ]}
              >
                <Input
                  prefix={<UserRound size={14} className="mr-1" />}
                  placeholder="Last Name"
                  className="border-gray-500 text-sm"
                />
              </Form.Item>
            </Space>
            <Form.Item<FieldType>
              name="email"
              className="-mt-2"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                  type: "email",
                },
              ]}
            >
              <Input
                prefix={<Mail size={14} className="mr-1" />}
                placeholder="Email"
                className="border-gray-500 text-sm"
              />
            </Form.Item>

            {/* Password Field */}
            <Form.Item
              className="-mt-2"
              name="password"
              rules={[
                { required: true, message: "Please enter your Password!" },
                // {
                //   pattern:
                //     /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
                //   message:
                //     "Password must be at least 8 characters, include an uppercase letter, a number, and a special character!",
                // },
              ]}
            >
              <Input.Password
                prefix={<LockKeyhole size={14} className="mr-1" />}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                className="border-gray-500 text-sm"
                placeholder="Password"
              />
            </Form.Item>

            {/* Confirm Password Field */}
            <Form.Item
              className="-mt-2 "
              name="confirmPassword"
              dependencies={["password"]} // Ensures the password field is revalidated when the confirm password changes
              rules={[
                { required: true, message: "Please confirm your Password!" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("The passwords do not match!")
                    );
                  },
                }),
              ]}
            >
              <Input
                prefix={<LockKeyhole size={14} className="mr-1" />}
                type="password"
                className="border-gray-500 text-sm"
                placeholder="Confirm password"
              />
            </Form.Item>

            <div>
              <Form.Item>
                <button
                  type="submit"
                  disabled={loading}
                  className={`flex items-center -mt-4 capitalize justify-center w-full gap-2 border border-templateBrown bg-templateBrown hover:opacity-90 py-2.5 rounded-md text-sm tracking-widest text-white font-medium ${
                    loading ? "cursor-not-allowed" : "cursor-pointer"
                  }`}
                >
                  {loading && (
                    <LoaderCircle className="animate-spin" size={15} />
                  )}
                  {loading ? "Registering..." : "Register"}
                </button>
              </Form.Item>
              <p className="text-center -mt-4 text-templateBrown text-xs">
                Already {process.env.STORE_NAME?.replaceAll("-", " ")} user ?{" "}
                <Link
                  href={"/auth/login"}
                  className="text-templborder-templateBrown underline"
                >
                  Login now
                </Link>
              </p>
            </div>
          </Form>
        </div>
      </div>
      {/* OTP MODAL */}
      <Modal width={400} open={isOtpModalOpen} footer={null}>
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
                    className={`flex rounded-md items-center uppercase justify-center w-full gap-2 border border-templateBrown bg-white hover:opacity-90 py-3 text-sm text-templborder-templateBrown font-medium ${
                      submittingOtp && "cursor-not-allowed"
                    }`}
                  >
                    Clear all
                  </button>
                  <button
                    type="submit"
                    disabled={submittingOtp}
                    className={`flex rounded-md items-center uppercase justify-center w-full gap-2 border border-templateBrown bg-templateBrown hover:opacity-90 py-3 text-sm text-white font-medium ${
                      submittingOtp && "cursor-not-allowed"
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
      </Modal>
    </>
  );
};

export default RegisterForm;
