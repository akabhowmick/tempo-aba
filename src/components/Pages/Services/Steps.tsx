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

interface Step {
  number: number;
  icon: JSX.Element;
  description: string;
}

const steps: Step[] = [
  {
    number: 1,
    icon: <FaUsers className="text-blue-600" />,
    description: "Child receives a diagnosis of Autism Spectrum Disorders.",
  },
  {
    number: 2,
    icon: <FaPhone className="text-orange-500" />,
    description: "Parent/caregiver contacts Tempo ABA to discuss their child’s needs.",
  },
  {
    number: 3,
    icon: <FaCreditCard className="text-blue-600" />,
    description:
      "The Tempo ABA intake coordinator will verify benefits with health insurance providers or explore alternative payment options.",
  },
  {
    number: 4,
    icon: <FaUserMd className="text-green-500" />,
    description:
      "Once insurance coverage is confirmed, we will schedule an assessment with a licensed Behavior Analyst.",
  },
  {
    number: 5,
    icon: <FaFileAlt className="text-blue-600" />,
    description: "Receive comprehensive reports and recommendations for services if applicable.",
  },
  {
    number: 6,
    icon: <FaShieldAlt className="text-orange-500" />,
    description: "Tempo ABA submits initial authorization to the insurance company.",
  },
  {
    number: 7,
    icon: <FaCheckCircle className="text-blue-600" />,
    description: "Insurance approval.",
  },
  {
    number: 8,
    icon: <FaCalendarCheck className="text-green-500" />,
    description: "Schedule ABA treatment with your Tempo ABA team.",
  },
  {
    number: 9,
    icon: <FaChartLine className="text-blue-600" />,
    description: "Ongoing monitoring and evaluation.",
  },
];

export const Steps = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative w-full max-w-4xl p-4">
        <h1 className="text-center text-black font-bold text-xl mb-12">
          STEPS FOR DIAGNOSIS TO TREATMENT
        </h1>
        <div className="relative">
          {/* Vertical timeline */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-5 bg-green-800"></div>

          {/* Steps */}
          <div className="space-y-12 mx-auto">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex items-center justify-between ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}
              >
                {/* Left or right content depending on index */}
                <StepCard step={step} />

                {/* Vertical line */}
                <div className="w-5 bg-green-800 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const StepCard = ({ step }: { step: Step }) => (
  <div className="flex flex-col items-center bg-white justify-center w-60 h-60 p-2 border rounded-lg shadow-md space-y-2">
    <div className="text-3xl font-bold">{step.number}</div>
    <div className="text-4xl rounded-full">{step.icon}</div>
    <p className="text-center font-semibold">{step.description}</p>
  </div>
);
