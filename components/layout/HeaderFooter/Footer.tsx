"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Clock, Mail, Map, MessageCircleQuestion } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { menuItems } from "@/lib/Menudata";
import Image from "next/image";
import CustomSelect from "@/components/ui/custom-select";
import { Country } from "country-state-city";
import { Item } from "@radix-ui/react-accordion";
import { usePathname } from "next/navigation";

interface FooterLink {
  label: string;
  link: string;
}

interface FooterSection {
  label: string;
  list: FooterLink[];
}

interface ContactInfo {
  icon: React.ComponentType<{
    size: number;
    strokeWidth: number;
    className: string;
  }>;
  title: string;
  content: string;
}

// Data
const footerSections: FooterSection[] = [
  {
    label: "LEGAL",
    list: [
      { label: "About Us", link: "/about" },
      { label: "Contact Us", link: "/contact" },
      {
        label: "Return and Refund Policy",
        link: "/policy/return-and-refund-policy",
      },
      { label: "Shipping Information", link: "/policy/shipping-policy" },
      { label: "Privacy policy", link: "/policy/privacy-policy" },
      { label: "Terms And Conditions", link: "/policy/terms-and-conditions" },
    ],
  },
  {
    label: "CUSTOMER CARE",
    list: [
      { label: "Create Account", link: "/auth/register" },
      { label: "Login", link: "/auth/login" },
      { label: "Track Your Order", link: "/track-your-order" },
      { label: "Product Reviews", link: "/happy-customers" },
      { label: "Discount Coupons", link: "/discount" },
      { label: "Contact Us", link: "/contact" },
      { label: "Blog Post", link: "/blog" },
      { label: "Sitemap", link: "/sitemap" },
      // { label: "FAQs", link: "/faq" },
    ],
  },
];

const contactInfo: ContactInfo[] = [
  {
    icon: Map,
    title: "Our Address",
    content:
      "Office No.406, Simlim Square, above RBL Bank, lamington Road, Grant Road East, mumbai 400007",
  },
  {
    icon: Clock,
    title: "Our Timing",
    content: "Mon to Sat - 11:00 AM to 7:30 PM",
  },
  {
    icon: MessageCircleQuestion,
    title: "Order Query",
    content: "Contact: 98-3355-6611",
  },
  {
    icon: Mail,
    title: "Email Us",
    content: "Contact: 98-3355-6611",
  },
];

// Components
const ContactItem: React.FC<ContactInfo> = ({ icon: Icon, title, content }) => (
  <div className="space-y-2">
    <div className="flex items-center gap-2">
      <Icon size={18} strokeWidth={1.5} className="text-white" />
      <span className="text-base tracking-wide">{title}</span>
    </div>
    <p className="text-[13px] tracking-wider">{content}</p>
  </div>
);

const FooterSection: React.FC<FooterSection & { isMobile?: boolean }> = ({
  label,
  list,
  isMobile,
}) =>
  isMobile ? (
    <AccordionItem value={label}>
      <AccordionTrigger>{label}</AccordionTrigger>
      <AccordionContent>
        <ul className="space-y-2 text-[13px]">
          {list.map((item, idx) => (
            <li key={idx}>
              <Link href={item.link} className="block hover:underline">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </AccordionContent>
    </AccordionItem>
  ) : (
    <div className="space-y-6 w-full md:w-[50%] lg:w-[30%]">
      <h2 className="text-lg tracking-widest">{label}</h2>
      <div className="h-[1px] w-20 bg-gray-100" />
      <ul className="text-[13px] tracking-wider space-y-4">
        {list.map((item, idx) => (
          <li key={idx} className="listHoverAnimation">
            <Link
              href={item.link}
              target={item.link.startsWith("http") ? "_blank" : undefined}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

export const renderRegion = () => {
  const countries = [
    {
      countryName: "United States",
      countryCode: "US",
      countryCallingCode: "+1",
      currency: "USD",
    },
    {
      countryName: "India",
      countryCode: "IN",
      countryCallingCode: "+91",
      currency: "INR",
    },
    {
      countryName: "Canada",
      countryCode: "CA",
      countryCallingCode: "+1",
      currency: "CAD",
    },
    {
      countryName: "United Kingdom",
      countryCode: "GB",
      countryCallingCode: "+44",
      currency: "GBP",
    },
  ];
  const selectRef = useRef<HTMLDivElement>(null);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<any>(countries[0]);

  const handleCountrySelect = (item: any) => {
    setSelectedCountry(item);
    setIsCountryDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsCountryDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={`w-[65%] space-y-2`}>
      <label className="block mb-1 text-xs">Select Origin</label>
      <div
        ref={selectRef}
        onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
        className="relative group w-full border cursor-pointer px-2 py-1 rounded-md flex items-center justify-between gap-4"
      >
        <div className="flex items-center gap-2">
          <Image
            src={`https://flagsapi.com/${selectedCountry?.countryCode}/flat/64.png`}
            alt={selectedCountry?.countryName}
            width={20}
            className="h-[30px] w-[30px] object-contain"
            height={20}
          />
          <p className="font-light text-sm">{selectedCountry?.countryName}</p>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.2"
          stroke="currentColor"
          className="h-5 w-5 mt-0.5 text-white pointer-events-none"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
          />
        </svg>

        <div
          className={`absolute bottom-11 max-h-[400px] transition-all ease-in-out duration-300 overflow-hidden  rounded-md left-0 w-full bg-white  ${
            isCountryDropdownOpen ? "p-2 max-h-[400px] overflow-y-auto" : "h-0"
          }`}
        >
          {countries.map((item, idx) => (
            <div
              key={idx}
              onClick={() => handleCountrySelect(item)}
              className="flex items-center gap-2 text-templateBrown px-2 py-1 hover:bg-gray-200 rounded-md cursor-pointer"
            >
              <Image
                src={`https://flagsapi.com/${item.countryCode}/flat/64.png`}
                alt={item.countryName}
                width={20}
                className="h-[30px] w-[30px] object-contain"
                height={20}
              />
              <p className="font-light text-sm">{item.countryName}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Footer: React.FC = () => {
  const pathname = usePathname();
  if (
    pathname.includes("/auth/login") ||
    pathname.includes("/auth/register") ||
    pathname.includes("/forgot-password")
  ) {
    return null;
  }
  return (
    <div className="bg-templateBrown pb-4 lg:pb-0">
      {/* Desktop Footer */}
      <div className="hidden  lg:flex gap-8 text-white templateContainer py-6 md:py-8 lg:py-12 w-full">
        <div className="space-y-7 w-full md:w-[50%] lg:w-[40%]">
          <Link href={"/"}>
            <Image
              src={"/Logo/artisan_hide.webp"}
              alt="Artisan Hide"
              width={200}
              height={200}
              className={`h-9 lg:h-14 transition-all ease-in-out duration-300 w-auto object-contain filter invert brightness-0`}
            />
          </Link>
          {contactInfo.map((info, idx) => (
            <ContactItem key={idx} {...info} />
          ))}

          {renderRegion()}
        </div>
        {footerSections.map((section, idx) => (
          <FooterSection key={idx} {...section} />
        ))}
        {menuItems && (
          <FooterSection
            label="SHOP FOR"
            list={menuItems.map((item: any) => ({
              label: item.label,
              link: `${item.url}`,
            }))}
          />
        )}
      </div>

      {/* Mobile Footer */}
      <div className="templateContainer bg-templateBrown text-white lg:hidden py-8 md:py-8 lg:py-12 space-y-7">
        <div className="space-y-7 w-full">
          <h2 className="text-xl tracking-wide">Asreh International</h2>
          {contactInfo.map((info, idx) => (
            <ContactItem key={idx} {...info} />
          ))}
        </div>
        {renderRegion()}
        <Accordion type="single" collapsible>
          {footerSections.map((section, idx) => (
            <FooterSection key={idx} {...section} isMobile />
          ))}
        </Accordion>
      </div>

      {/* Copyright */}
      <div className="bg-templateBrown p-4 text-center text-white text-sm tracking-wide templateContainer">
        © {new Date().getFullYear()} Artisan Hide
      </div>
    </div>
  );
};

export default Footer;
