import React from 'react';
import Label from '../base/Label';
import Typography from '../base/Typography';
import type { Category } from '../../pages/AllJobs';

interface LatestJobCardProps {
  companyLogo?: string;
  title: string;
  jobtype?: string;
  company?: string;
  location: string;
  category?: Category;
  link?: string;
}

const LatestJobCard = ({
    companyLogo,
  title,
  jobtype,
  company,
  location,
  category,
  link
}: LatestJobCardProps) => {
  return (
    <div className="md:max-w-145 max-w-85.75 bg-neutrals-0 md:p-8 p-4 flex md:flex-row flex-col md:gap-6">
      <div className="sm:w-16 sm:h-16 w-12 h-12 shrink-0">
        <img src={companyLogo} alt="Logo" />
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
          <Label text={jobtype || 'Unknown'} {...jobtype==="Full-time" ? { variant: 'warning' } : { variant: 'success' }} />
          <div className="h-8 border-r border-neutrals-20 mx-2" />
          <Label key={category?.id} text={category?.name ?? ''} {...category?.name==="Engineering" ? { variant: 'primary' } : { variant: 'warning' }} />
        </div>
      </div>
    </div>
  );
};

export default LatestJobCard;
