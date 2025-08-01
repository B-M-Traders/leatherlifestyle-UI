"use client";

import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    message: "",
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-6`}>
      <div className="flex items-center gap-2.5">
        <div className="space-y-1 w-full">
          <label
            htmlFor="firstName"
            className="text-[13px] tracking-wide block"
          >
            First Name
          </label>
          <input
            name="firstName"
            required
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
            type="text"
            placeholder="First Name"
            className="w-full border placeholder:text-xs rounded-md px-3 py-2.5 text-[13px]"
          />
        </div>
        <div className="space-y-1 w-full">
          <label htmlFor="lastName" className="text-[13px] tracking-wide block">
            Last Name
          </label>
          <input
            name="lastName"
            required
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
            type="text"
            placeholder="Last Name"
            className="w-full border placeholder:text-xs rounded-md px-3 py-2.5 text-[13px]"
          />
        </div>
      </div>

      <div className="space-y-1 w-full">
        <label htmlFor="email" className="text-[13px] tracking-wide block">
          Email
        </label>
        <input
          name="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          type="email"
          placeholder="Email"
          className="w-full border placeholder:text-xs rounded-md px-3 py-2.5 text-[13px]"
        />
      </div>

      <div className="space-y-1 w-full">
        <label
          htmlFor="mobileNumber"
          className="text-[13px] tracking-wide block"
        >
          Mobile Number
        </label>
        <input
          name="mobileNumber"
          required
          value={formData.mobileNumber}
          onChange={(e) =>
            setFormData({ ...formData, mobileNumber: e.target.value })
          }
          type="tel"
          placeholder="Mobile Number"
          className="w-full border placeholder:text-xs rounded-sm px-3 py-2.5 text-[13px]"
        />
      </div>

      <div className="space-y-1 w-full">
        <label htmlFor="message" className="text-[13px] tracking-wide block">
          Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          placeholder="Message (Optional)"
          className="w-full border h-16 placeholder:text-xs rounded-md px-3 py-2.5 text-[13px]"
        />
      </div>

      <button
        type="submit"
        className="text-sm flex items-center justify-center gap-2 tracking-wide cursor-pointer bg-templateBrown text-white rounded-md w-full py-3.5"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
