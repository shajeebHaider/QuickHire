import React from 'react';
import Label from '../base/Label';

interface FeaturedJobCardProps {
  logo: string;
  title: string;
  jobType?: 'Full-time' | 'Part-time' | 'Contract' | 'Internship' | 'Remote';
  company?: string;
  location: string;
  description: string;
  categories?: {
    variant: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
    name: string;
  }[];
  link?: string;
}

const FeaturedJobCard = ({
  logo,
  title,
  jobType,
  company,
  location,
  description,
  categories,
  link
}: FeaturedJobCardProps) => {
  return (
    <div className="max-w-68.5 max-h-70.75 border border-neutrals-20 p-8">
      <div className=" flex justify-between items-start text-primary">
        <div className="w-12 h-12">
          <img src={logo} alt="Logo" />
        </div>
        <span className="py-1 px-3 border border-primary text-base font-normal">{jobType}</span>
      </div>
      <a href={link}>
        <h3 className="text-2xl font-semibold text-black mt-4 mb-0.5">{title}</h3>
      </a>
      <p className="text-sm text-neutrals-60 mb-4 ">
        {company} {location}
      </p>
      <p className="text-sm mb-4 truncate text-neutrals-60 flex items-center gap-4 ">
        {description}
      </p>
      <div className="flex gap-2">
        {categories?.map(category => (
          <Label key={category.name} text={category.name} variant={category.variant} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobCard;
