// import Link from "next/link";
// import { Badge } from "@/components/ui/badge";
// import { BLOG_CATEGORIES } from "@/constants/blog";

// interface BlogCategoryNavProps {
//   activeSlug?: string;
// }

// export function BlogCategoryNav({ activeSlug }: BlogCategoryNavProps) {
//   // Top-level categories only
//   const topLevel = BLOG_CATEGORIES.filter((c) => !c.parent);

//   return (
//     <div className="flex flex-wrap gap-2">
//       <Link href="/blog">
//         <Badge variant={!activeSlug ? "default" : "outline"} className="cursor-pointer text-sm px-4 py-4">
//           All
//         </Badge>
//       </Link>
//       {topLevel.map((cat) => (
//         <Link key={cat.slug} href={`/blog/category/${cat.slug}`}>
//           <Badge
//             variant={activeSlug === cat.slug ? "default" : "outline"}
//             className="cursor-pointer text-sm px-4 py-4"
//           >
//             {cat.name}
//           </Badge>
//         </Link>
//       ))}
//     </div>
//   );
// }

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { BLOG_CATEGORIES } from "@/constants/blog";
import { CalendarDays } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface BlogCategoryNavProps {
  activeSlug?: string;
  isDateView?: boolean; // New prop to handle active state for the Date Filter
}

export function BlogCategoryNav({ activeSlug, isDateView }: BlogCategoryNavProps) {
  const topLevel = BLOG_CATEGORIES.filter((c) => !c.parent);

  return (
    <div className="flex flex-wrap items-center gap-3">
      {/* Root / All Posts */}
      <Link href="/blog">
        <Badge 
          variant={!activeSlug && !isDateView ? "default" : "outline"} 
          className="cursor-pointer text-sm px-4 py-4 hover:bg-primary/10 transition-colors"
        >
          All
        </Badge>
      </Link>

      {/* Categories */}
      {topLevel.map((cat) => (
        <Link key={cat.slug} href={`/blog/category/${cat.slug}`}>
          <Badge
            variant={activeSlug === cat.slug ? "default" : "outline"}
            className="cursor-pointer text-sm px-4 py-4"
          >
            {cat.name}
          </Badge>
        </Link>
      ))}

      <Separator orientation="vertical" />

      <Link href="/blog/date">
        <Badge
          variant={isDateView ? "default" : "outline"}
          className="cursor-pointer text-sm px-4 py-4 flex items-center gap-2 border-primary/40 text-primary hover:bg-primary/5"
        >
          <CalendarDays size={14} />
          Archives
        </Badge>
      </Link>
    </div>
  );
}