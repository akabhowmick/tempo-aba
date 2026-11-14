// Single source of truth for per-route SEO metadata and the sitemap route list.
// Keep this file free of asset imports: vite.config.ts imports it at build time.
import { legalDocuments } from "../data/legalContent";

export const SITE_URL = "https://tempoaba.com";
export const SITE_NAME = "TEMPO ABA";
export const DEFAULT_OG_IMAGE = "/og-image.jpg";

export interface RouteMeta {
  title: string;
  description: string;
  /** Excluded from sitemap.xml when true (also rendered with noindex). */
  noindex?: boolean;
  /** Short label for breadcrumbs when the title is too long. Defaults to the title. */
  breadcrumb?: string;
  /** ISO date (YYYY-MM-DD) of the last real content change. Emitted in sitemap.xml only when set. */
  lastmod?: string;
}

// Services (keys match servicesData in src/data/content.ts)
export const serviceSlugs = [
  "home",
  "community",
  "school",
  "parentTraining",
  "transition",
  "behavior",
] as const;

// Members (first name, lowercase, matches teamBios in src/data/content.ts)
export const memberSlugs = ["cynthia", "inae", "cesia", "jordan"] as const;

const serviceMeta: Record<string, RouteMeta> = {
  home: {
    title: "Home Based ABA Therapy",
    description:
      "In-home ABA therapy tailored to your child, with parent training so new skills carry over into everyday routines. Serving families in New York.",
  },
  community: {
    title: "Community Based ABA Therapy",
    description:
      "ABA support for grocery trips, playgrounds, and parks. We build community outings into your child's program to make real-world skills stick.",
  },
  school: {
    title: "In-School ABA Consultation",
    description:
      "BCBA-led school consultation: classroom set-up, educator training, assessments, IEP support, and behavior intervention for inclusive classrooms.",
  },
  parentTraining: {
    title: "ABA Parent Training and Workshops",
    description:
      "ABA parent training that helps skills generalize to natural settings, reduces stress, and makes daily life easier for the whole family.",
  },
  transition: {
    title: "Transition to Adulthood Services",
    description:
      "ABA programs that build daily living, social, communication, self-advocacy, and job skills to prepare for independent adult life.",
  },
  behavior: {
    title: "Behavioral Consultation",
    description:
      "Collaborative behavioral consultation that gives educators the tools to create inclusive, supportive learning environments.",
  },
};

const memberMeta: Record<string, RouteMeta> = {
  cynthia: {
    title: "Cynthia Martinez, Co-Founder & Director",
    description:
      "Meet Cynthia Martinez, BCBA and LBA, Co-Founder and Director of TEMPO ABA, with over two decades of experience serving children with autism.",
  },
  inae: {
    title: "Inae Kim, Co-Founder & Program Coordinator",
    description:
      "Meet Inae Kim, Co-Founder and Program Coordinator of TEMPO ABA, with 20+ years of experience in special education and ABA.",
  },
  cesia: {
    title: "Cesia Maldonado, Office Manager",
    description:
      "Meet Cesia Maldonado, Office Manager at TEMPO ABA and often the first person families connect with when starting ABA services.",
  },
  jordan: {
    title: "Jordan Freeman, Staff & Parent Trainer",
    description:
      "Meet Jordan Freeman, BCBA and LBA, Staff and Parent Trainer at TEMPO ABA, with 20+ years in applied behavior analysis.",
  },
};

export const staticRoutes: Record<string, RouteMeta> = {
  "/": {
    title: "ABA Therapy for Children and Families in New York",
    description:
      "TEMPO ABA delivers personalized ABA therapy for children with autism. BCBA-led home, school, and community-based services built around your family.",
  },
  "/about/abaandautism": {
    title: "About ABA and Autism",
    description:
      "Learn what Applied Behavior Analysis (ABA) is, how it supports children with autism, and what to expect from ABA therapy.",
  },
  "/about/methods": {
    title: "Our Approach and Process",
    description:
      "How ABA therapy works at TEMPO ABA: from first contact and assessment to a personalized treatment plan and ongoing progress monitoring.",
  },
  "/about/mission": {
    title: "Our Mission and Guiding Principles",
    description:
      "Our mission is exceptional, individualized ABA therapy grounded in collaboration, comprehensive assessment, and research-based decisions.",
  },
  "/about/members": {
    title: "Who We Are: Our Team",
    description:
      "Meet the BCBAs and staff behind TEMPO ABA, founded by Cynthia Martinez and Inae Kim to support children with autism and their families.",
  },
  "/resources/faq": {
    title: "ABA Therapy FAQ",
    description:
      "Answers to common questions about ABA therapy: what it is, how progress is measured, insurance coverage in New York, and how to get started.",
  },
  "/resources/insurance": {
    title: "Insurance and ABA Coverage",
    description:
      "Information on insurance coverage for ABA therapy and how TEMPO ABA helps families with verification and next steps.",
  },
  "/resources/aba": {
    title: "Helpful ABA Resources for Parents",
    description:
      "Free parent resources and trusted links to help families learn more about ABA therapy and autism support.",
  },
  "/contact": {
    title: "Contact Us",
    description:
      "Get in touch with TEMPO ABA about ABA services for your child. A team member will reply within one business day.",
  },
  "/legal": {
    title: "Legal and Privacy Center",
    description:
      "Privacy policy, notice of privacy practices, terms of use, accessibility, and other legal information for TEMPO ABA.",
  },
};

// Placeholder page ("Coming Soon"): reachable but not indexed
staticRoutes["/services/center"] = {
  title: "Center Based ABA Therapy",
  description: "Center-based ABA therapy at TEMPO ABA is coming soon.",
  noindex: true,
};

for (const slug of serviceSlugs) staticRoutes[`/services/${slug}`] = serviceMeta[slug];
for (const slug of memberSlugs) staticRoutes[`/about/members/${slug}`] = memberMeta[slug];
for (const doc of legalDocuments) {
  staticRoutes[`/legal/${doc.slug}`] = {
    title: doc.title,
    description: doc.shortDescription,
  };
}

// Short breadcrumb labels for pages whose titles are long
const breadcrumbLabels: Record<string, string> = {
  "/about/abaandautism": "ABA and Autism",
  "/about/methods": "Approach and Process",
  "/about/mission": "Our Mission",
  "/about/members": "Who We Are",
  "/resources/faq": "FAQ",
  "/resources/insurance": "Insurance",
  "/resources/aba": "ABA Resources",
  "/services/home": "Home Based ABA",
  "/services/community": "Community Based ABA",
  "/services/school": "In-School Consultation",
  "/services/parentTraining": "Parent Training and Workshops",
  "/services/transition": "Transition to Adulthood",
  "/services/behavior": "Behavioral Consultation",
  "/legal": "Legal and Privacy",
};
for (const [path, label] of Object.entries(breadcrumbLabels)) {
  if (staticRoutes[path]) staticRoutes[path].breadcrumb = label;
}
for (const slug of memberSlugs) {
  const name = memberMeta[slug].title.split(",")[0]; // "Cynthia Martinez"
  staticRoutes[`/about/members/${slug}`].breadcrumb = name;
}

/** Breadcrumb trail for a canonical path, starting at Home. Empty for the homepage. */
export const breadcrumbTrail = (path: string): { name: string; path: string }[] => {
  if (path === "/") return [];
  const trail = [{ name: "Home", path: "/" }];
  // Members and legal documents sit under a real parent page; other sections have no index page
  const parent = path.startsWith("/about/members/")
    ? "/about/members"
    : path.startsWith("/legal/")
      ? "/legal"
      : undefined;
  if (parent && staticRoutes[parent]) {
    trail.push({ name: staticRoutes[parent].breadcrumb ?? staticRoutes[parent].title, path: parent });
  }
  const meta = staticRoutes[path];
  trail.push({ name: meta?.breadcrumb ?? meta?.title ?? path, path });
  return trail;
};

/** All indexable routes, used for sitemap.xml. */
export const sitemapEntries = (): { path: string; lastmod?: string }[] =>
  Object.entries(staticRoutes)
    .filter(([, meta]) => !meta.noindex)
    .map(([path, meta]) => ({ path, lastmod: meta.lastmod }));

export const normalizePath = (pathname: string): string =>
  pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;

/**
 * Resolve metadata for a URL path. Returns the canonical path too: member URLs exist in
 * lowercase and first-name-as-written forms (/Cynthia), and both canonicalize to lowercase.
 */
export const resolveRoute = (pathname: string): { path: string; meta: RouteMeta } | undefined => {
  const path = normalizePath(pathname);
  if (staticRoutes[path]) return { path, meta: staticRoutes[path] };
  const lower = path.toLowerCase();
  return staticRoutes[lower] ? { path: lower, meta: staticRoutes[lower] } : undefined;
};
