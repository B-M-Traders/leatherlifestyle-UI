"use client";
import { useActionState } from "react";
import Link from "next/link";
import { LoaderCircle } from "lucide-react";
import { login } from "@/lib/action/customer";
import Input from "./input";

type FieldType = {
  password?: string;
  email?: string;
};

const LoginForm = () => {

  const [message, formAction, isPending] = useActionState(login, {
    success: false,
    error: null,
  })

  console.log(message)

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
          <form
            className="space-y-2"
            action={formAction}
          >
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
                label="Password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
              />
            </div>
            {/* <CustomInput name="email" placeholder="Email" required={true} /> */}
            {/* <CustomInput name="password" placeholder="Password" required={true} /> */}
            {/* <Form.Item<FieldType>
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
            </Form.Item> */}

            {/* <Form.Item<FieldType>
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
            </Form.Item> */}

            <div className=" mb-4">
              <Link
                href={"/forgot-password"}
                className="text-right block  text-xs tracking-wide font-medium cursor-pointer hover:text-templateBrown text-templateBrown"
              >
                Forgot your password ?
              </Link>
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
                {isPending ? "Logging..." : "Log In"}
              </button>
              <p className="text-center text-templateText capitalize text-xs">
                New to {process.env.STORE_NAME?.replaceAll("-", " ")} ?{" "}
                <Link
                  href={"/auth/register"}
                  className="text-templatePrimary underline"
                >
                  Create an account
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
