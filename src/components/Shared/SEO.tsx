import { Head } from "vite-react-ssg";
import { useLocation } from "react-router-dom";
import { JsonLd } from "./JsonLd";
import { businessGraph } from "../../seo/structuredData";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL, normalizePath, resolveRoute } from "../../seo/routes";

interface SEOProps {
  /** Page title without the site name. */
  title: string;
  description: string;
  /** Canonical path, e.g. "/about/mission". */
  path: string;
  /** Path or absolute URL of the share image. */
  image?: string;
  type?: "website" | "article" | "profile";
  noindex?: boolean;
}

const abs = (urlOrPath: string) => (urlOrPath.startsWith("http") ? urlOrPath : SITE_URL + urlOrPath);

/** Sets title, description, canonical, Open Graph and Twitter tags for one page. */
export const SEO = ({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  type = "website",
  noindex = false,
}: SEOProps) => {
  const fullTitle = path === "/" ? `${SITE_NAME} | ${title}` : `${title} | ${SITE_NAME}`;
  const url = abs(path);
  const imageUrl = abs(image);

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex" />}

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Head>
  );
};

/** Picks metadata for the current URL from the route registry. Rendered once in the layout. */
export const RouteSEO = () => {
  const { pathname } = useLocation();
  const resolved = resolveRoute(pathname);

  if (!resolved) {
    return (
      <SEO
        title="Page Not Found"
        description="The page you were looking for could not be found."
        path={normalizePath(pathname)}
        noindex
      />
    );
  }
  const { path, meta } = resolved;
  return (
    <>
      {path === "/" && <JsonLd data={businessGraph()} />}
      <SEO
        title={meta.title}
        description={meta.description}
        path={path}
        type={path.startsWith("/about/members/") ? "profile" : "website"}
        noindex={meta.noindex}
      />
    </>
  );
};
