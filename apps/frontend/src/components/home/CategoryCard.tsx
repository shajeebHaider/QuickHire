import React from 'react';
import ArrowIcon from '../../assets/icons/ArrowIcon';
import Typography from '../base/Typography';

interface CategoryCardProps {
  icon: React.ReactNode;
  title: string;
  jobCount: number;
  link: string;
}

const CategoryCard = ({ icon, title, jobCount, link }: CategoryCardProps) => {
  return (
    <div className="group max-w-68.6 max-h-53.5 border border-neutrals-20 p-8 transition-colors duration-200 hover:bg-primary hover:border-primary">
      <div className="text-primary group-hover:text-white transition-colors duration-200">
        {icon}
      </div>
      <Typography
        variant="heading"
        size="medium"
        component="h3"
        className="text-2xl! mt-4 mb-2 group-hover:text-white! transition-colors duration-200"
      >
        {title}
      </Typography>
      <Typography
        variant="text"
        size="small"
        className="text-lg! text-neutrals-60! flex items-center gap-4 group-hover:text-white! transition-colors duration-200"
      >
        {jobCount} jobs available{' '}
        <a href={link} className="text-black group-hover:text-white transition-colors duration-200">
          <ArrowIcon />
        </a>
      </Typography>
    </div>
  );
};

export default CategoryCard;
