import Business from "@/components/advisory/business";
import ServicesSection from "@/components/advisory/servicesSection";
import Strategy from "@/components/advisory/strategy";
import Scale from "@/components/advisory/scale";
import Projects from "@/components/advisory/projects";
import Process from "@/components/advisory/process";
import Faq from "@/components/advisory/faq";
import Form from "@/components/home/form";

export default function advisory() {
    return (
        <>
            <div className="w-full bg-white sm:items-star">
                <Business />
                <ServicesSection />
                <Strategy />
                <Scale />
                <Projects />
                <Process />
                <Faq />
                <Form />
            </div>
        </>
    );
}