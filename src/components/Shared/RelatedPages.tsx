import { Link } from "react-router-dom";
import { staticRoutes } from "../../seo/routes";

/** Small "Related pages" block. Link text comes from each page's existing title in the route registry. */
export const RelatedPages = ({ paths }: { paths: string[] }) => {
  const items = paths.filter((p) => staticRoutes[p]);
  if (!items.length) return null;
  return (
    <nav aria-labelledby="related-pages-heading" className="max-w-3xl mx-auto my-12 px-4">
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h2 id="related-pages-heading" className="text-xl font-bold text-green-950 mb-3">
          Related pages
        </h2>
        <ul className="space-y-2">
          {items.map((path) => (
            <li key={path}>
              <Link
                to={path}
                onClick={() => window.scrollTo(0, 0)}
                className="text-blue-900 underline font-semibold"
              >
                {staticRoutes[path].title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
