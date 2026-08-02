import { Link } from "react-router-dom";
import { legalDocuments } from "../../../data/legalContent";
import { commonStyles } from "../../Shared/CommonStyles";

export const LegalCenter = () => {
  return (
    <div className={commonStyles.containerStyles}>
      <div className="max-w-3xl mx-auto bg-white rounded-xl px-6 py-10 sm:p-12 mb-10">
        <h1 className="text-4xl font-bold text-green-900">Legal and Privacy Center</h1>
        <p className="mt-4 text-gray-800 leading-relaxed">
          These documents explain how Tempo handles privacy, communication, accessibility, and use of our
          website. We know legal language can feel complicated, so we have tried to keep things clear. If
          anything here raises a question, please reach out to our team any time.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {legalDocuments.map((doc) => (
          <Link
            key={doc.slug}
            to={`/legal/${doc.slug}`}
            onClick={() => window.scrollTo(0, 0)}
            className="block bg-white rounded-xl p-6 shadow-sm transition-shadow duration-200 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-700"
          >
            <h2 className="text-xl font-semibold text-green-900">{doc.title}</h2>
            <p className="mt-2 text-gray-800">{doc.shortDescription}</p>
            <p className="mt-4 text-sm text-gray-600">Last updated: {doc.lastUpdated}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};
