import { useParams } from "react-router-dom";

const servicesData = {
  preschool: {
    title: "Preschool Learners",
    description: `For our preschool learners, we offer home-based early learner programs 
    designed to prepare toddlers and young children for their future. Our trained therapists 
    work closely with each child, creating individualized goals that encompass language 
    development, social skills training, and effective behavior management strategies. In 
    addition, our social skills groups provide opportunities for children to generalize their 
    skills in a supportive and interactive setting. Throughout the entire process, our Board 
    Certified Behavior Analysts (BCBAs) provide ongoing supervision to ensure continuous progress 
    and monitoring.`,
    image:
      "https://storage.googleapis.com/a1aa/image/c5g80pee4EnuwEIqiyQHWfxrrxf3eooYZme80yiDLa4IjAH5E.jpg",
  },
  school: {
    title: "School-aged Learners",
    description: `Our school-aged learner programs cater to children from Kindergarten to High School. 
    These in-home ABA therapy programs are meticulously customized to address the specific needs of 
    each learner. Assessment and program development are carried out by our BCBAs, ensuring a 
    comprehensive approach. The implementation of the program is handled by trained and experienced 
    Behavior Technicians and Registered Behavior Technicians (RBTs).`,
    image:
      "https://storage.googleapis.com/a1aa/image/c5g80pee4EnuwEIqiyQHWfxrrxf3eooYZme80yiDLa4IjAH5E.jpg",
  },
  adult: {
    title: "Adult Learners",
    description: `For adult learners aged 18 and over, our in-home ABA therapy programs are individually crafted 
    to meet their specific needs. We conduct thorough screenings using assessment tools that align with their areas 
    of concern, allowing us to create comprehensive and personalized plans.`,
    image:
      "https://storage.googleapis.com/a1aa/image/gpkBVlMvuKJ1CFjE3N5Uj9UGlg2MPunxosEJjVtINnajAH5E.jpg",
  },
};

// Service Component (Dynamic based on learner type)
export const ServicePage = () => {
  const { learnerType } = useParams<{ learnerType: string }>();
  const service = servicesData[learnerType as keyof typeof servicesData];

  if (!service) {
    return <p className="text-center text-xl">Service not found</p>;
  }

  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
        <p className="text-lg">{service.description}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <img alt={`Image for ${service.title}`} className="w-full h-auto" src={service.image} />
      </div>
    </div>
  );
};
