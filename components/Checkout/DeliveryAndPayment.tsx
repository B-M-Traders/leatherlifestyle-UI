import React, { useState } from "react";
import { CircleCheck } from "lucide-react";
import { useFormat } from "@/hooks/useFormat";

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
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-medium">Delivery and Payment</h2>
      <div className="grid grid-cols-2 gap-3">
        {deliveryOptions.map((option) => (
          <div
            onClick={() => setSelectedPaymentMethod(option.id)}
            key={option.id}
            className={`border border-gray-300 cursor-pointer space-y-1 p-3 rounded-md ${
              selectedPaymentMethod === option.id ? "border-templateBrown" : ""
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
  );
};

export default DeliveryAndPayment;
