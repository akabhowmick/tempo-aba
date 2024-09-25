import { Typography } from '@mui/material';
import { content } from '../../data/content';

export const Hero = () => {
  return (
    <div className="relative bg-cover bg-center h-96" style={{ backgroundImage: `url('/path-to-image.jpg')` }}>
      <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex flex-col justify-center items-center">
        <Typography variant="h2" className="text-white font-bold">
          {content.hero.title}
        </Typography>
        <Typography variant="body1" className="text-white mt-4">
          {content.hero.description}
        </Typography>
      </div>
    </div>
  );
};

