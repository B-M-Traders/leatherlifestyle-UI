import PolicySidebar from "@/components/Policy/PolicySidebar";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const PolicyLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="templateContainer py-8 md:py-10 lg:py-16 flex gap-16 lg:gap-32">
      <div className="hidden md:block w-[20%]">
        <PolicySidebar />
      </div>
      <div className="w-full md:w-[80%]">{children}</div>
    </div>
  );
};

export default PolicyLayout;
