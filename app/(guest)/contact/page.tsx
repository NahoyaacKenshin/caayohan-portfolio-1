import { ContactForm } from "@/components/features/contact/ContactForm";
import { ContactHero } from "@/components/features/contact/ContactHero";
import { Map } from "@/components/features/contact/Map";

export default function ContactPage() {
    return (
        <>
            <ContactHero />
            <ContactForm />
            <Map />
        </>
    );
}