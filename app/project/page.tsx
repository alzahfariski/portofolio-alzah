import { getProjects } from "@/lib/firestore";
import { Project } from "@/lib/types";
import { ProjectPageClient } from "@/components/project-page-client";

// Sample fallback projects when Firestore is empty
const sampleProjects: Project[] = [
  {
    title: "E-Commerce Mobile App",
    description:
      "A full-featured shopping experience built with Flutter, featuring real-time cart updates, payment gateway integration, and a stunning product showcase.",
    category: "Mobile App",
    imageUrl:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    tags: ["Flutter", "Dart", "Firebase"],
    linkUrl: "#",
    year: "2025",
  },
  {
    title: "Portfolio Website Redesign",
    description:
      "Modern portfolio website built with Next.js and Tailwind CSS, featuring bento grid layout and smooth animations.",
    category: "Web App",
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    linkUrl: "#",
    year: "2025",
  },
  {
    title: "Dashboard UI Kit",
    description:
      "Comprehensive dashboard design system with data visualization components, dark mode support, and responsive layouts.",
    category: "UI/UX Design",
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["Figma", "Design System", "UI Kit"],
    linkUrl: "#",
    year: "2024",
  },
  {
    title: "Food Delivery App",
    description:
      "Real-time food ordering platform with GPS tracking, order management, and restaurant partner dashboard.",
    category: "Mobile App",
    imageUrl:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80",
    tags: ["Flutter", "Google Maps", "REST API"],
    linkUrl: "#",
    year: "2024",
  },
  {
    title: "SaaS Landing Page",
    description:
      "High-conversion landing page with micro-interactions, pricing tables, and integrated CMS for content management.",
    category: "Web App",
    imageUrl:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    tags: ["Next.js", "Laravel", "MySQL"],
    linkUrl: "#",
    year: "2024",
  },
  {
    title: "Fitness Tracker UI",
    description:
      "Clean, minimal UI design for a health and fitness tracking app with progress charts and workout planning.",
    category: "UI/UX Design",
    imageUrl:
      "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80",
    tags: ["Figma", "Prototyping", "User Research"],
    linkUrl: "#",
    year: "2024",
  },
  {
    title: "Inventory Management System",
    description:
      "Enterprise-grade inventory tracking system with barcode scanning, real-time stock updates, and reporting.",
    category: "Web App",
    imageUrl:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    tags: ["Laravel", "Vue.js", "PostgreSQL"],
    linkUrl: "#",
    year: "2023",
  },
  {
    title: "Travel Companion App",
    description:
      "Social travel app with itinerary planning, local recommendations, and travel journal features.",
    category: "Mobile App",
    imageUrl:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80",
    tags: ["Flutter", "Firebase", "Maps API"],
    linkUrl: "#",
    year: "2023",
  },
  {
    title: "Brand Identity System",
    description:
      "Complete brand identity including logo, typography, color palette, and usage guidelines for a tech startup.",
    category: "UI/UX Design",
    imageUrl:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    tags: ["Branding", "Illustrator", "Figma"],
    linkUrl: "#",
    year: "2023",
  },
];

export default async function ProjectPage() {
  const firestoreProjects = await getProjects();
  const projects =
    firestoreProjects.length > 0 ? firestoreProjects : sampleProjects;

  // Extract unique categories
  const categories = [
    "All",
    ...Array.from(new Set(projects.map((p) => p.category))),
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-28 pb-10 md:pt-32 md:pb-14 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 tracking-tight leading-tight">
            My Projects
          </h1>
          <p className="mt-4 text-base md:text-lg text-neutral-500 max-w-xl mx-auto leading-relaxed">
            A curated collection of my work — from mobile apps and web platforms
            to UI/UX designs. Each crafted with passion and attention to detail.
          </p>
        </div>
      </section>

      {/* Client wrapper for filter + grid */}
      <ProjectPageClient projects={projects} categories={categories} />
    </main>
  );
}
