import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  FaUsers,
  FaPhone,
  FaCreditCard,
  FaUserMd,
  FaFileAlt,
  FaShieldAlt,
  FaCheckCircle,
  FaCalendarCheck,
  FaChartLine,
} from "react-icons/fa";

// Step interface
interface Step {
  number: number;
  icon: JSX.Element;
  description: string;
}

// Steps data
const steps: Step[] = [
  {
    number: 1,
    icon: <FaUsers className="text-orange-500" />,
    description: "Child receives a diagnosis of autism spectrum disorders.",
  },
  {
    number: 2,
    icon: <FaPhone className="text-orange-500" />,
    description: "Parent/caregiver contacts Tempo ABA to discuss their child’s needs.",
  },
  {
    number: 3,
    icon: <FaCreditCard className="text-orange-500" />,
    description:
      "The Tempo ABA intake coordinator will verify benefits with health insurance providers or explore alternative payment options.",
  },
  {
    number: 4,
    icon: <FaUserMd className="text-orange-500" />,
    description:
      "Once insurance coverage is confirmed, we will schedule an assessment with a licensed Behavior Analyst.",
  },
  {
    number: 5,
    icon: <FaFileAlt className="text-orange-500" />,
    description: "Receive comprehensive reports and recommendations for services if applicable.",
  },
  {
    number: 6,
    icon: <FaShieldAlt className="text-orange-500" />,
    description: "Tempo ABA submits initial authorization to the insurance company.",
  },
  {
    number: 7,
    icon: <FaCheckCircle className="text-orange-500" />,
    description: "Insurance approval.",
  },
  {
    number: 8,
    icon: <FaCalendarCheck className="text-orange-500" />,
    description: "Schedule ABA treatment with your Tempo ABA team.",
  },
  {
    number: 9,
    icon: <FaChartLine className="text-orange-500" />,
    description: "Ongoing monitoring and evaluation.",
  },
];

// Steps Timeline component
export const Steps = () => {
  return (
    <div className="flex-col md:flex-row justify-center align-middle pt-8">
      <h2 className="text-2xl text-center font-bold">Step-by-step process</h2>
      <VerticalTimeline layout="2-columns" className="mx-auto md:w-2/3 p-4">
        {steps.map((step, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(21 128 61)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid rgb(21 128 61)" }}
            iconStyle={{ background: "rgb(21 128 61)", color: "#fff" }}
            icon={step.icon}
          >
            <h3 className="vertical-timeline-element-title text-xl font-bold">
              Step {step.number}
            </h3>
            <p>{step.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};
