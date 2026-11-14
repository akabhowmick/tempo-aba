export const ContentSection = ({
  paragraph,
  image,
  index,
  alt = "",
}: {
  paragraph: string;
  image: string;
  index: number;
  /** Describe the image; leave empty when it is purely decorative. */
  alt?: string;
}) => (
  <div
    className={`flex flex-col p-4 my-8 ${
      index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
    } items-center my-4 gap-10}`}
  >
    <div className="w-full md:w-1/2 flex flex-col gap-4">
      <p className="text-lg leading-relaxed">{paragraph}</p>
    </div>
    <div className={`w-full md:w-1/2 mt-8 md:mt-0 ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"} relative`}>
      <div className="relative rounded-lg overflow-hidden aspect-[3/2]">
        <img
          alt={alt}
          loading="lazy"
          decoding="async"
          width={1200}
          height={800}
          className="absolute inset-0 w-full h-full object-cover"
          src={image}
        />
      </div>
    </div>
  </div>
);
