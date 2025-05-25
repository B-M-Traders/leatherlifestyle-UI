import BasicProductCard from "@/components/Cards/BasicProductCard";
import Image from "next/image";
import Link from "next/link";
import React, { act } from "react";

interface Props {
  activeMenu: any;
}

const Megamenu: React.FC<Props> = ({ activeMenu }) => {
  return (
    <div className="p-10 text-black max-w-7xl mx-auto grid grid-cols-4 gap-5">
      {activeMenu?.megamenuItems?.map((item: any, index: number) => (
        <div key={index}>
          <>
            {item.type === "list" && (
              <div className="space-y-6">
                <h3 className="capitalize text-templateBrown font-medium text-base tracking-wide">
                  {item.title}
                </h3>
                <ul className="space-y-4">
                  {item.lists.map((item: any, index: number) => (
                    <Link className="block" key={index} href={item.url}>
                      <li
                        key={index}
                        className={`text-sm hover:text-templateBrown tracking-wide ${
                          item.bold ? "font-semibold" : "font-light"
                        }`}
                      >
                        {item.label}
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            )}
            {item.type === "product" && (
              <BasicProductCard item={item as any} key={index} />
            )}
          </>
        </div>
      ))}
    </div>
  );
};

export default Megamenu;
