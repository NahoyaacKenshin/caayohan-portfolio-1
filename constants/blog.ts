export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  image: string;
  excerpt: string;
  content: string;
  category: string[];
  date: string;
  author: string;
};

export type BlogCategory = {
  slug: string;
  name: string;
  parent?: string;
};

export const BLOG_CATEGORIES: BlogCategory[] = [
  { slug: "tech", name: "Technology" },
  { slug: "design", name: "Design" },
  { slug: "craft", name: "Craft" },
  { slug: "rust", name: "Rust", parent: "tech" },
  { slug: "typescript", name: "TypeScript", parent: "tech" },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    slug: "rust-ownership-demystified",
    title: "Rust Ownership Demystified",
    image: "https://imgur.com/NbLZ9Lz.png",
    excerpt: "A ground-up walkthrough of how Rust's ownership model actually works — and why it matters.",
    content: "Rust's ownership system is the cornerstone of its memory safety guarantees. Rather than a garbage collector, Rust enforces strict rules at compile time: every value has a single owner, and when that owner goes out of scope, the value is dropped. This post walks through ownership, borrowing, and lifetimes with concrete examples.",
    category: ["tech", "rust"],
    date: "2025-03-04",
    author: "Maren Solvik",
  },
  {
    id: "2",
    slug: "typescript-satisfies-operator",
    title: "The satisfies Operator You're Probably Not Using",
    image: "https://imgur.com/WXGwhxq.png",
    excerpt: "TypeScript 4.9 shipped a quiet gem. Here's when and why to reach for it.",
    content: "The satisfies operator lets you validate that an expression matches a type without widening the inferred type. It's a subtle distinction, but one that unlocks much tighter inference in config objects, theme tokens, and route maps. This post shows the before and after.",
    category: ["tech", "typescript"],
    date: "2025-03-10",
    author: "Lior Ben-David",
  },
  {
    id: "3",
    slug: "optical-sizing-in-variable-fonts",
    title: "Optical Sizing and Variable Fonts",
    image: "https://imgur.com/AZReL28.png",
    excerpt: "How modern variable fonts adapt letterforms across sizes — and how to use it in CSS.",
    content: "Variable fonts expose axes like weight, width, and optical size via font-variation-settings. The opsz axis in particular adjusts stroke contrast and spacing as type scales up or down, mimicking what metal type foundries did by hand for centuries. Here's how to wire it up properly.",
    category: ["design", "craft"],
    date: "2025-03-15",
    author: "Yuki Ashida",
  },
  {
    id: "4",
    slug: "shipping-without-perfection",
    title: "Shipping Without Perfection",
    image: "https://imgur.com/LMbMrel.png",
    excerpt: "A pragmatic argument for releasing rough edges — and what to polish later.",
    content: "The pursuit of perfection before launch is a form of procrastination dressed up as diligence. This post argues for a tiered model: identify the two or three things that must feel complete, ship everything else at 80%, and iterate in public. The feedback loop is the product.",
    category: ["craft"],
    date: "2025-03-18",
    author: "Maren Solvik",
  },
  {
    id: "5",
    slug: "grid-subgrid-finally",
    title: "CSS Subgrid: Finally Useful",
    image: "https://imgur.com/3w9gjAN.png",
    excerpt: "Subgrid is now baseline. Here's what it solves and how to use it today.",
    content: "CSS subgrid allows a grid item's children to participate in the parent grid's track sizing. This solves the long-standing problem of aligning content across sibling cards without JavaScript measurement hacks. Browser support crossed the baseline threshold in late 2024, making it production-ready.",
    category: ["design", "tech"],
    date: "2025-03-22",
    author: "Lior Ben-David",
  },
  {
    id: "6",
    slug: "writing-as-thinking",
    title: "Writing as Thinking",
    image: "https://imgur.com/CLZoYYF.png",
    excerpt: "Why the act of writing a post — even a short one — sharpens how you understand your own work.",
    content: "Writing forces you to confront what you actually understand versus what you vaguely recognize. When you can't explain something in prose, that's a signal, not a stylistic problem. This post is about building a writing habit not for an audience, but for yourself.",
    category: ["craft"],
    date: "2025-03-25",
    author: "Yuki Ashida",
  },
];