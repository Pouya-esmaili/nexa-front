"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const phoneLocal = fd.get("phone")?.toString() || "";
    const body = {
      formName: "turkiye_contact",
      firstName: fd.get("firstName")?.toString() || "",
      lastName: fd.get("lastName")?.toString() || "",
      email: fd.get("email")?.toString() || "",
      phone: phoneLocal ? `+90 ${phoneLocal}` : "",
      profile: fd.get("profile")?.toString() || "",
      objective: fd.get("objective")?.toString() || "",
      propertyType: fd.get("propertyType")?.toString() || "",
      targetCity: fd.get("targetCity")?.toString() || "",
      investmentSize: fd.get("investmentSize")?.toString() || "",
      message: fd.get("message")?.toString() || "",
    };

    try {
      const res = await fetch("/api/forms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (res.ok) setSent(true);
      else console.error("Submit failed", await res.json());
    } catch (err) {
      console.error("Submit error", err);
    }
  }

  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Start Your Türkiye Investment Pathway</h2>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="row">
          <label>
            <span className="lbl">First Name <em>*</em></span>
            <input name="firstName" type="text" required />
          </label>
          <label>
            <span className="lbl">Last Name <em>*</em></span>
            <input name="lastName" type="text" required />
          </label>
          <label>
            <span className="lbl">Email <em>*</em></span>
            <input name="email" type="email" required />
          </label>
        </div>

        <div className="row">
          <label>
            <span className="lbl">Phone Number <em>*</em></span>
            <div className="phone">
              <span className="flag">🇹🇷 +90</span>
              <input name="phone" type="tel" required />
            </div>
          </label>
          <label>
            <span className="lbl">Which best describes you? <em>*</em></span>
            <select name="profile">
              <option>Investor</option>
              <option>Entrepreneur</option>
              <option>Family relocation</option>
              <option>Digital entrepreneur</option>
            </select>
          </label>
          <label>
            <span className="lbl">Primary objective</span>
            <select name="objective">
              <option>Citizenship by Investment</option>
              <option>Long-term residency</option>
              <option>Rental yield</option>
              <option>Capital appreciation</option>
            </select>
          </label>
        </div>

        <div className="row">
          <label>
            <span className="lbl">Property type</span>
            <select name="propertyType">
              <option>Residential apartment</option>
              <option>Commercial unit</option>
              <option>Villa</option>
              <option>Government-approved development</option>
            </select>
          </label>
          <label>
            <span className="lbl">Target city</span>
            <select name="targetCity">
              <option>Istanbul</option>
              <option>Ankara</option>
              <option>Antalya</option>
              <option>Izmir</option>
              <option>Bodrum</option>
            </select>
          </label>
          <label>
            <span className="lbl">Investment size</span>
            <select name="investmentSize">
              <option>USD 600,000 – 1M</option>
              <option>USD 1M – 2M</option>
              <option>USD 2M+</option>
            </select>
          </label>
        </div>

        <label className="full">
          <span className="lbl">Details</span>
          <textarea name="message" rows={4} placeholder="Tell us about your goals, timeline, and family structure…" />
        </label>

        <div className="form-foot">
          <small>Your information is reviewed confidentially by Nexa&apos;s advisory team.</small>
          <button type="submit" className="btn-primary purple">Submit</button>
        </div>

        {sent && (
          <div className="sent-msg">Thanks — a Nexa advisor will reach out within 24 hours.</div>
        )}
      </form>
    </section>
  );
}
