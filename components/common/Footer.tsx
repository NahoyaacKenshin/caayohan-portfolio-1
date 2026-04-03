import Link from "next/link";
import SocialIcons from "./Social Icons";
import { Send, Phone, MapPin, LucideIcon } from "lucide-react";
import { BLOG_POSTS } from "@/constants/blog";
import { useMemo } from "react";

const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
] as const;

interface ContactItem {
    label: string;
    value: string;
    icon: LucideIcon;
    href: string;
}

const contactInfo: ContactItem[] = [
    {
        label: "Email",
        value: "kenjicaaayohan55@gmail.com",
        icon: Send,
        href: "mailto:kenjicaaayohan55@gmail.com"
    },
    {
        label: "Phone",
        value: "+63 926 474 7970",
        icon: Phone,
        href: "tel:+639264747970"
    },
    {
        label: "Address",
        value: "Poblacion, Cordova, Cebu",
        icon: MapPin,
        href: "https://www.google.com/maps/search/?api=1&query=Poblacion,Cordova,Cebu"
    }
];


export function Footer() {
    const recentBlogs = useMemo(() => {
        return BLOG_POSTS.slice(0, 3);
    }, []);

    return (
        <footer className="w-full h-full border-b border-border w-full bg-secondary">
            <div className="container mx-auto px-5 pt-14 pb-7 md:px-7 lg:px-10">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-4 border-b border-border pb-10 mb-5">

                    {/* Logo with short desc & Socials */}
                    <div className="space-y-5">
                        <Link href="/" className="text-lg font-bold tracking-tight hover:text-primary transition-colors">
                            Kenji Caayohan<span className="text-primary">.</span>
                        </Link>
                        <p className="text-md text-muted-foreground">
                            A showcase of my projects, skills, and experiences.
                        </p>
                        <SocialIcons />
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-5 text-md font-semibold text-foreground">Quick Links</h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-muted-foreground transition-colors hover:text-foreground">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Blogs */}
                    <div>
                        <h3 className="mb-5 text-md font-semibold text-foreground">Latest Blogs</h3>
                        <ul className="space-y-3">
                            {recentBlogs.map((post) => (
                                <li key={post.id}>
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="text-sm text-muted-foreground transition-colors hover:text-primary line-clamp-2 leading-snug block"
                                    >
                                        {post.title}
                                    </Link>
                                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground/50">
                                        {post.category.join(" • ")}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="mb-5 text-md font-semibold text-foreground">Contact Info</h3>
                        <ul className="space-y-2">
                            {contactInfo.map((info) => {
                                const Icon = info.icon;

                                return (
                                    <li key={info.label} className="flex items-center group">
                                        <div className="mr-2.5 transition-colors">
                                            <Icon size={18} className="text-muted-foreground group-hover:text-primary" />
                                        </div>
                                        <div className="flex flex-col">
                                            <Link
                                                href={info.href}
                                                className="text-muted-foreground transition-colors hover:text-foreground"
                                            >
                                                {info.value}
                                            </Link>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                </div>

                <div className="flex flex-col md:flex-row items-center md:justify-between">
                    <p className="text-sm text-muted-foreground">
                        &copy; {new Date().getFullYear()} Kenji Caayohan. All rights reserved.
                    </p>
                    <p className="text-sm text-muted-foreground">
                        Designed and built by Kenji Caayohan.
                    </p>
                </div>
            </div>
        </footer>
    );
}