"use client";

import dynamic from "next/dynamic";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";
import Row from "../global/Row";

const PhoneInput = dynamic(() => import("react-phone-input-2"), {
  ssr: false,
});

export default function ContactForm() {
  const [phone, setPhone] = useState("");

  return (
    <>
      {/* ================= DESKTOP ================= */}
      <div className="hidden md:block w-full">
        <Row className="w-full">
          <div className="w-full flex justify-center py-24">
            <div
              className="w-full p-8 rounded-3xl bg-white"
              style={{ boxShadow: "15px 15px 50px 0px #00000040" }}
            >
              <div
                className="m-8 rounded-xl"
                style={{ backgroundColor: "#EFEFEF" }}
              >
                <form className="p-4 flex flex-col">
                  <div className="grid grid-cols-1 md:grid-cols-3 font-normal gap-6 lg:gap-10 p-6">
                    <Input label="First Name" required />
                    <Input label="Last Name" required />
                    <Select
                      label="What service are you interested in?"
                      required
                      options={[
                        "Entrepreneurship",
                        "Acceleration",
                        "Investment",
                        "Business Advisory",
                      ]}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 px-6">
                    <div className="flex flex-col gap-3">
                      <label className="text-lg">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <PhoneInput
                        country="ca"
                        value={phone}
                        onChange={(value) => setPhone(value)}
                        inputStyle={phoneInputStyle}
                        buttonStyle={phoneButtonStyle}
                        containerStyle={{ width: "100%" }}
                      />
                    </div>

                    <Input label="Email" required type="email" />

                    <Select
                      label="How did you find out about us?"
                      options={[
                        "Attorney",
                        "Friend",
                        "Google",
                        "Webinar",
                        "Tradeshow/Conference",
                        "Social Media",
                        "Other",
                      ]}
                    />
                  </div>

                  <div className="flex flex-col gap-3 p-8">
                    <label className="text-lg">Details</label>
                    <textarea
                      rows={5}
                      className="rounded-2xl px-4 py-3 bg-white outline-none resize-none"
                      style={inputShadow}
                    />
                  </div>

                  <div className="flex justify-end px-6 mb-8">
                    <button
                      type="submit"
                      className="bg-[#8F27FF] text-white h-12 px-10 rounded-full text-md font-semibold"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Row>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="md:hidden w-full px-4 py-10">
        <div className="w-full max-w-lg mx-auto bg-[#EFEFEF] rounded-xl p-4 sm:p-6">
          <form className="flex flex-col gap-12">
            <Input label="First Name" required small />
            <Input label="Last Name" required small />

            <Select
              label="What service are you interested in?"
              required
              options={[
                "Entrepreneurship",
                "Acceleration",
                "Investment",
                "Business Advisory",
              ]}
              small
            />

            <div className="flex flex-col gap-2">
              <label className="text-sm">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <PhoneInput
                country="ca"
                value={phone}
                onChange={(value) => setPhone(value)}
                inputStyle={phoneInputStyle}
                buttonStyle={phoneButtonStyle}
                containerStyle={{ width: "100%" }}
              />
            </div>

            <Input label="Email" required type="email" small />

            <Select
              label="How did you find out about us?"
              options={[
                "Attorney",
                "Friend",
                "Google",
                "Webinar",
                "Tradeshow/Conference",
                "Social Media",
                "Other",
              ]}
              small
            />

            <div className="flex flex-col gap-2">
              <label className="text-sm">Details</label>
              <textarea
                rows={4}
                className="rounded-2xl px-4 py-3 bg-white outline-none resize-none"
                style={inputShadow}
              />
            </div>

            <button
              type="submit"
              className="w-full h-12 rounded-full text-white font-medium"
              style={{
                background: "#8F27FF",
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

/* ================= Styles ================= */

const inputShadow = {
  boxShadow: "0px 4px 4px 0px #00000026",
};

const phoneInputStyle = {
  width: "100%",
  height: "48px",
  borderRadius: "16px",
  border: "none",
  boxShadow: "0px 4px 4px 0px #00000026",
  paddingLeft: "60px",
};

const phoneButtonStyle = {
  border: "none",
  borderTopLeftRadius: "16px",
  borderBottomLeftRadius: "16px",
};

/* ================= Types ================= */

interface InputProps {
  label: string;
  required?: boolean;
  type?: string;
  small?: boolean;
}

interface SelectProps {
  label: string;
  options: string[];
  required?: boolean;
  small?: boolean;
}

/* ================= Reusable Components ================= */

function Input({
  label,
  required = false,
  type = "text",
  small = false,
}: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className={small ? "text-sm" : "text-lg"}>
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        className="h-12 rounded-2xl px-4 bg-white outline-none"
        style={inputShadow}
      />
    </div>
  );
}

function Select({
  label,
  options,
  required = false,
  small = false,
}: SelectProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className={small ? "text-sm" : "text-lg"}>
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <select
        className="h-12 rounded-2xl px-4 bg-white outline-none"
        style={inputShadow}
      >
        {options.map((item, i) => (
          <option key={i}>{item}</option>
        ))}
      </select>
    </div>
  );
}