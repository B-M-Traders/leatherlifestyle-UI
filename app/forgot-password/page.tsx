import { AuthContainer } from "@/components/Auth/AuthContainer";
import { AuthForm } from "@/components/Auth/AuthForm";
import { ForgotForm } from "@/components/Auth/ForgotForm";
import ForgotPasswordForm from "@/components/Auth/ForgotPasswordForm";
import React from "react";

const ForgotPassword = () => {
  return (
    <AuthContainer
      title="Forgot Password"
      subtitle="Enter your email address, and we’ll send you a 6 digit One-Time Password (OTP) to verify your identity and reset your password."
      footer={<span></span>}
    >
      <ForgotForm />
    </AuthContainer>
    // <div className="">
    //   <div className="templateContainer py-16 flex items-center justify-center">
    //     <ForgotPasswordForm />
    //   </div>
    // </div>
  );
};

export default ForgotPassword;
