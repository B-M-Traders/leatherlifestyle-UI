import BasicProductCard from "@/components/Cards/BasicProductCard";
import { featuredProducts, menuItems } from "@/lib/Menudata";
import { useToggleStore } from "@/store/useToggleStore";
import { ChevronRight, ChevronLeft, Menu, X } from "lucide-react";
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
          className="fixed top-0 left-0 w-full h-full bg-black/75 z-10"
        />
      )}

      <div
        className={`fixed text-black top-0 space-y-5 left-0 overflow-y-auto w-[85%] md:w-[50%] h-full bg-white z-30 p-5 transition-transform duration-300 ${
          toggleDrawer ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="">
          <Link href={"/"}>
            <h2 className="text-4xl tracking-wide font-semibold">LOGO</h2>
          </Link>
        </div>

        <hr />

        {menuStack.length > 0 && (
          <button onClick={goBack} className="flex items-center gap-1 text-sm">
            <ChevronLeft size={18} /> Back
          </button>
        )}

        {/* Top-level or nested list rendering */}
        {Array.isArray(currentMenu) ? (
          <div className="space-y-4">
            {currentMenu.map((item: any, index: number) => {
              if (item.type === "list") {
                return (
                  <div key={index} className="space-y-4 pb-4">
                    <h4 className="text-[16px] text-templateBrown font-normal  mb-2">
                      {item.title}
                    </h4>
                    <ul className="space-y-2">
                      {item.lists.map((link: any, i: number) => (
                        <Link onClick={handleToggle} href={link.url} key={i}>
                          <li
                            key={i}
                            className={`text-[14px] cursor-pointer ${
                              link.bold ? "font-semibold" : "font-light"
                            }`}
                          >
                            {link.label}
                          </li>
                        </Link>
                      ))}
                    </ul>
                  </div>
                );
              }

              return (
                <div className="space-y-2" key={index}>
                  {item.megamenu || item.dropdown ? (
                    <div
                      key={index}
                      className="flex items-center justify-between text-[15px] font-light cursor-pointer"
                      onClick={() => openSubMenu(item)}
                    >
                      {item.label}
                      <ChevronRight size={16} />
                    </div>
                  ) : (
                    <Link
                      href={item.url || "#"}
                      onClick={handleToggle}
                      key={index}
                      className="flex items-center justify-between text-[15px] font-light cursor-pointer"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        ) : null}

        <hr />
        <div className="grid grid-cols-2 gap-4">
          {featuredProducts.slice(0, 4).map((product, index) => (
            <React.Fragment key={index}>
              <BasicProductCard item={product as any} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
