// JSON-LD builders. Only facts already published on the site are used.
// Fields still set to "TODO: ..." are dropped from the output (see clean()), so
// placeholders never reach crawlers. Fill them in and they appear automatically.
import { SITE_NAME, SITE_URL } from "./routes";

export const TODO = (what: string) => `TODO: ${what}`;
const isTodo = (v: unknown) => typeof v === "string" && v.startsWith("TODO:");

type Json = string | number | boolean | null | Json[] | { [k: string]: Json };

/** Recursively drops TODO placeholders and any object/array left empty. */
const clean = (value: Json): Json | undefined => {
  if (isTodo(value)) return undefined;
  if (Array.isArray(value)) {
    const items = value.map(clean).filter((v) => v !== undefined) as Json[];
    return items.length ? items : undefined;
  }
  if (value && typeof value === "object") {
    const out: { [k: string]: Json } = {};
    for (const [k, v] of Object.entries(value)) {
      const c = clean(v);
      if (c !== undefined) out[k] = c;
    }
    // An object with only @type left carries no information (@id references do)
    const meaningful = Object.keys(out).filter((k) => k !== "@type");
    return meaningful.length ? out : undefined;
  }
  return value;
};

export const ORG_ID = `${SITE_URL}/#organization`;
export const US_LOCATION_ID = `${SITE_URL}/#us-location`;

// Instagram and TikTok are live. The TODO entries are dropped from output until filled in.
const sameAs = [
  "https://www.instagram.com/tempoaba",
  "https://www.tiktok.com/@tempo.aba",
  TODO("Google Business Profile URL"),
  TODO("LinkedIn company page URL"),
  TODO("ABA provider directory profile URL (1)"),
  TODO("ABA provider directory profile URL (2)"),
];

const organization = {
  "@type": "Organization",
  "@id": ORG_ID,
  name: SITE_NAME,
  legalName: "TEMPO Applied Behavior Analysis, PLLC",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  telephone: "+1-929-810-8648",
  sameAs,
  founder: [
    { "@type": "Person", name: "Cynthia Martinez" },
    { "@type": "Person", name: "Inae Kim" },
  ],
};

// US (New York) location. Street address, city, ZIP and hours are not on the site yet:
// they stay TODO (and are omitted from output) until Tempo provides them. See todo.txt.
export const usLocation = {
  "@type": ["MedicalBusiness", "LocalBusiness"],
  "@id": US_LOCATION_ID,
  name: SITE_NAME,
  url: SITE_URL,
  image: `${SITE_URL}/og-image.jpg`,
  telephone: "+1-929-810-8648",
  parentOrganization: { "@id": ORG_ID },
  areaServed: { "@type": "AdministrativeArea", name: "New York" },
  address: {
    "@type": "PostalAddress",
    streetAddress: TODO("street address"),
    addressLocality: TODO("city"),
    addressRegion: "NY",
    postalCode: TODO("ZIP code"),
    addressCountry: "US",
  },
  openingHours: TODO("opening hours, e.g. Mo-Fr 09:00-17:00"),
  priceRange: TODO("price range, if desired"),
};

export const businessGraph = () => {
  const graph = [organization, usLocation]
    .map((node) => clean(node as unknown as Json) as { address?: { streetAddress?: string } } | undefined)
    .filter(Boolean)
    .map((node) => {
      // A partial address (just region and country) is worse than none: drop it until a
      // real street address is filled in. The TODO fields stay in source above.
      if (node && node.address && !node.address.streetAddress) delete node.address;
      return node;
    });
  return { "@context": "https://schema.org", "@graph": graph };
};

export const faqPageSchema = (items: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
});
