import { Link } from "react-router-dom";
import { commonStyles } from "../Shared/CommonStyles";

export const NotFoundPage = () => (
  <div className={commonStyles.containerStyles}>
    <div className="max-w-3xl mx-auto bg-white rounded-xl px-6 py-12 sm:p-12 text-center">
      <p className="text-green-800 font-semibold">404</p>
      <h1 className="mt-2 text-4xl font-bold text-green-900">Page not found</h1>
      <p className="mt-4 text-gray-800">
        Sorry, we couldn't find the page you were looking for. It may have moved, or the address
        may be mistyped.
      </p>
      <Link
        to="/"
        className="mt-8 inline-block rounded-md bg-green-800 px-6 py-3 font-semibold text-white hover:bg-green-700"
      >
        Back to the homepage
      </Link>
    </div>
  </div>
);
