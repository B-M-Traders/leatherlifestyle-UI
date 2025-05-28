"use client";
import React, { useEffect, useState } from "react";
import CartDrawer from "../Cart/CartDrawer";
import { ChevronDown, User } from "lucide-react";
import SearchBar from "@/components/SearchComps/SearchBar";
import MobileMenu from "./MobileMenu";
import { menuItems } from "@/lib/Menudata";
import { motion, AnimatePresence } from "framer-motion";
import Megamenu from "./Megamenu";
import Link from "next/link";
import Image from "next/image";

interface Props {
  isHome: boolean;
}

const Header: React.FC<Props> = ({ isHome }) => {
  const [activeMenu, setActiveMenu] = useState<any>(null);
  const [toggle, setToggle] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    if (!isHome) {
      setToggle(true);
      setHasScrolled(true);
      return;
    }
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setHasScrolled(scrollTop > 0);
      setToggle(scrollTop > 0);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome, hasScrolled]);

  const handleClick = () => {
    setActiveMenu(null);
  };

  return (
    <div
      className={`relative w-full transition-all ease-in-out ${
        !isHome && "shadow-md"
      } duration-300 ${
        toggle || hasScrolled
          ? "bg-white text-black"
          : "bg-transparent text-white"
      } `}
    >
      <nav
        onMouseEnter={() => setToggle(true)}
        onMouseLeave={() => setToggle(false)}
        className={`templateContainer flex gap-5 justify-between items-center w-full py-3`}
      >
        <div className="lg:hidden">
          <MobileMenu />
        </div>
        <div className=" flex items-center gap-5">
          <Link href={"/"}>
            <Image
              src={"/Logo/artisan_hide.webp"}
              alt="Artisan Hide"
              width={200}
              height={200}
              className={`h-9 lg:h-11 transition-all ease-in-out duration-300 w-auto object-contain  ${
                toggle || hasScrolled ? "" : "filter invert brightness-0"
              }`}
            />
          </Link>
        </div>
        <div className="hidden lg:block">
          <div className="flex items-center gap-2.5 text-[14.5px] font-extralight tracking-[0.05em]">
            {menuItems.map((item, index) => (
              <React.Fragment key={index}>
                {item.megamenu || item.dropdown ? (
                  <span
                    className="flex hover-class px-2.5 items-center gap-0.5 cursor-default"
                    onMouseEnter={() => {
                      setToggle(true);
                      item.megamenu ? setActiveMenu(item) : setActiveMenu(null);
                    }}
                    onMouseLeave={() => {
                      !item.megamenu && setActiveMenu(null);
                    }}
                  >
                    {item.label}
                    <ChevronDown size={14} />
                  </span>
                ) : (
                  <Link className="inline-block" href={item.url || "#"}>
                    <span
                      className="flex hover-class px-2.5 items-center gap-0.5 "
                      onMouseEnter={() => {
                        setToggle(true);
                        item.megamenu
                          ? setActiveMenu(item)
                          : setActiveMenu(null);
                      }}
                      onMouseLeave={() => {
                        !item.megamenu && setActiveMenu(null);
                      }}
                    >
                      {item.label}
                    </span>
                  </Link>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <SearchBar />
          <Link
            href={"/account"}
            className="hidden lg:block p-1 lg:p-2 rounded-full hover:text-black cursor-pointer hover:bg-gray-100"
          >
            <User size={18} strokeWidth={1.5} />
          </Link>
          <CartDrawer />
        </div>
      </nav>

      {activeMenu && (
        <div className="bg-black/75 absolute top-full left-0 w-full h-screen"></div>
      )}

      {/* MEGAMENU */}
      <AnimatePresence>
        {activeMenu?.megamenu && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border absolute top-full left-0 w-full bg-white z-50"
            onMouseEnter={() => setToggle(true)}
            onMouseLeave={() => {
              setToggle(false);
              setActiveMenu(null);
            }}
          >
            <Megamenu activeMenu={activeMenu} handleClick={handleClick} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
