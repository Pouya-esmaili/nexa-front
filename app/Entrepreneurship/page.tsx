import Branch from "@/components/Entrepreneurship/branch";
import Service from "@/components/Entrepreneurship/service";
import Program from "@/components/Entrepreneurship/program";
import Country from "@/components/Entrepreneurship/country";
import FAQSection from "@/components/Entrepreneurship/faqSection";
import EntrepreneurshipSection from "@/components/Entrepreneurship/entrepreneurshipSection";
import TargetAudienceSection from "@/components/Entrepreneurship/targetAudienceSection";
import Previous from "@/components/Entrepreneurship/previous";

export default function Entrepreneurship() {
    return (
        <>
            <div className="w-full bg-white sm:items-star">
                <Branch />
                <Service />
                <Country />
                <Program />
                <EntrepreneurshipSection />
                <TargetAudienceSection />
                <Previous />
                <FAQSection />
            </div>
        </>
    );
}
