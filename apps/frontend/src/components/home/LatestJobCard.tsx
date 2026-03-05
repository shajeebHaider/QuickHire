import React from 'react';
import Label from '../base/Label';
import Typography from '../base/Typography';

interface LatestJobCardProps {
  logo: string;
  title: string;
  jobType?: 'Full-time' | 'Part-time' | 'Contract' | 'Internship' | 'Remote';
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
    <div className="max-w-145 max-h-37.25 bg-neutrals-0 p-8 flex gap-6">
      <div className="w-16 h-16">
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
        <div className="flex gap-2">
          <Label text={jobType || 'Unknown'} variant="success" />
          <div className="h-8.5 border-r border-neutrals-20 mx-2" />
          {categories?.map(category => (
            <Label key={category.name} text={category.name} variant={category.variant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestJobCard;
