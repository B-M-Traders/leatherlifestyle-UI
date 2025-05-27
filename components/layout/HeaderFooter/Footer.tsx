"use client";
import React from "react";
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

// Types
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
      { label: "About Us", link: "/about-us" },
      { label: "Contact Us", link: "/contact-us" },
      {
        label: "Cancellation and Refund Policy",
        link: "/policies/cancellation-and-refund-policy",
      },
      { label: "Shipping Information", link: "/policies/shipping" },
      { label: "Privacy policy", link: "/policies/privacy" },
      { label: "Terms of service", link: "/policies/terms" },
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

const Footer: React.FC = () => {
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
