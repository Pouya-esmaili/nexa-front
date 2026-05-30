import ContactSection from "@/components/contact/contactsection";
import Hero from "@/components/contact/hero";


export default function contact() {
    return (
        <>
            <div className="w-full bg-white sm:items-star">
                <Hero />
                <ContactSection />
            </div>
        </>
    );
}