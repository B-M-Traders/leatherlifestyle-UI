import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const DetailsAccordion = () => {
  const data = [
    {
      label: "Specifications",
      content: (
        <>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia fuga
          ab ipsa optio dignissimos molestias et, modi aliquid eligendi ut
          laborum, doloremque assumenda voluptatum dolor ipsum est laudantium
          sed! Vero!
        </>
      ),
    },
    {
      label: "Shipping & Returns",
      content: (
        <>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia fuga
          ab ipsa optio dignissimos molestias et, modi aliquid eligendi ut
          laborum, doloremque assumenda voluptatum dolor ipsum est laudantium
          sed! Vero!
        </>
      ),
    },
    {
      label: "Care Details",
      content: (
        <>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia fuga
          ab ipsa optio dignissimos molestias et, modi aliquid eligendi ut
          laborum, doloremque assumenda voluptatum dolor ipsum est laudantium
          sed! Vero!
        </>
      ),
    },
    {
      label: "Size & Fit",
      content: (
        <>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia fuga
          ab ipsa optio dignissimos molestias et, modi aliquid eligendi ut
          laborum, doloremque assumenda voluptatum dolor ipsum est laudantium
          sed! Vero!
        </>
      ),
    },
  ];
  return (
    <div>
      <Accordion type="single" collapsible>
        {data.map((item, index) => (
          <AccordionItem key={index} value={item.label}>
            <AccordionTrigger className="hover:no-underline">
              <h4 className="font-light text-[14px] text-[#242424]">
                {item.label}
              </h4>
            </AccordionTrigger>
            <AccordionContent>
              <div className="p-2">
                <p className="text-[13px] font-light text-gray-500 tracking-wide">
                  {item.content}
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default DetailsAccordion;
