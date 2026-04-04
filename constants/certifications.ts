export interface Certification {
  title: string;
  issuer: string;
  img: string;
}

export const CERTIFICATIONS: Certification[] = [
  { 
    title: "AWS Certified Developer", 
    issuer: "Amazon Web Services",
    img: "https://placehold.co/600x400/1e293b/ffffff.png?text=AWS+Certified" 
  },
  { 
    title: "Google UX Design", 
    issuer: "Google",
    img: "https://placehold.co/600x400/334155/ffffff.png?text=Google+UX" 
  },
  { 
    title: "Meta Frontend Developer", 
    issuer: "Meta",
    img: "https://placehold.co/600x400/475569/ffffff.png?text=Meta+Frontend" 
  },
  { 
    title: "TypeScript Advanced", 
    issuer: "CodeAcademy",
    img: "https://placehold.co/600x400/64748b/ffffff.png?text=TypeScript" 
  },
  { 
    title: "Next.js Foundations", 
    issuer: "Vercel",
    img: "https://placehold.co/600x400/94a3b8/ffffff.png?text=Next.js" 
  },
  { 
    title: "Docker Essentials", 
    issuer: "Docker Inc.",
    img: "https://placehold.co/600x400/cbd5e1/0f172a.png?text=Docker" 
  },
];