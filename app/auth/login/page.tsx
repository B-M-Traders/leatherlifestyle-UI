import { AuthContainer } from "@/components/Auth/AuthContainer";
import { AuthForm } from "@/components/Auth/AuthForm";
import LoginForm from "@/components/Auth/LoginForm";
import React from "react";

const Login = () => {
  return (
    <AuthContainer
      title="Welcome back"
      subtitle="Log in to continue"
      footer={<span></span>}
    >
      <AuthForm variant="login" />
    </AuthContainer>
  );
};

export default Login;
