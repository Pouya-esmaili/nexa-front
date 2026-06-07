import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{ background: "#E3E3E3", borderTop: "1px solid #C8C8C8" }} className="pt-12">

      {/* ── Top Row: Logo / Services / About ── */}
      <div className="max-w-[1240px] mx-auto px-6">
        {/* Brand — full width */}
        <div className="pb-7" style={{ borderBottom: "1px solid #C0C0C0" }}>
          <Image src="/images/logo.svg" alt="Nexa" width={110} height={38} className="mb-4" />
          <p className="text-[14px] text-[#555] leading-[1.7] max-w-[400px]">
            At NEXA, Global Launchpad for Entrepreneurship, Startup Acceleration, and Strategic
            Investment, Backed by Over 7 Years of Proven Expertise in Business Development,
            Strategic Planning, and International Market Access.
          </p>
        </div>

        {/* Services + About — 2 cols on mobile, same on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-8 py-7" style={{ borderBottom: "1px solid #C0C0C0" }}>

          {/* Services */}
          <div>
            <h5 className="text-[16px] font-bold text-[#1a1a1a] mb-4">Services</h5>
            <ul className="space-y-[10px]">
              {[
                ["Startup", "/startup"],
                ["Investment", "/investment"],
                ["Advisory", "/advisory"],
                ["Entrepreneurship", "/Entrepreneurship"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className="text-[14px] text-[#555] hover:text-[#8F27FF] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h5 className="text-[16px] font-bold text-[#1a1a1a] mb-4">About Nexa</h5>
            <ul className="space-y-[10px]">
              {[
                ["About Us", "/our-story"],
                ["Our Team", "/our-team"],
                ["Contact Us", "/contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className="text-[14px] text-[#555] hover:text-[#8F27FF] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* ── Offices Row ── */}
        <div className="py-7" style={{ borderBottom: "1px solid #C0C0C0" }}>
          <h5 className="text-[16px] font-bold text-[#1a1a1a] mb-5">Our Offices</h5>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div>
              <strong className="block text-[14px] font-semibold text-[#1a1a1a] mb-2">Canada</strong>
              <div className="flex items-start gap-2 text-[14px] text-[#555] mb-1.5 leading-[1.6]">
                <svg className="w-4 h-4 text-[#8F27FF] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                906-935 Marine Dr, West Vancouver, British Columbia, Canada
              </div>
              <div className="flex items-center gap-2 text-[14px] text-[#555]">
                <svg className="w-4 h-4 text-[#8F27FF] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.39 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.89a16 16 0 0 0 6.07 6.07l1.06-1.06a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                +1 (604) 351-5951
              </div>
            </div>

            <div>
              <strong className="block text-[14px] font-semibold text-[#1a1a1a] mb-2">Iran</strong>
              <div className="flex items-start gap-2 text-[14px] text-[#555] mb-1.5 leading-[1.6]">
                <svg className="w-4 h-4 text-[#8F27FF] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                No. 27, Neom Building (Next to the Tandis Complex), Tajrish Square, Tehran, Iran
              </div>
              <div className="flex items-center gap-2 text-[14px] text-[#555]">
                <svg className="w-4 h-4 text-[#8F27FF] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.39 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.89a16 16 0 0 0 6.07 6.07l1.06-1.06a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                +98 (21) 2691-7416
              </div>
            </div>

          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="py-[18px] flex flex-col items-center md:flex-row md:justify-between gap-4 text-[14px] text-[#555]">
          <span className="order-2 md:order-1">Copyright © 2025 Nexa. All rights reserved.</span>
          <div className="order-1 md:order-2 flex gap-2.5">
            {/* YouTube */}
            <SocialLink href="#" label="YouTube">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.95C18.88 4 12 4 12 4s-6.88 0-8.59.47A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" /></svg>
            </SocialLink>
            {/* Instagram */}
            <SocialLink href="#" label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
            </SocialLink>
            {/* LinkedIn */}
            <SocialLink href="#" label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
            </SocialLink>
          </div>
        </div>

      </div>
    </footer>
  );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: ReactNode }) {
  return (
    <a href={href} aria-label={label}
      className="w-10 h-10 bg-[#F4F4F4] border border-[#E2E2E2] rounded-[10px] grid place-items-center text-[#8F27FF] hover:bg-[#8F27FF] hover:text-white hover:border-[#8F27FF] hover:-translate-y-0.5 transition-all [&>svg]:w-[18px] [&>svg]:h-[18px]">
      {children}
    </a>
  );
}
