export const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div className="text-center mb-8">
      <div className="bg-green-200 inline-block px-4 py-2 rounded">
        <h1 className="text-4xl font-bold text-green-950">{title}</h1>
      </div>
    </div>
  );
};
