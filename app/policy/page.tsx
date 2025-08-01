import { redirect } from "next/navigation";

const Page = () => {
  redirect("/policy/privacy-policy");
  return null;
};

export default Page;
