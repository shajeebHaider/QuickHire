import SectionHeader from '../../components/home/SectionHeader';
import FeaturedJobCard from '../../components/home/FeaturedJobCard';

import ArrowIcon from '../../assets/icons/ArrowIcon';
import { paths } from '../../routes/paths';
import { useJobs } from '../../api-hooks/useJobs';
import type { Job } from '../../pages/AllJobs';
import { useMemo } from 'react';

const FeaturedJob = () => {
   const { data: jobs= [] } = useJobs();

    const featuredJobs = useMemo(
    () => jobs.filter((job: Job) => job.isFeatured).slice(0, 8),
    [jobs]
  );
   
  return (
    <div className="px-31 py-18 flex flex-col gap-8 max-w-360 mx-auto max-lg:px-6 max-sm:px-4 max-sm:items-center">
      <SectionHeader title1="Featured" title2="jobs" />
      <div className="grid grid-cols-4 gap-8 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1">
        {featuredJobs?.map((job: Job) => (
          <FeaturedJobCard
            key={job.id}
            companyLogo={job.companyLogo}
            title={job.title}
            company={job.companyName}
            location={job.location}
            description={job.description}
            category={job.category} 
            link={paths.jobDetails(job.id)}
            jobtype={job.jobtype}
          />
        ))}
      </div>
      <div className="hidden max-sm:flex">
        <a
          href={paths.jobs}
          className="text-primary font-semibold text-base flex items-center gap-4 "
        >
          <p>Show all jobs</p>
          <ArrowIcon />
        </a>
      </div>
    </div>
  );
};

export default FeaturedJob;
