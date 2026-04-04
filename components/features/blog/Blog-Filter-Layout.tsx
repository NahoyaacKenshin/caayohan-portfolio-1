import Link from "next/link";
import Image from "next/image";
import { Section } from "@/components/common/Section";
import { BlogGrid } from "@/components/features/blog/Blog-Grid";
import { BLOG_CATEGORIES, BLOG_POSTS, BlogPost } from "@/constants/blog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

interface BlogFilterLayoutProps {
    posts?: BlogPost[];
    title?: string;
    description?: string;
    activeSlug?: string;
    activeYear?: string;
    emptyMessage?: string;
}

export function BlogFilterLayout({
    posts,
    title = "Blog",
    description = "Thoughts on technology, design, and craft.",
    activeSlug,
    activeYear,
    emptyMessage,
}: BlogFilterLayoutProps) {
    
    // 1. Data Logic
    const allPosts = [...BLOG_POSTS].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    const displayPosts = posts ?? allPosts;
    const topLevel = BLOG_CATEGORIES.filter((c) => !c.parent);
    
    const subCategories = activeSlug 
        ? BLOG_CATEGORIES.filter((c) => c.parent === activeSlug)
        : [];

    const availableYears = activeSlug
        ? Array.from(
            new Set(
                BLOG_POSTS.filter((p) => p.category.includes(activeSlug)).map((p) =>
                    new Date(p.date).getFullYear()
                )
            )
        ).sort((a, b) => b - a)
        : [];

    return (
        <div className="space-y-0">
            {/* HERO SECTION */}
            <Section className="relative min-h-[420px] md:min-h-[520px] flex items-end overflow-hidden p-0">
                <div className="absolute inset-0">
                    <Image
                        src="https://images7.alphacoders.com/133/1337527.png"
                        alt="Programming Background"
                        fill
                        className="object-cover z-0"
                        priority
                    />
                </div>

                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />

                <div className="relative z-10 container mx-auto px-5 md:px-7 lg:px-10 pb-12 md:pb-16">
                    <p className="text-xs uppercase tracking-[0.25em] text-white/60 mb-3">
                        {activeSlug ? `Category: ${activeSlug}` :  `${description}`}
                    </p>
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white drop-shadow-md">
                        {title}
                    </h1>
                    <div className="mt-4 h-px w-16 bg-white/30" />
                </div>
            </Section>

            {/* FILTER & GRID SECTION */}
            <Section className="space-y-8 container mx-auto px-5 md:px-7 lg:px-10 py-12">

                {/* Filter Bar */}
                <div className="flex flex-wrap items-center gap-3">
                    <Link href="/blog">
                        <Badge
                            variant={!activeSlug ? "default" : "outline"}
                            className="cursor-pointer text-sm px-4 py-4 hover:bg-primary/10 transition-colors"
                        >
                            All
                        </Badge>
                    </Link>

                    {topLevel.map((cat) => (
                        <Link key={cat.slug} href={`/blog/category/${cat.slug}`}>
                            <Badge
                                variant={activeSlug === cat.slug ? "default" : "outline"}
                                className="cursor-pointer text-sm px-4 py-4 transition-colors"
                            >
                                {cat.name}
                            </Badge>
                        </Link>
                    ))}

                    {availableYears.length > 0 && (
                        <>
                            <Separator orientation="vertical" className="h-6 hidden sm:block" />
                            {availableYears.map((y) => (
                                <Link
                                    key={y}
                                    href={activeSlug
                                        ? `/blog/date/${y}?category=${activeSlug}`
                                        : `/blog/date/${y}`
                                    }
                                >
                                    <Button
                                        variant={activeYear === y.toString() ? "default" : "outline"}
                                        size="sm"
                                        className="rounded-full gap-1.5"
                                    >
                                        <Calendar className="h-3 w-3 opacity-50" />
                                        {y}
                                    </Button>
                                </Link>
                            ))}

                            {activeYear && (
                                <Link href={activeSlug ? `/blog/category/${activeSlug}` : `/blog`}>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="text-xs text-destructive hover:bg-destructive/10 rounded-full"
                                    >
                                        Clear
                                    </Button>
                                </Link>
                            )}
                        </>
                    )}
                </div>

                {/* Sub-topics Section (Hidden in "All" state) */}
                {activeSlug && subCategories.length > 0 && (
                    <div className="flex flex-wrap gap-2 text-sm text-muted-foreground animate-in fade-in slide-in-from-top-1 duration-500">
                        <span className="self-center font-medium">Sub-topics:</span>
                        {subCategories.map((sub) => (
                            <Link
                                key={sub.slug}
                                href={`/blog/category/${activeSlug}/${sub.slug}`}
                                className="underline underline-offset-4 hover:text-foreground transition-colors"
                            >
                                {sub.name}
                            </Link>
                        ))}
                    </div>
                )}

                <Separator className="opacity-50" />

                {/* Results Grid */}
                <BlogGrid posts={displayPosts} emptyMessage={emptyMessage} />
            </Section>
        </div>
    );
}