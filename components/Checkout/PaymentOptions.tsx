"use client";
import { CircleCheck } from "lucide-react";
import React, { useState } from "react";
import Image from "next/image";

const paymentOptions = [
  {
    label: "Card",
    icon: "/icons/2.png",
    value: "card",
  },
  {
    label: "Paypal",
    icon: "/icons/1.png",
    value: "paypal",
  },
];

// Simple regex-based card type detection
const getCardType = (number: string) => {
  const cleaned = number.replace(/\s/g, "");
  if (/^4/.test(cleaned)) return "/cards/visa.png";
  if (/^5[1-5]/.test(cleaned)) return "/cards/mastercard.png";
  if (/^3[47]/.test(cleaned)) return "/cards/amex.png";
  return null;
};

const PaymentOptions = () => {
  const [selectedPaymentOption, setSelectedPaymentOption] = useState(
    paymentOptions[0].value
  );
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCVV, setCardCVV] = useState("");
  const [paypalEmail, setPaypalEmail] = useState("");

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.replace(/\D/g, "").substring(0, 16); // digits only
    const formatted = input.replace(/(.{4})/g, "$1 ").trim();
    setCardNumber(formatted);
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.replace(/\D/g, "").substring(0, 4);
    const formatted = input.replace(/(\d{2})(\d{0,2})/, "$1/$2");
    setCardExpiry(formatted);
  };

  const handleSubmit = () => {
    if (selectedPaymentOption === "card") {
      if (
        cardNumber.length < 19 ||
        cardExpiry.length < 5 ||
        cardCVV.length < 3
      ) {
        alert("Please fill all card details correctly.");
        return;
      }
    }
    if (selectedPaymentOption === "paypal") {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(paypalEmail)) {
        alert("Enter a valid PayPal email.");
        return;
      }
    }

    alert("Payment submitted!");
  };

  return (
    <div className="space-y-6">
      {/* Selection Buttons */}
      <div className="grid grid-cols-2 gap-3">
        {paymentOptions.map((option) => (
          <div
            key={option.value}
            onClick={() => setSelectedPaymentOption(option.value)}
            className={`border-2 space-y-1 px-4 py-2 rounded-md cursor-pointer transition-all ${
              selectedPaymentOption === option.value
                ? "border-templateBrown"
                : "border-gray-300"
            }`}
          >
            <div className="flex items-center justify-between">
              <img src={option.icon} alt={option.label} className="h-8" />
              {selectedPaymentOption === option.value && (
                <CircleCheck
                  size={20}
                  strokeWidth={1}
                  fill="#85ffa5"
                  className="text-[#242424]"
                />
              )}
            </div>
            <p className="text-sm font-medium">Pay using {option.label}</p>
          </div>
        ))}
      </div>

      {/* Conditional Inputs */}
      <div className="space-y-4">
        {selectedPaymentOption === "card" && (
          <div className="space-y-3">
            {/* Card Number + Card Type */}
            <div className="relative">
              <input
                type="text"
                placeholder="Card Number"
                value={cardNumber}
                onChange={handleCardNumberChange}
                className="w-full border px-4 py-2 pr-12 rounded"
                maxLength={19}
              />
              {getCardType(cardNumber) && (
                <Image
                  src={getCardType(cardNumber) || ""}
                  alt="card type"
                  width={30}
                  height={20}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                />
              )}
            </div>

            {/* Expiry & CVV */}
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="MM/YY"
                value={cardExpiry}
                onChange={handleExpiryChange}
                maxLength={5}
                className="w-1/2 border px-4 py-2 rounded"
              />
              <input
                type="text"
                placeholder="CVV"
                value={cardCVV}
                onChange={(e) =>
                  setCardCVV(e.target.value.replace(/\D/g, "").substring(0, 4))
                }
                maxLength={4}
                className="w-1/2 border px-4 py-2 rounded"
              />
            </div>
          </div>
        )}

        {selectedPaymentOption === "paypal" && (
          <div className="space-y-3">
            <input
              type="email"
              placeholder="PayPal Email"
              value={paypalEmail}
              onChange={(e) => setPaypalEmail(e.target.value)}
              className="w-full border px-4 py-2 rounded"
            />
          </div>
        )}
      </div>

      <div>
        <button
          onClick={handleSubmit}
          className="bg-templateBrown flex items-center justify-center font-light gap-2 hover:opacity-90 tracking-wider text-white w-auto px-5 py-2.5 rounded-full"
        >
          Confirm & Pay
        </button>
      </div>
    </div>
  );
};

export default PaymentOptions;
