import { BLOG_CATEGORIES, BLOG_POSTS } from "@/constants/blog";
import { BlogFilterLayout } from "@/components/features/blog/Blog-Filter-Layout";

interface Props {
  params: Promise<{ slug?: string[] }>;
  searchParams: Promise<{ category?: string }>;
}

export default async function BlogDatePage({ params, searchParams }: Props) {
  const { slug } = await params;
  const { category } = await searchParams;
  const [year, month, day] = slug ?? [];

  const categoryObj = category
    ? BLOG_CATEGORIES.find((c) => c.slug === category)
    : null;

  const posts = BLOG_POSTS.filter((p) => {
    if (category && !p.category.includes(category)) return false;
    const d = new Date(p.date);
    if (year && d.getFullYear() !== parseInt(year)) return false;
    if (month && d.getMonth() + 1 !== parseInt(month)) return false;
    if (day && d.getDate() !== parseInt(day)) return false;
    return true;
  }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const dateLabel = year
    ? new Date(
        parseInt(year),
        month ? parseInt(month) - 1 : 0,
        day ? parseInt(day) : 1
      ).toLocaleDateString("en-US", {
        year: "numeric",
        month: month ? "long" : undefined,
        day: day ? "numeric" : undefined,
      })
    : null;

  const baseTitle = categoryObj ? categoryObj.name : "Blog";
  const title = dateLabel ? `${baseTitle} — ${dateLabel}` : baseTitle;
  const description = `${posts.length} post${posts.length !== 1 ? "s" : ""}${categoryObj ? ` in ${categoryObj.name}` : ""}${dateLabel ? ` from ${dateLabel}` : ""}`;

  return (
    <BlogFilterLayout
      posts={posts}
      title={title}
      description={description}
      activeSlug={category}
      activeYear={year}
      emptyMessage={`No posts${categoryObj ? ` in ${categoryObj.name}` : ""}${dateLabel ? ` from ${dateLabel}` : ""} yet.`}
    />
  );
}