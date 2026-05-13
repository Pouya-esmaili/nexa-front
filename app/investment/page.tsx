import Invest from "@/components/investment/invest";
import Offer from "@/components/investment/offer";
import Value from "@/components/investment/value";
import FAQSection from "@/components/Entrepreneurship/faqSection";
import Form from "@/components/home/form";
import PreviousProjectsSection from "@/components/Entrepreneurship/previous";
import InvestSection from "@/components/investment/investSection";
import Process from "@/components/investment/process";

export default function investment() {
    return (
        <>
            <div className="w-full bg-white sm:items-start">
                <Invest />
                <Offer />
                <Value />
                <InvestSection />
                <Process />
                <PreviousProjectsSection />
                <FAQSection />
                <Form />
            </div>
        </>
    );
}