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
    <div className="group flex items-center sm:items-start gap-8 sm:gap-0 sm:flex-col sm:max-w-68 sm:max-h-53.5 max-h-20.75 max-w-80.75 border border-neutrals-20 sm:p-8 p-4 transition-colors duration-200 hover:bg-primary hover:border-primary mx-auto">
      <div className="text-primary group-hover:text-white transition-colors duration-200">
        {icon}
      </div>
      <div>
        <Typography
          variant="heading"
          size="medium"
          component="h3"
          className="sm:text-2xl! text-xl! sm:mt-4 mb-0 sm:mb-2 group-hover:text-white! transition-colors duration-200"
        >
          {title}
        </Typography>
        <div className="flex items-center sm:gap-4 gap-14 max-w-49.75">
          <Typography
            variant="text"
            size="medium"
            className="sm:text-lg! flex-1 text-neutrals-60! group-hover:text-white! transition-colors duration-200"
          >
            {jobCount} jobs available{' '}
          </Typography>
          <a
            href={link}
            className="text-black group-hover:text-white transition-colors duration-200"
          >
            <ArrowIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
