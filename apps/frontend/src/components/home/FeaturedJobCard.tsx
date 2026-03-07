import { Link } from 'react-router-dom';
import Label from '../base/Label';
import Typography from '../base/Typography';
import type { Category } from '../../pages/AllJobs';

interface FeaturedJobCardProps {
  title: string;
  jobtype?: string;
  company?: string;
  companyLogo?: string
  location: string;
  description: string;
  category?: Category;
  link?: string;
}

const FeaturedJobCard = ({
  title,
  jobtype,
  company,
  companyLogo,
  location,
  description,
  category,
  link
}: FeaturedJobCardProps) => {
  return (
    <div className="max-w-71 max-h-70.75 border border-neutrals-20 p-8">
      <div className="flex justify-between items-start text-primary">
        <div className="w-12 h-12">
          <img src={companyLogo} alt="Logo" />
        </div>
        <span className="py-1 px-3 border border-primary text-base font-normal">{jobtype}</span>
      </div>
      <Link to={link || '#'} className="no-underline">
        <Typography
          variant="heading"
          size="small"
          className="text-lg! mt-4! mb-0.5! truncate"
          component="h3"
        >
          {title}
        </Typography>
      </Link>
      <Typography variant="text" size="medium" className="text-neutrals-60! mb-4! truncate" component="p">
        {company} <span className="text-neutrals-40">•</span> {location}
      </Typography>
      <div className="hidden lg:block">
        <Typography
          variant="text"
          size="medium"
          className="mb-4 truncate text-neutrals-60! flex items-center gap-4 "
          component="p"
        >
          {description}
        </Typography>
      </div>

      <div className="flex gap-2">
        <Label key={category?.id} text={category?.name ?? ''} {...category?.name==="Engineering" ? { variant: 'success' } : { variant: 'warning' }} />
      </div>
    </div>
  );
};

export default FeaturedJobCard;
