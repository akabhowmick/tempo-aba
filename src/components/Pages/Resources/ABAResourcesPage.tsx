import { abaResources } from "../../../data/content";

export const ABAResourcesPage = () => {
  return (
    <main className="bg-white text-gray-800 font-open-sans">
      {/* Hero Section */}
      <section className="bg-green-100 py-12">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold text-green-600">ABA Therapy Services</h1>
            <p className="mt-4 text-lg text-gray-700">
              ABA therapy brings about meaningful change for children on the autism spectrum.
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              alt="Therapist with child"
              className="rounded-lg shadow-md"
              src="https://storage.googleapis.com/a1aa/image/CeMjxniBUH25QSgfLoEoPmNDo7Als1oHqqVoNXDVwRBzimiTA.jpg"
              width="600"
              height="400"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="text-center mt-12 mx-5">
        <h2 className="text-3xl font-semibold text-gray-800">
          Improve Functional Skills and Drive Positive Change
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Applied Behavior Analysis (ABA) is a systematic therapy for autism and is designed to
          offer tailored programs. ABA, like other therapies, clinically focused and can be used to
          foster a range of skills. Our therapy is rooted in the science of learning and behavior
          and has been shown to help children increase useful behaviors and learn new skills.
        </p>
      </section>

      {/* Resources */}
      <section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 mx-4">
        {abaResources.map((resource) => (
          <div key={resource.id} className="flex flex-col items-center text-center">
            <img
              alt={resource.imgAlt}
              className="rounded-lg shadow-md"
              src={resource.imgSrc}
              width="600"
              height="400"
            />
            <h3 className="mt-6 text-2xl font-semibold text-gray-800">{resource.title}</h3>
            <p className="mt-4 text-lg text-gray-600">{resource.description}</p>
          </div>
        ))}
      </section>

      {/* Call to Action */}
      <section className="mt-12 bg-green-100 py-12 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Don't See What You're Looking For?</h2>
        <p className="mt-4 text-lg text-gray-600">
          We work with all kinds of behaviors. You can connect with us to get a personalized program
          for your child. Reach out to see how we can help!
        </p>
        <a
          className="mt-6 inline-block bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600"
          href="#"
        >
          Get Started
        </a>
      </section>

      <section className="mt-12 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Get Started Today</h2>
        <p className="mt-4 text-lg text-gray-600">
          The conversation starts here. We listen and while we talk, think about things you and your
          child can do together. Speak with us today.
        </p>
        <a
          className="mt-6 inline-block bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600"
          href="#"
        >
          Get Started
        </a>
      </section>
    </main>
  );
};
