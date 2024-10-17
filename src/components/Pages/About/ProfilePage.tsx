import { useParams } from "react-router-dom";
import { teamBios } from "../../../data/content";

export const ProfilePage = () => {
  const { member } = useParams<{ member: string }>(); // Extract the name from the URL
  const profile = teamBios.find(
    (bio) => bio.name.split(" ")[0].toLowerCase() === member?.toLowerCase()
  );

  if (!profile) {
    return <div className="text-center text-red-500">Profile not found.</div>;
  }

  return (
    <div className="font-roboto text-gray-800 py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <nav className="mb-8">
          <a className="text-blue-600 hover:underline" href="/">
            Home
          </a>
          <span className="mx-2 text-gray-500"> &gt; </span>
          <a className="text-blue-600 hover:underline" href="/about/members">
            Who we are
          </a>
          <span className="mx-2 text-gray-500"> &gt; </span>
          <span className="text-gray-800">{profile.name}</span>
        </nav>

        {/* Profile Content */}
        <div className="flex flex-col md:flex-row items-start">
          {/* Left Column: Image, Name, and Title */}
          <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8 w-full md:w-1/3 text-center md:text-left">
            {/* Image */}
            <img
              alt={`Portrait of ${profile.name}`}
              className="rounded-full w-48 h-48 object-cover mx-auto md:mx-0"
              src={profile.imageUrl}
            />

            {/* Name and Title under the image */}
            <div className="mt-4">
              <h1 className="text-2xl font-bold text-gray-900">{profile.name}</h1>
              <h2 className="text-xl text-gray-600">{profile.title}</h2>
            </div>
          </div>

          {/* Right Column: Bio */}
          <div className="w-full md:w-2/3">
            {profile.bio.map((paragraph) => {
              return (
                <p className="text-gray-800 whitespace-pre-line mb-4" key={paragraph}>
                  {paragraph}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
