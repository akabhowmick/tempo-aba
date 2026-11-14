export interface FaqItem {
  question: string;
  answer: string;
}

const liveFaqItems: FaqItem[] = [
  {
    question: "What is Applied Behavior Analysis (ABA)?",
    answer:
      "ABA is a scientific approach to understanding and improving behavior. It uses principles of learning theory to teach new skills and modify behaviors.",
  },
  {
    question: "How can ABA therapy help my child?",
    answer:
      "ABA therapy can help your child develop essential skills such as communication, social interactions, and daily living skills. It focuses on reinforcing positive behaviors and reducing challenging ones, promoting overall growth and independence.",
  },
  {
    question: "What does a typical ABA therapy session look like?",
    answer:
      "A typical session involves individualized activities designed to target specific goals, including play, structured tasks, and social skills. Sessions are led by a trained therapist and often include parent participation to ensure consistency at home.",
  },
  {
    question: "How is progress measured in ABA therapy?",
    answer:
      "Progress is measured through data collection and analysis. Therapists track specific behaviors and skills over time to assess improvement and adjust treatment plans as needed.",
  },
  {
    question: "How long does ABA therapy take to show results?",
    answer:
      "The timeline for seeing results varies by individual. Some may show progress in a few weeks, while others may take longer. Consistency and repetition are key to achieving meaningful change.",
  },
  {
    question: "Is ABA therapy covered by insurance in New York?",
    answer:
      "Yes, many insurance plans in New York cover ABA therapy, particularly for individuals with autism. It’s advisable to check with your insurance provider for specific coverage details and requirements.",
  },
  {
    question: "Who will be providing the therapy?",
    answer:
      "ABA therapy is typically provided by Board Certified Behavior Analysts (BCBAs) and Registered Behavior Technicians (RBTs), who are trained to implement individualized treatment plans based on best practices.",
  },
  {
    question: "Can parents participate in the therapy process?",
    answer:
      "Absolutely! Parental involvement is encouraged and essential for the success of ABA therapy. Training and support for parents help reinforce skills and strategies at home.",
  },
  {
    question: "What should I do if I want to start ABA therapy for my child?",
    answer:
      "To begin ABA therapy, you can contact our agency for an initial consultation. We’ll discuss your child’s needs, conduct an assessment, and develop a personalized treatment plan.",
  },
  {
    question: "Are there resources for families to learn more about ABA?",
    answer:
      "Yes, we provide various resources, including informational materials, workshops, and parent training for families to better understand ABA and how to support their child’s development.",
  },
];

// Questions Tempo still needs to answer. An item whose answer starts with "TODO" is never
// shown on the FAQ page or emitted in the FAQPage JSON-LD (see faqItems below).
const needsAnswer = "TODO(answer needed from Tempo)";
export const pendingFaqItems: FaqItem[] = [
  "Does Medicaid cover ABA in New York?",
  "What happens at the first assessment?",
  "How many hours per week is typical?",
  "What ages do you serve?",
  "How long until services can start?",
  "Which areas do you serve?",
  "Do you offer telehealth?",
  "What happens on the first intake call?",
].map((question) => ({ question, answer: needsAnswer }));

/** Published FAQ: used by both the visible page and the FAQPage JSON-LD, so they stay in sync. */
export const faqItems: FaqItem[] = [...liveFaqItems, ...pendingFaqItems].filter(
  (item) => !item.answer.trim().startsWith("TODO"),
);
