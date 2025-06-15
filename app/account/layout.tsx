import ProfileSidebar from "@/components/AccountComps/ProfileSidebar";
import { retrieveCustomer } from "@/lib/action/customer";
import { redirect } from "next/navigation";
import React from "react";

const layout = async ({ children }: any) => {
  const customer = await retrieveCustomer().catch(() => null)

  console.log("Customer",customer);

  if (!customer) {
    redirect("/auth/login")
  }
  return (
    <div className="max-w-5xl mx-auto py-6 md:py-10  space-y-8 lg:py-14 ">
      <div>
        <h2 className="text-[28px] text-templateBrown">
          Hello👋, Ansari Afroz
        </h2>
      </div>
      <hr />
      <div className="flex gap-14">
        <div className="border-r pr-14">
          <ProfileSidebar />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default layout;
