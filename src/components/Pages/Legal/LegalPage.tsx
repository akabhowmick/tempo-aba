import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { getLegalDocument } from "../../../data/legalContent";
import { commonStyles } from "../../Shared/CommonStyles";

export const LegalPage = () => {
  const { policy } = useParams<{ policy: string }>();
  const legalDoc = getLegalDocument(policy);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [policy]);

  if (!legalDoc) {
    return <Navigate to="/legal" replace />;
  }

  return (
    <div className={commonStyles.containerStyles}>
      <div className="max-w-3xl mx-auto bg-white rounded-xl px-6 py-10 sm:p-12">
        <h1 className="text-4xl font-bold text-green-900">{legalDoc.title}</h1>
        <p className="mt-2 text-sm text-gray-600">
          Effective date: {legalDoc.effectiveDate} &nbsp;|&nbsp; Last updated: {legalDoc.lastUpdated}
        </p>

        <div className="mt-8 space-y-6">
          {legalDoc.sections.map((section, index) => (
            <div key={index}>
              {section.heading && (
                <h2 className="text-2xl font-semibold text-green-900 mb-2">{section.heading}</h2>
              )}
              {section.paragraphs?.map((paragraph, pIndex) => (
                <p key={pIndex} className="text-gray-800 mb-3 leading-relaxed">
                  {paragraph}
                </p>
              ))}
              {section.bullets && (
                <ul className="list-disc pl-6 space-y-1 text-gray-800">
                  {section.bullets.map((bullet, bIndex) => (
                    <li key={bIndex}>{bullet}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-gray-200">
          <Link
            to="/legal"
            className="font-semibold text-green-800 hover:text-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
            onClick={() => window.scrollTo(0, 0)}
          >
            ← Back to Legal and Privacy Center
          </Link>
        </div>
      </div>
    </div>
  );
};
