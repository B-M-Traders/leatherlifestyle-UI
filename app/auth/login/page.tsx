import LoginForm from "@/components/Auth/LoginForm";
import { retrieveCustomer } from "@/lib/action/customer";
import { redirect } from "next/navigation";
import React from "react";

const Login = async () => {
  const customer = await retrieveCustomer().catch(() => null)
  if (customer) {
    redirect("/account/profile")
  }
  return (
    <div className="py-6 md:py-10 lg:py-14">
      <LoginForm />
    </div>
  );
};

export default Login;
