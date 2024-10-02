import { commonStyles } from "../Shared/CommonStyles";

export const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div className="text-center mb-8">
      <div className="bg-green-200 inline-block px-4 py-2 rounded">
        <h1 className="text-4xl font-bold text-green-950">{title}</h1>
      </div>
    </div>
  );
};

export const PageTitle = ({
  title,
  content,
  imageUrl,
}: {
  title: string;
  content?: string;
  imageUrl: string;
}) => {
  return (
    <section
      className={`${commonStyles.section} relative`}
      // style={{ height: "calc(100vh - 64px)" }}
    >
      <div
        className={`absolute inset-0 z-10 flex flex-col justify-end items-center bg-black bg-opacity-50 text-white p-4`}
      >
        <div className="text-center">
          <h1 className={`${commonStyles.heading} text-4xl md:text-6xl`}>{title}</h1>
          <p className={`${commonStyles.paragraph} mt-4`}>{content}</p>
        </div>
      </div>

      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      <div className="relative h-full w-full" />
    </section>
  );
};
