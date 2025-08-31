"use client";

import RegionModal from "@/components/Forms/RegionModal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { menuItems } from "@/lib/Menudata";
import { useToggleStore } from "@/store/useToggleStore";
import { ChevronLeft, ChevronRight, Menu, User, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

// Define submenu and menu item types
interface SubMenuItem {
  title: string;
  type: string;
  lists: {
    label: string;
    url: string;
  }[];
}

interface MenuItem {
  label: string;
  url?: string;
  megamenu?: boolean;
  image: string;
  megamenuItems?: SubMenuItem[];
}

const MobileMenu: React.FC = () => {
  const { isMenuDrawerOpen } = useToggleStore();
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [subMenu, setSubMenu] = useState<MenuItem | null>(null);

  useEffect(() => {
    document.body.style.overflow = toggleDrawer ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [toggleDrawer]);

  const handleToggle = () => {
    setToggleDrawer((prev) => !prev);
    if (!toggleDrawer) setSubMenu(null); // Reset submenu when closing
  };

  useEffect(() => {
    if (mounted) {
      handleToggle();
    } else {
      setMounted(true);
    }
  }, [isMenuDrawerOpen]);

  return (
    <div>
      {/* Menu Trigger */}
      <div>
        <Menu onClick={handleToggle} />
      </div>

      {/* Overlay */}
      {toggleDrawer && (
        <div
          onClick={handleToggle}
          className="fixed top-0 left-0 w-full h-full bg-black/30 backdrop-blur-sm z-10"
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed text-black top-0 left-0 overflow-hidden w-full md:w-[400px] h-full bg-white z-30 transition-transform duration-300 ${
          toggleDrawer ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Menu Wrapper with Slide Animation */}
        <div className="relative w-full h-full overflow-hidden">
          {/* Main Menu */}
          <div
            className={`absolute top-0 left-0 w-full h-full transition-transform duration-300 ${
              subMenu ? "-translate-x-full" : "translate-x-0"
            }`}
          >
            {/* Header */}
            <div className="flex items-center bg-templateBrown text-white px-5 py-4 justify-between">
              <Image
                src={"/Logo/artisan_hide.webp"}
                alt="Artisan Hide"
                width={200}
                height={200}
                className="h-6 w-auto object-contain filter invert brightness-0"
              />
              <X onClick={handleToggle} size={25} strokeWidth={1} />
            </div>

            {/* Account Login */}
            <Link
              href={"/auth/login"}
              onClick={handleToggle}
              className="flex items-center gap-3 bg-templateBrown/5 p-5"
            >
              <div className="bg-templateBrown h-9 w-9 flex items-center justify-center rounded-full text-white">
                <User size={20} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-[13px] font-normal">
                  Sign In / Create Account
                </h4>
                <p className="text-[11px] font-extralight tracking-wide">
                  Logged in and enjoy exclusive perks
                </p>
              </div>
            </Link>

            {/* Main Menu Items */}
            <div>
              {menuItems?.map((item: any, index) =>
                item?.megamenu ? (
                  <div
                    onClick={() => setSubMenu(item)}
                    className="p-5 text-[15px] border-b flex items-center justify-between cursor-pointer"
                    key={index}
                  >
                    <p>{item.label}</p>
                    <ChevronRight size={20} strokeWidth={1} />
                  </div>
                ) : (
                  <Link
                    href={item.url || "#"}
                    key={index}
                    onClick={handleToggle}
                  >
                    <div className="p-5 text-[15px] border-b flex items-center justify-between">
                      <p>{item.label}</p>
                    </div>
                  </Link>
                )
              )}
            </div>
          </div>

          {/* SubMenu */}
          <div
            className={`absolute top-0 left-0 w-full h-full overflow-y-auto bg-white transition-transform duration-300 ${
              subMenu ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Submenu Header */}
            <div className="relative h-[240px]">
              <Image
                src={subMenu?.image || "/placeholder2.jpg"}
                alt="submenu banner"
                height={400}
                width={600}
                className="h-full w-full object-cover"
              />
              <button
                onClick={() => setSubMenu(null)}
                className="absolute top-2 left-2 bg-templateBrown h-8 w-8 flex items-center justify-center rounded-full text-white"
              >
                <ChevronLeft size={20} strokeWidth={1.5} />
              </button>
            </div>

            <div className="bg-templateBrown text-sm w-[80%] text-white mx-auto px-2 py-2.5 text-center -mt-6 relative">
              {subMenu?.label}
            </div>

            {/* Submenu Items */}
            <div>
              <Accordion type="single" collapsible className="px-5">
                {subMenu?.megamenuItems?.map((item, index) => (
                  <React.Fragment key={index}>
                    {item.type === "list" && (
                      <AccordionItem value={`item-${index}`}>
                        <AccordionTrigger className="text-[16px] font-normal">
                          {item.title}
                        </AccordionTrigger>
                        <AccordionContent>
                          {item?.lists?.map((link, linkIndex) => (
                            <Link
                              href={link.url || "#"}
                              key={linkIndex}
                              onClick={handleToggle}
                            >
                              <div className="py-3 text-[14px] tracking-wide opacity-90 font-light border-b flex items-center justify-between">
                                <p>{link.label}</p>
                              </div>
                            </Link>
                          ))}
                        </AccordionContent>
                      </AccordionItem>
                    )}
                  </React.Fragment>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
