import React, { useState } from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { SubPageTitle } from "../../Shared/CommonSections";
import { pageBanners } from "../../../data/content";
import { faqItems } from "../../../data/faqItems";
import { ReviewedBy } from "../../Shared/ReviewedBy";
import { RelatedPages } from "../../Shared/RelatedPages";
import { JsonLd } from "../../Shared/JsonLd";
import { faqPageSchema } from "../../../seo/structuredData";

const FaqPage: React.FC = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <JsonLd data={faqPageSchema(faqItems)} />
      <section className="flex-1 py-12" role="region" aria-label="Frequently Asked Questions">
        <div className="container mx-auto px-8">
          <SubPageTitle pageBannerInfo={pageBanners.faq} />
          <div className="space-y-4 py-8">
            {faqItems.map((item, index) => (
              <Accordion
                key={index}
                slotProps={{ heading: { component: "h2" } }}
                expanded={expanded === `panel${index}`}
                onChange={handleChange(`panel${index}`)}
              >
                <AccordionSummary
                  expandIcon={<ArrowDownwardIcon />}
                  aria-controls={`panel${index}bh-content`}
                  id={`panel${index}bh-header`}
                  className="border-none shadow-none rounded-md"
                >
                  <Typography className="semibold">
                    {index + 1}. {item.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className="border-none shadow-none rounded-md">
                  <Typography>{item.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
          <ReviewedBy name="TODO(reviewer name)" date="TODO(review date)" />
        </div>
      </section>
      <RelatedPages paths={["/resources/insurance", "/about/methods", "/contact"]} />
    </div>
  );
};


export default FaqPage;
