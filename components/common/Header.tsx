"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./ModeToggle";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
] as const;

export function Header() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 border-b border-border w-full bg-background">
            <div className="relative z-10 flex flex-row h-14 md:h-18 justify-between items-center container mx-auto px-5 py-2.5 md:px-7 lg:px-10">

                {/* Logo */}
                <div>
                    <Link href="/" className="text-lg font-bold tracking-tight hover:text-primary transition-colors">
                        Kenji Caayohan<span className="text-primary">.</span>
                    </Link>
                </div>

                {/* Desktop Nav */}
                <div className="flex flex-row justify-end gap-10">
                    <nav className="hidden md:flex items-center">
                        <ul className="flex item-center gap-3">
                            {navLinks.map(({ href, label }) => {
                                const isActive = pathname === href;
                                return (
                                    <li key={href}>
                                        <Link
                                            href={href}
                                            className={`px-2 py-1.5 text-sm transition-colors hover:text-foreground hover:text-accent-foreground ${isActive
                                                ? "text-foreground text-accent-foreground font-medium"
                                                : "text-muted-foreground"
                                                }`}
                                        >
                                            {label}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>

                    <div className="flex items-center gap-1.5">
                        <ModeToggle />
                        <Link href="/contact">
                            <Button variant="default" size="lg" className="hidden lg:inline-flex hover:scale-105 transition-transform">
                                Contact
                            </Button>
                        </Link>

                        <Button
                            variant="ghost"
                            size="icon"
                            className="md:hidden"
                            onClick={() => setOpen((o) => !o)}
                            aria-label={open ? "Close menu" : "Open menu"}
                            aria-expanded={open}
                        >
                            {open ? <X className="size-5" /> : <Menu className="size-5" />}
                        </Button>

                        {/* Mobile Menu Overlay */}
                        {open && (
                            <div
                                className="md:hidden fixed inset-0 top-14 left-0 right-0 bottom-0 z-0 bg-black/50 backdrop-blur-sm"
                                aria-hidden
                                onClick={() => setOpen(false)}
                            />
                        )}
                    </div>
                </div>
            </div>

            {/* Drop Down Menu Mobile */}
            {open && (
                <div className="md:hidden relative z-10 border-t border-border bg-background">
                    <nav className="container mx-auto px-4 py-4">
                        <ul className="flex flex-col gap-1">
                            {navLinks.map(({ href, label }) => {
                                const isActive = pathname === href;
                                return (
                                    <li key={href}>
                                        <Link
                                            href={href}
                                            onClick={() => setOpen(false)}
                                            className={`block rounded-md px-3 py-2.5 text-sm transition-colors hover:bg-accent hover:text-accent-foreground ${isActive
                                                ? "bg-accent text-accent-foreground"
                                                : "text-muted-foreground"
                                                }`}
                                        >
                                            {label}
                                        </Link>
                                    </li>
                                );
                            })}
                            <li className="mt-2 pt-2 border-t border-border">
                                <Link href="/contact" onClick={() => setOpen(false)}>
                                    <Button size="lg" className="w-full justify-center">
                                        Contact
                                    </Button>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            )}
        </header>
    );
}
