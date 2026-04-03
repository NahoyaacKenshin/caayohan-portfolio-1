import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";

export default function GuestLayout({
    children,
}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <main className="flex flex-col min-h-screen">
            <Header />
            {/* <div className="flex-1 container mx-auto px-5 py-2.5 md:px-7 lg:px-10">
                {children}
            </div> */}
            <div className="flex-1">
                {children}
            </div>
            <Footer />
        </main>
    );
}
            