"use client";

import { useState } from "react";
import Row from "../global/Row";

const faqData = [
    { title: "Is this for passive investors or active founders? ", content: "Our programs cater to both. We tailor the involvement level—from hands-on operational leadership to strategic capital oversight. " },
    { title: "How does Nexa ensure business sustainability?", content: "Nexa ensures business sustainability through comprehensive support systems, including strategic planning, financial oversight, and continuous mentorship. We focus on building resilient business models that can adapt to changing market conditions and long-term growth objectives." },
    { title: "How does Nexa ensure business sustainability?", content: "Nexa ensures business sustainability through comprehensive support systems, including strategic planning, financial oversight, and continuous mentorship. We focus on building resilient business models that can adapt to changing market conditions and long-term growth objectives." },
    { title: "How does Nexa ensure business sustainability?", content: "Nexa ensures business sustainability through comprehensive support systems, including strategic planning, financial oversight, and continuous mentorship. We focus on building resilient business models that can adapt to changing market conditions and long-term growth objectives." },
    { title: "What is the difference between active and passive involvement?", content: "Active involvement involves direct participation in business operations, while passive involvement focuses on strategic oversight and capital allocation." },
    { title: "How do I get started with Nexa?", content: "To get started, simply reach out to us through our contact form or schedule a consultation. We'll guide you through the next steps." },
    { title: "What kind of support does Nexa provide?", content: "Nexa provides comprehensive support including strategic planning, financial management, mentorship, and access to a network of industry experts." },
    { title: "Can I participate in multiple programs?", content: "Yes, you can participate in multiple programs based on your interests and availability." },
        { title: "What is the difference between active and passive involvement?", content: "Active involvement involves direct participation in business operations, while passive involvement focuses on strategic oversight and capital allocation." },
    { title: "How do I get started with Nexa?", content: "To get started, simply reach out to us through our contact form or schedule a consultation. We'll guide you through the next steps." },
    { title: "What kind of support does Nexa provide?", content: "Nexa provides comprehensive support including strategic planning, financial management, mentorship, and access to a network of industry experts." },
    { title: "Can I participate in multiple programs?", content: "Yes, you can participate in multiple programs based on your interests and availability." },
        { title: "What is the difference between active and passive involvement?", content: "Active involvement involves direct participation in business operations, while passive involvement focuses on strategic oversight and capital allocation." },
    { title: "How do I get started with Nexa?", content: "To get started, simply reach out to us through our contact form or schedule a consultation. We'll guide you through the next steps." },
    { title: "What kind of support does Nexa provide?", content: "Nexa provides comprehensive support including strategic planning, financial management, mentorship, and access to a network of industry experts." },
    { title: "Can I participate in multiple programs?", content: "Yes, you can participate in multiple programs based on your interests and availability." },
];

const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="py-20">
            <Row>
                <div
                    className="mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 p-8"
                    style={{ background: '#F6F6F6', borderRadius: "20px", padding: "80px", width: "100%" }}
                >
                    {faqData.map((item, index) => {
                        const isActive = activeIndex === index;

                        return (
                            <div
                                key={index}
                                onClick={() => toggle(index)}
                                className="cursor-pointer bg-white rounded-xl p-6 transition-all duration-300"
                                style={{
                                    boxShadow: isActive ? "0px 4px 8px 0px #8F27FF40" : "0px 4px 4px 0px #0000001A",
                                    borderStyle: "solid",
                                    borderWidth: "1px 1px 1px 6px",
                                    borderColor: isActive ? "#8F27FF" : "#D2D2D2",
                                }}
                            >
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-medium text-black">{item.title}</h3>
                                    <img
                                        src={isActive ? "/images/Entrepreneurship/close.svg" : "/images/Entrepreneurship/open.svg"}
                                        alt={isActive ? "Close" : "Open"}
                                        className="w-6 h-6"
                                    />
                                </div>

                                {isActive && (
                                    <div className="mt-3">
                                        <p className="text-sm text-gray-600 leading-relaxed">{item.content}</p>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </Row>
        </div>
    );
};

export default FAQSection;
