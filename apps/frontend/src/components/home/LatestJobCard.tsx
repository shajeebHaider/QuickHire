import React from 'react';
import Label from '../base/Label';

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
          <h3 className="text-2xl font-semibold text-black">{title}</h3>
        </a>
        <p className="text-sm text-neutrals-60 mb-4 ">
          {company} . {location}
        </p>
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
