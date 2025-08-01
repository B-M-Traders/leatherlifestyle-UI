import FaqSection from "@/components/Cards/FaqSection";
import Link from "next/link";
import React from "react";

const Page = () => {
  const faqs = [
    {
      question: "Are your products made from genuine leather?",
      answer:
        "Yes, all our products are crafted from 100% genuine leather, carefully sourced and tested to ensure durability, quality, and authenticity.",
    },
    {
      question: "How should I care for my leather product?",
      answer:
        "We recommend keeping your leather item dry, storing it away from direct sunlight, and using a leather conditioner regularly to maintain its quality and appearance.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we ship worldwide. Shipping costs and delivery times vary depending on your location and will be calculated at checkout.",
    },
    {
      question: "Can I return or exchange a product?",
      answer:
        "Absolutely. We offer a 7-day return and exchange policy for unused items in their original condition. Please visit our Returns page for full details.",
    },
    {
      question: "How long does delivery take?",
      answer:
        "Orders are typically processed within 2–3 business days. Delivery within India takes 5–7 days, while international shipping may take 10–15 days depending on the destination.",
    },
    {
      question: "What if I receive a damaged or wrong item?",
      answer:
        "We’re truly sorry for any inconvenience. If your order arrives damaged or incorrect, please contact us within 48 hours of delivery, and we'll arrange a prompt replacement or refund.",
    },
    {
      question: "Do you offer custom or personalized leather goods?",
      answer:
        "Currently, we do not offer customization. However, we are working to introduce this feature soon. Stay tuned for updates!",
    },
    {
      question: "Is my payment information secure?",
      answer:
        "Yes. We use secure, encrypted payment gateways to ensure your personal and financial information is completely safe.",
    },
  ];

  return (
    <div className="templateContainer space-y-8 py-10 md:py-10 lg:py-14">
      <div className="space-y-2.5">
        <h1 className="text-2xl md:text-3xl font-light text-templateBrown text-center">
          Frequently Asked Questions
        </h1>
        <p className="text-sm font-light tracking-wide max-w-xl text-center mx-auto">
          These are the most commonly asked questions about Artisan Hide. Can't
          find what you're looking for ?{" "}
          <Link
            href={"/contact"}
            className="text-templateBrown font-medium underline underline-offset-2"
          >
            Contact
          </Link>
        </p>
      </div>
      <FaqSection data={faqs} />
    </div>
  );
};

export default Page;
