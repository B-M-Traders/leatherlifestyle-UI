"use client";
import { Form, FormProps, Input } from "antd";
import React, { useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useForm } from "antd/es/form/Form";
import { LoaderCircle } from "lucide-react";

type FieldType = {
  password?: string;
  email?: string;
};

const LoginForm = () => {
  const [form] = useForm();

  const [loading, setLoading] = useState(false);

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {};

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {};

  return (
    <>
      <div className="mx-auto shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] w-[330px] space-y-4 p-6 rounded-md">
        <div className="space-y-0.5">
          <h2 className="text-lg font-medium text-templateBrown">Welcome</h2>
          <p className="text-sm text-templateText">
            Login to access your profile
          </p>
        </div>
        <div className="pt-2">
          <Form
            form={form}
            name="login_form"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            size="large"
          >
            <Form.Item<FieldType>
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                  type: "email",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Email"
                className="border-gray-500 text-sm"
              />
            </Form.Item>

            <Form.Item<FieldType>
              className="-mt-2"
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                className="border-gray-500  text-sm"
                placeholder="Password"
              />
            </Form.Item>

            <div className="-mt-3 mb-4">
              <Link
                href={"/forgot-password"}
                className="text-right block  text-xs tracking-wide font-medium cursor-pointer hover:text-templateBrown text-templateBrown"
              >
                Forgot your password ?
              </Link>
            </div>

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
                  {loading ? "Logging..." : "Log In"}
                </button>
              </Form.Item>
              <p className="text-center -mt-4 text-templateText capitalize text-xs">
                New to {process.env.STORE_NAME?.replaceAll("-", " ")} ?{" "}
                <Link
                  href={"/auth/register"}
                  className="text-templatePrimary underline"
                >
                  Create an account
                </Link>
              </p>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
