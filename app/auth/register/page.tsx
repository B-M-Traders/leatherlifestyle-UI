import { AuthContainer } from "@/components/Auth/AuthContainer";
import { AuthForm } from "@/components/Auth/AuthForm";
import RegisterForm from "@/components/Auth/RegisterForm";
import React from "react";

const Register = () => {
  return (
    <AuthContainer
      title="Get Started"
      subtitle="Create your account to begin"
      footer={<span></span>}
    >
      <AuthForm variant="register" />
    </AuthContainer>
  );
};

export default Register;
