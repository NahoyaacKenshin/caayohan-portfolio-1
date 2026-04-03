import { Section } from "@/components/common/Section";
import { BlogGrid } from "@/components/features/blog/Blog-Grid";
import { SectionHeading } from "@/components/common/SectionHeading";
import { BLOG_POSTS } from "@/constants/blog";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, History } from "lucide-react";
import Link from "next/link";

interface Props {
  params: Promise<{ slug?: string[] }>;
}

export default async function BlogDatePage({ params }: Props) {
  const { slug } = await params;
  const [year, month, day] = slug ?? [];

  // 1. FILTERING LOGIC
  const filtered = BLOG_POSTS.filter((post) => {
    const d = new Date(post.date);
    if (year && d.getFullYear() !== parseInt(year)) return false;
    if (month && d.getMonth() + 1 !== parseInt(month)) return false;
    if (day && d.getDate() !== parseInt(day)) return false;
    return true;
  }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // 2. DYNAMIC UI LABELS
  let label = "Archive Timeline";
  let description = "Browse our stories by year and month.";

  if (year) {
    const dateObj = new Date(
      parseInt(year), 
      month ? parseInt(month) - 1 : 0, 
      day ? parseInt(day) : 1
    );
    
    label = dateObj.toLocaleDateString("en-US", {
      year: "numeric",
      month: month ? "long" : undefined,
      day: day ? "numeric" : undefined,
    });
    description = `Found ${filtered.length} post${filtered.length !== 1 ? "s" : ""} from this period.`;
  }

  // 3. GENERATE UNIQUE FILTERS FOR THE UI
  const availableYears = Array.from(
    new Set(BLOG_POSTS.map((p) => new Date(p.date).getFullYear()))
  ).sort((a, b) => b - a);

  return (
    <Section className="container mx-auto px-5 py-12 min-h-screen">
 
      <div className="mb-12">
        <Link href="/blog">
          <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-primary">
            <ArrowLeft className="h-4 w-4" />
            Back to Blog Home
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
     
        <aside className="lg:col-span-1 space-y-8">
          <div className="space-y-4">
            <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
              <History size={14} /> Filter by Year
            </h3>
            <div className="flex flex-wrap lg:flex-col gap-2">
              {availableYears.map((y) => (
                <Link key={y} href={`/blog/date/${y}`} className="w-fit lg:w-full">
                  <Button 
                    variant={year === y.toString() ? "default" : "outline"} 
                    size="sm" 
                    className="w-full justify-start rounded-xl shadow-sm transition-all active:scale-95"
                  >
                    <Calendar className="mr-2 h-3 w-3 opacity-50" />
                    {y}
                  </Button>
                </Link>
              ))}
              {year && (
                <Link href="/blog/date" className="w-full mt-2">
                  <Button variant="ghost" size="sm" className="w-full text-xs text-destructive hover:bg-destructive/10">
                    Clear Filters
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </aside>

        <div className="lg:col-span-3 space-y-10">
          <div className="border-l-4 border-primary pl-6 py-2">
            <SectionHeading title={label} description={description} />
          </div>

          <BlogGrid 
            posts={filtered} 
            emptyMessage="No stories were published during this specific period." 
          />
        </div>
      </div>
    </Section>
  );
}