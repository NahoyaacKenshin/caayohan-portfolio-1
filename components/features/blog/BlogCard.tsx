import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BLOG_CATEGORIES, BlogPost } from "@/constants/blog";
import { CalendarDays, User } from "lucide-react";
import Image from "next/image";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <Card className="h-full flex flex-col hover:-translate-y-1 transition-all duration-300 hover:shadow-md border border-transparent hover:border-border">
        <Image src={post.image} alt="blog-img" width={500} height={300} />
        <CardHeader className="pb-3">
          <div className="flex flex-wrap gap-1.5 mb-2">
            {post.category.map((cat) => {
              const found = BLOG_CATEGORIES.find((c) => c.slug === cat);
              return (
                <Badge key={cat} variant="secondary" className="text-xs">
                  {found?.name ?? cat}
                </Badge>
              );
            })}
          </div>
          <CardTitle className="text-lg leading-snug group-hover:underline underline-offset-4 decoration-muted-foreground/40">
            {post.title}
          </CardTitle>
          <CardDescription className="text-sm line-clamp-2">{post.excerpt}</CardDescription>
        </CardHeader>
        <CardFooter className="mt-auto pt-3 border-t flex items-center justify-between text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <User className="h-3 w-3" />
            {post.author}
          </span>
          <span className="flex items-center gap-1.5">
            <CalendarDays className="h-3 w-3" />
            {formattedDate}
          </span>
        </CardFooter>
      </Card>
    </Link>
  );
}