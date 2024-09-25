import React, { useState } from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const FaqPage: React.FC = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 bg-green-200 py-12">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-center">Frequently Asked Questions</h1>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <Accordion
                key={index}
                expanded={expanded === `panel${index}`}
                onChange={handleChange(`panel${index}`)}
              >
                <AccordionSummary
                  expandIcon={<ArrowDownwardIcon />}
                  aria-controls={`panel${index}bh-content`}
                  id={`panel${index}bh-header`}
                >
                  <Typography>{item.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{item.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

const faqItems = [
  {
    question: "How do I enroll in services?",
    answer: "You can enroll by contacting us via email or phone.",
  },
  {
    question: "How soon can I begin services?",
    answer: "Services can begin as soon as we complete an assessment.",
  },
  {
    question: "Who will be providing the direct service?",
    answer: "Our certified behavior analysts will provide the service.",
  },
  // Add more FAQs here
];

export default FaqPage;
