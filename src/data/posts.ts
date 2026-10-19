export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
}

export const initialPosts: BlogPost[] = [
  {
    id: 1,
    title: "Building Modular Frontends with React",
    excerpt:
      "Explore how component encapsulation and typed props scale modern interfaces.",
    content:
      "Full guide to architecting modular React applications using TypeScript and clear layout routes.",
    author: "Admin",
    date: "2026-10-10",
  },
  {
    id: 2,
    title: "Deep Dive into React Router Navigation",
    excerpt:
      "Understanding declarative nested routing and single-page mechanics.",
    content:
      "Declarative routing allows nested layouts where shared components stay intact without full reloads.",
    author: "TechLead",
    date: "2026-10-12",
  },
  {
    id: 3,
    title: "Local State Management Best Practices",
    excerpt:
      "How useState and UI events ensure immediate, independent reactivity.",
    content:
      "Local state should stay as close to where it is consumed as possible to keep components reusable.",
    author: "Engineer",
    date: "2026-10-14",
  },
  {
    id: 4,
    title: "Client-Side Route Protection Strategies",
    excerpt: "Shielding restricted dashboard views via React layout wrappers.",
    content:
      "Client-side route guards redirect unauthenticated readers smoothly before rendering sensitive views.",
    author: "SecurityDesk",
    date: "2026-10-15",
  },
  {
    id: 5,
    title: "Reliable Component Testing with Vitest",
    excerpt:
      "Testing user interactions with userEvent and React Testing Library.",
    content:
      "Component unit tests simulate real browser behavior and user gestures rather than implementation details.",
    author: "QA Lead",
    date: "2026-10-17",
  },
  {
    id: 6,
    title: "Deploying SPAs to GitHub Pages without 404s",
    excerpt:
      "Resolving deep-link reload errors with Vite base paths and 404.html fallbacks.",
    content:
      "When hosting client-side routed applications on static servers like GitHub Pages, refreshing any URL other than the root leads to a standard HTTP 404 error. Duplicating index.html to 404.html via a postbuild script ensures GitHub redirects all unknown entry paths back into React Router, preserving user state and deep links seamlessly.",
    author: "DevOps",
    date: "2026-10-13",
  },
  {
    id: 7,
    title: "Design Tokens and Dynamic Theme Architecture",
    excerpt:
      "Structuring CSS custom properties for effortless dark mode and brand palettes.",
    content:
      "Modern CSS custom properties allow defining scalable design systems directly in pure CSS. By pairing high-contrast accent tokens like amber-yellow with rich surface dark tones, web apps achieve accessible contrast ratios and seamless visual consistency across modular components.",
    author: "DesignOps",
    date: "2026-10-19",
  },
];
