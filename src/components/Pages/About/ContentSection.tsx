export const ContentSection = ({
  paragraph,
  image,
  index,
}: {
  paragraph: string;
  image: string;
  index: number;
}) => (
  <div
    className={`flex flex-col ${
      index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
    } items-center my-4 gap-10} p-4 my-4`}
  >
    <div className="md:w-1/2 flex flex-col gap-4">
      <p className="text-lg leading-relaxed">{paragraph}</p>
    </div>
    <div className={`md:w-1/2 mt-8 md:mt-0 ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"} relative`}>
      <img alt="Group of professionals smiling" className="relative rounded-lg w-1/1" src={image} />
    </div>
  </div>
);
