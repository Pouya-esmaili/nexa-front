"use client";

import dynamic from "next/dynamic";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";
import Row from "@/components/global/Row";

const PhoneInput = dynamic(() => import("react-phone-input-2"), { ssr: false });

const shadow = { boxShadow: "0px 4px 4px 0px #00000026" };
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

function FormInput({ label, required = false, type = "text", small = false }: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className={small ? "text-sm" : "text-lg"}>
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input type={type} className="h-12 rounded-2xl px-4 bg-white outline-none" style={shadow} />
    </div>
  );
}

function FormSelect({ label, options, required = false, small = false }: SelectProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className={small ? "text-sm" : "text-lg"}>
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <select className="h-12 rounded-2xl px-4 bg-white outline-none" style={shadow}>
        {options.map((o, i) => <option key={i}>{o}</option>)}
      </select>
    </div>
  );
}

export default function AppointmentForm() {
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Our team will contact you within 48 hours.");
  };

  return (
    <section className="py-16 md:py-24 bg-white" id="contact">
      <h2 className="text-2xl md:text-4xl font-bold text-center tracking-tight mb-10 px-5 md:px-0">
        Book an Appointment
      </h2>

      {/* ========== MOBILE ========== */}
      <div className="md:hidden flex justify-center px-5">
        <div
          style={{
            maxWidth: "340px",
            width: "100%",
            backgroundColor: "#EFEFEF",
            borderRadius: "12px",
            padding: "16px",
          }}
        >
          <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
            <FormInput label="First Name" required small />
            <FormInput label="Last Name" required small />
            <FormInput label="Email" required type="email" small />
            <div className="flex flex-col gap-2">
              <label className="text-sm">Phone Number <span className="text-red-500">*</span></label>
              <PhoneInput
                country="ca"
                value={phone}
                onChange={setPhone}
                inputStyle={phoneInputStyle}
                buttonStyle={phoneButtonStyle}
                containerStyle={{ width: "100%" }}
              />
            </div>
            <FormSelect
              label="Which best describes you?"
              required
              options={["Investor", "Entrepreneur", "Startup Founder"]}
              small
            />
            <FormSelect
              label="Primary objective"
              options={["Start a business in Canada", "Obtain Permanent Residence", "Expand existing business", "Seeking Investment"]}
              small
            />
            <FormSelect
              label="Industry / Sector"
              required
              options={["Real Estate", "Technology & Innovation", "Healthcare", "Manufacturing", "Clean Energy", "Tourism & Hospitality", "Agriculture"]}
              small
            />
            <FormSelect
              label="Target country"
              required
              options={["Canada", "UAE", "Turkey", "Greece", "Spain"]}
              small
            />
            <FormSelect
              label="Estimated investment size"
              required
              options={["Under €100K", "CAD 100K–300K", "CAD 300K–600K", "CAD 600K–1M", "CAD 1M+"]}
              small
            />
            <div className="flex flex-col gap-2">
              <label className="text-sm">Details</label>
              <textarea
                rows={4}
                className="rounded-2xl px-4 py-3 bg-white outline-none resize-none"
                style={shadow}
              />
            </div>
            <button
              type="submit"
              className="w-full h-12 rounded-full text-white font-medium"
              style={{ background: "#8F27FF" }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* ========== DESKTOP ========== */}
      <div className="hidden md:block">
        <Row>
          <div
            className="w-full p-8 rounded-3xl bg-white"
            style={{ boxShadow: "15px 15px 50px 0px #00000040" }}
          >
            <div className="m-8 rounded-xl" style={{ backgroundColor: "#EFEFEF" }}>
              <form className="p-6 flex flex-col gap-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-3 gap-8">
                  <FormInput label="First Name" required />
                  <FormInput label="Last Name" required />
                  <FormInput label="Email" required type="email" />
                </div>

                <div className="grid grid-cols-3 gap-8">
                  <div className="flex flex-col gap-2">
                    <label className="text-lg">Phone Number <span className="text-red-500">*</span></label>
                    <PhoneInput
                      country="ca"
                      value={phone}
                      onChange={setPhone}
                      inputStyle={phoneInputStyle}
                      buttonStyle={phoneButtonStyle}
                      containerStyle={{ width: "100%" }}
                    />
                  </div>
                  <FormSelect
                    label="Which best describes you?"
                    required
                    options={["Investor", "Entrepreneur", "Startup Founder"]}
                  />
                  <FormSelect
                    label="Primary objective"
                    options={["Start a business in Canada", "Obtain Permanent Residence", "Expand existing business", "Seeking Investment"]}
                  />
                </div>

                <div className="grid grid-cols-3 gap-8">
                  <FormSelect
                    label="Industry / Sector"
                    required
                    options={["Real Estate", "Technology & Innovation", "Healthcare", "Manufacturing", "Clean Energy", "Tourism & Hospitality", "Agriculture"]}
                  />
                  <FormSelect
                    label="Target country"
                    required
                    options={["Canada", "UAE", "Turkey", "Greece", "Spain"]}
                  />
                  <FormSelect
                    label="Estimated investment size"
                    required
                    options={["Under €100K", "CAD 100K–300K", "CAD 300K–600K", "CAD 600K–1M", "CAD 1M+"]}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-lg">Details</label>
                  <textarea
                    rows={5}
                    className="rounded-2xl px-4 py-3 bg-white outline-none resize-none"
                    style={shadow}
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-[#8F27FF] text-white h-12 px-10 rounded-full text-md font-semibold hover:-translate-y-0.5 transition-transform"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Row>
      </div>

    </section>
  );
}
