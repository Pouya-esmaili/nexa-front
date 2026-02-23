import Branch from "@/components/Entrepreneurship/branch";
import Global from "@/components/Entrepreneurship/global";
import Service from "@/components/Entrepreneurship/service";
import Program from "@/components/Entrepreneurship/program";
// import Country from "@/components/Entrepreneurship/country";
import FAQSection from "@/components/Entrepreneurship/faqSection";
import EntrepreneurshipSection from "@/components/Entrepreneurship/entrepreneurshipSection";
import TargetAudienceSection from "@/components/Entrepreneurship/targetAudienceSection";
import Previous from "@/components/Entrepreneurship/previous";
import Form from "@/components/home/form";
import Designe from "@/components/Entrepreneurship/designe";

export default function Entrepreneurship() {
    return (
        <>
            <div className="w-full bg-white sm:items-star">
                <Branch />
                <Global />
                <Service />          
                {/* <Country /> */}
                <Program />
                <Designe />
                <EntrepreneurshipSection />
                {/* <TargetAudienceSection /> */}
                <Previous />
                <FAQSection />
                <Form />
            </div>
        </>
    );
}
