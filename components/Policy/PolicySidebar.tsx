"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const PolicySidebar = () => {
  const pathname = usePathname();
  const pages = [
    {
      label: "Privacy Policy",
      link: "/policy/privacy-policy",
    },
    {
      label: "Return And Refund",
      link: "/policy/return-and-refund-policy",
    },
    {
      label: "Shipping Policy",
      link: "/policy/shipping-policy",
    },
    {
      label: "Terms And Conditions",
      link: "/policy/terms-and-conditions",
    },
    {
      label: "FAQs",
      link: "/faqs",
    },
    {
      label: "Contact Us",
      link: "contact",
    },
  ];
  return (
    <div className="space-y-6">
      {pages.map((item, index) => (
        <Link
          key={index}
          href={item.link}
          className={`block text-templateBrown font-light text-base ${
            pathname === item.link ? "underline" : "hover:underline"
          }  underline-offset-4 uppercase`}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};

export default PolicySidebar;
