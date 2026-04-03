import Link from "next/link";
import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";

export default function BlogNotFound() {
  return (
    <Section className="min-h-screen flex flex-col items-center justify-center text-center space-y-4">
      <p className="text-5xl font-semibold tracking-tight">404</p>
      <p className="text-muted-foreground text-sm">
        This post or category doesn't exist.
      </p>
      <Link href="/blog">
        <Button variant="outline" size="sm">Back to Blog</Button>
      </Link>
    </Section>
  );
}