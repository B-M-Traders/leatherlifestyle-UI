import BasicProductCard from "@/components/Cards/BasicProductCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { featuredProducts, menuItems } from "@/lib/Menudata";
import { useToggleStore } from "@/store/useToggleStore";
import { ChevronRight, ChevronLeft, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const MobileMenu = () => {
  const { isMenuDrawerOpen } = useToggleStore();
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const [menuStack, setMenuStack] = useState<any[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (toggleDrawer) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [toggleDrawer]);

  const currentMenu =
    menuStack.length === 0 ? menuItems : menuStack[menuStack.length - 1];

  const openSubMenu = (item: any) => {
    if (item.megamenu) {
      setMenuStack([...menuStack, item.megamenuItems]);
    }
  };

  const handleToggle = () => {
    setToggleDrawer(!toggleDrawer);
    setMenuStack([]);
  };

  const goBack = () => {
    setMenuStack(menuStack.slice(0, -1));
  };

  useEffect(() => {
    if (mounted) {
      handleToggle();
    } else {
      setMounted(true);
      return;
    }
  }, [isMenuDrawerOpen]);

  return (
    <div>
      <div>
        <Menu onClick={handleToggle} />
      </div>
      {toggleDrawer && (
        <div
          onClick={handleToggle}
          className="fixed top-0 left-0 w-full h-full bg-black/30 backdrop-blur-sm z-10"
          // className="bg-black/30 backdrop-blur-sm fixed top-0 bottom-0 left-0 right-0 z-50 transition-transform duration-300 "
        />
      )}

      <div
        className={`fixed text-white top-0 space-y-5 left-0 overflow-y-auto w-[83%] md:w-[50%] h-full bg-templateBrown z-30 p-4 transition-transform duration-300 ${
          toggleDrawer ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div>
          <X size={25} strokeWidth={1} />
        </div>

        <div>
          {/* Top-level accordion */}
          <Accordion type="single" className="" collapsible>
            {menuItems.map((item, index) => (
              <div key={index}>
                {item.megamenu || item.dropdown ? (
                  <AccordionItem value={`item-${index}`} className="">
                    <AccordionTrigger className="text-[14px] uppercase hover:!no-underline !font-extralight tracking-wider">
                      {item.label}
                    </AccordionTrigger>

                    <AccordionContent className="text-sm">
                      {/* Nested accordion for lists inside megamenu */}
                      <Accordion type="single" collapsible>
                        {item.megamenuItems?.map((sub, subIndex) => (
                          <div key={subIndex} className="">
                            {sub.type === "list" ? (
                              <AccordionItem
                                value={`sub-${index}-${subIndex}`}
                                className=""
                              >
                                <AccordionTrigger className="text-[13px] uppercase font-extralight tracking-wide hover:!no-underline">
                                  {sub.title}
                                </AccordionTrigger>
                                <AccordionContent>
                                  <ul className="pl-4 space-y-1">
                                    {sub?.lists?.map((listItem, listIndex) => (
                                      <li key={listIndex}>
                                        <Link
                                          href={listItem.url}
                                          className={`block text-[13px] ${
                                            listItem.bold
                                              ? "font-semibold"
                                              : "!font-extralight"
                                          } hover:underline`}
                                        >
                                          {listItem.label}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </AccordionContent>
                              </AccordionItem>
                            ) : null}
                          </div>
                        ))}
                      </Accordion>
                    </AccordionContent>
                  </AccordionItem>
                ) : (
                  <Link
                    className={`block py-2 text-[14px] uppercase hover:!no-underline !font-extralight tracking-wider pt-4`}
                    href={item.url ?? "#"}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
