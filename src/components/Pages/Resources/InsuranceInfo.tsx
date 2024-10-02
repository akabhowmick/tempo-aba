export const InsurancePage: React.FC = () => {
  return (
    <div className="bg-white text-gray-800 font-roboto">
      <div className="max-w-4xl mx-auto p-6">
        {/* Icon and description */}
        <div className="text-center mb-8">
          <div className="text-orange-500 text-3xl mb-4">
            <i className="fas fa-crown" />
          </div>
          <p className="text-lg">
            Tempo ABA accepts most major commercial health plans with both in- and out-of-network benefits.
            In some states we are also able to accept Medicaid. Insurance plans can vary in benefits and coverage for the{" "}
            <span className="text-orange-500 font-bold">Applied Behavior Analysis (ABA)</span> therapy services that
            Tempo ABA provides.
          </p>
        </div>

        {/* Image and description */}
        <div className="flex flex-col md:flex-row items-center">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <img
              alt="Family sitting together and smiling"
              className="rounded-full mx-auto"
              src="https://storage.googleapis.com/a1aa/image/IxCO0qdGTwogLx2f4ZE2myly422NQfrYEnLQUsUav4teoMFnA.jpg"
              width="300"
              height="200"
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 pl-6 mt-6 md:mt-0">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Here to Help</h2>
            <p className="text-lg">
              At Tempo ABA, our teams are trained to help you understand key health insurance terms and plan details.
              We’re happy to help check your benefits and coverage details, so you’ll know which services your plan will pay for and
              how much a course of therapy or a session will cost.
            </p>
            <p className="text-lg mt-4">
              We can also work with you to create a payment plan for cost-sharing that works for your family.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

