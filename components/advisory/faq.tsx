"use client";

import { useState } from "react";
import Row from "../global/Row";
import IconOpen from '@/components/global/IconOpen';
import IconClose from '@/components/global/IconClose';

const faqData = [
  {
    title: "Is this for passive investors or active founders?",
    content:
      "Our programs cater to both. We tailor the involvement level—from hands-on operational leadership to strategic capital oversight.",
  },
  {
    title: "How does Nexa ensure business sustainability?",
    content:
      "Nexa ensures business sustainability through comprehensive support systems, including strategic planning, financial oversight, and continuous mentorship. We focus on building resilient business models that can adapt to changing market conditions and long-term growth objectives.",
  },
  {
    title: "How does Nexa ensure business sustainability?",
    content:
      "Nexa ensures business sustainability through comprehensive support systems, including strategic planning, financial oversight, and continuous mentorship. We focus on building resilient business models that can adapt to changing market conditions and long-term growth objectives.",
  },
  {
    title: "How does Nexa ensure business sustainability?",
    content:
      "Nexa ensures business sustainability through comprehensive support systems, including strategic planning, financial oversight, and continuous mentorship. We focus on building resilient business models that can adapt to changing market conditions and long-term growth objectives.",
  },
  {
    title: "What is the difference between active and passive involvement?",
    content:
      "Active involvement involves direct participation in business operations, while passive involvement focuses on strategic oversight and capital allocation.",
  },
  {
    title: "How do I get started with Nexa?",
    content:
      "To get started, simply reach out to us through our contact form or schedule a consultation. We'll guide you through the next steps.",
  },
  {
    title: "What kind of support does Nexa provide?",
    content:
      "Nexa provides comprehensive support including strategic planning, financial management, mentorship, and access to a network of industry experts.",
  },
  {
    title: "Can I participate in multiple programs?",
    content:
      "Yes, you can participate in multiple programs based on your interests and availability.",
  },
];

const MOBILE_INITIAL_COUNT = 6;

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const visibleMobileFaqs = showAll
    ? faqData
    : faqData.slice(0, MOBILE_INITIAL_COUNT);

  return (
    <div className="py-12 md:py-20">

      {/* ================= MOBILE ================= */}
      <div className="md:hidden px-5">

        <h2 className="text-2xl font-bold text-center mb-8">
          FAQs
        </h2>

        <div
          className="flex flex-col gap-3 rounded-2xl p-5"
          style={{ background: "#F6F6F6" }}
        >
          {visibleMobileFaqs.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                onClick={() => toggle(index)}
                className="cursor-pointer bg-white rounded-xl p-4 transition-all duration-300"
                style={{
                  boxShadow: isActive
                    ? "0px 4px 8px 0px #8F27FF40"
                    : "0px 4px 4px 0px #0000001A",
                  borderStyle: "solid",
                  borderWidth: "1px 1px 1px 5px",
                  borderColor: isActive ? "#8F27FF" : "#D2D2D2",
                }}
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xs font-medium text-black leading-snug">
                    {item.title}
                  </h3>

                  {isActive ? (
                    <IconClose className="w-5 h-5 flex-shrink-0" stroke="#8F27FF" />
                  ) : (
                    <IconOpen className="w-5 h-5 flex-shrink-0" stroke="#8F27FF" />
                  )}
                </div>

                {isActive && (
                  <p className="mt-3 text-xs text-gray-600 leading-relaxed">
                    {item.content}
                  </p>
                )}
              </div>
            );
          })}

          {!showAll && faqData.length > MOBILE_INITIAL_COUNT && (
            <button
              onClick={() => setShowAll(true)}
              className="mt-2 flex items-center justify-center gap-2 text-sm font-semibold text-[#8F27FF]"
            >
              Show More

              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#8F27FF"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
          )}

          {showAll && (
            <button
              onClick={() => setShowAll(false)}
              className="mt-2 flex items-center justify-center gap-2 text-sm font-semibold text-[#8F27FF]"
            >
              Show Less

              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#8F27FF"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="18 15 12 9 6 15" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:block">
        <Row>
          <div className="w-full">

            <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
              FAQs
            </h2>

            <div
              className="mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-start w-full rounded-[20px] p-6 md:p-12 lg:p-20"
              style={{ background: "#F6F6F6" }}
            >
              {faqData.map((item, index) => {
                const isActive = activeIndex === index;

                return (
                  <div
                    key={index}
                    onClick={() => toggle(index)}
                    className="cursor-pointer bg-white rounded-xl p-6 transition-all duration-300"
                    style={{
                      boxShadow: isActive
                        ? "0px 4px 8px 0px #8F27FF40"
                        : "0px 4px 4px 0px #0000001A",
                      borderStyle: "solid",
                      borderWidth: "1px 1px 1px 6px",
                      borderColor: isActive ? "#8F27FF" : "#D2D2D2",
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-md font-medium text-black">
                        {item.title}
                      </h3>

                      {isActive ? (
                        <IconClose className="w-6 h-6" stroke="#8F27FF" />
                      ) : (
                        <IconOpen className="w-6 h-6" stroke="#8F27FF" />
                      )}
                    </div>

                    {isActive && (
                      <div className="mt-3">
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {item.content}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </Row>
      </div>
    </div>
  );
};

export default Faq;