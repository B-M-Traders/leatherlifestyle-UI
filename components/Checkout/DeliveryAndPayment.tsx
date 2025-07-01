import React, { useState } from "react";
import { CircleCheck } from "lucide-react";
import { useFormat } from "@/hooks/useFormat";
import CustomDivider from "../ui/custom-divider";

const deliveryOptions = [
  {
    id: 1,
    name: "Standard shipping",
    price: 50,
    description: "Expected 7-10 days",
  },
  {
    id: 2,
    name: "Express shipping",
    price: 100,
    description: "Expected 2-5 days",
  },
];

const DeliveryAndPayment = () => {
  const { formatAmount } = useFormat();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(1);
  const paymentOptions = [
    {
      label: "Pay using",
      bg: "#6966fc",
      img: "/icons/stripe.png",
    },
    {
      label: "Pay using",
      bg: "#FDC33A",
      img: "/icons/paypal.webp",
    },
  ];
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-xl font-medium">Delivery and Payment</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {deliveryOptions.map((option) => (
            <div
              onClick={() => setSelectedPaymentMethod(option.id)}
              key={option.id}
              className={`border border-gray-300 cursor-pointer space-y-1 p-3 rounded-md ${
                selectedPaymentMethod === option.id
                  ? "border-templateBrown"
                  : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <label className="font-medium">{option.name}</label>
                {selectedPaymentMethod === option.id ? (
                  <CircleCheck
                    size={20}
                    strokeWidth={1}
                    fill="#85ffa5"
                    className="text-[#242424]"
                  />
                ) : null}
              </div>
              <p className="text-xs font-light">{option.description}</p>
              <p>{formatAmount(option.price)}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-4">
        <h2 className="text-sm font-normal">Payment Option</h2>
        <div className="flex flex-col lg:flex-row items-center gap-3">
          {paymentOptions.map((item, index) => (
            <div
              key={index}
              style={{ backgroundColor: item.bg }}
              className={`w-full flex items-center cursor-pointer hover:scale-[0.97] active:scale-95 transition-all ease-in-out duration-200 border justify-center gap-2  bg-[${item.bg}] text-white rounded-md p-3`}
            >
              <p className="text-sm font-light">{item.label}</p>
              <img className="h-6" src={item.img} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeliveryAndPayment;
