import React from 'react';
import Label from '../base/Label';
import Typography from '../base/Typography';

interface LatestJobCardProps {
  logo: string;
  title: string;
  jobType?: 'Fulltime' | 'Parttime' | 'Contract' | 'Internship' | 'Remote';
  company?: string;
  location: string;
  categories?: {
    variant: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
    name: string;
  }[];
  link?: string;
}

const LatestJobCard = ({
  logo,
  title,
  jobType,
  company,
  location,
  categories,
  link
}: LatestJobCardProps) => {
  return (
    <div className="md:max-w-145 max-w-85.75 bg-neutrals-0 md:p-8 p-4 flex md:flex-row flex-col md:gap-6">
      <div className="sm:w-16 sm:h-16 w-12 h-12 shrink-0">
        <img src={logo} alt="Logo" />
      </div>

      <div>
        <a href={link}>
          <Typography variant="heading" size="small" className="text-lg!" component="h3">
            {title}
          </Typography>
        </a>

        <Typography variant="text" size="medium" className="text-neutrals-60! mb-2!" component="p">
          {company} {location}
        </Typography>

        <div className="flex gap-2 flex-wrap">
          <Label text={jobType || 'Unknown'} variant="success" />
          <div className="h-8 border-r border-neutrals-20 mx-2" />

          {categories?.map(category => (
            <Label key={category.name} text={category.name} variant={category.variant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestJobCard;
