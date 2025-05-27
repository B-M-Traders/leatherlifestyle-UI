import { redirect } from "next/navigation";
import React from "react";

const Page = () => {
  redirect("/");
  return null;
};

export default Page;
