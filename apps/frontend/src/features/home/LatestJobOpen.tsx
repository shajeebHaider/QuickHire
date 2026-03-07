import SectionHeader from '../../components/home/SectionHeader';
import Pattern from '../../assets/images/Pattern2.png';
import LatestJobCard from '../../components/home/LatestJobCard';
import ArrowIcon from '../../assets/icons/ArrowIcon';
import { paths } from '../../routes/paths';
import { useJobs } from '../../api-hooks/useJobs';
import type { Job } from '../../pages/AllJobs';
import { useMemo } from 'react';



const LatestJobOpen = () => {

   const { data: jobs = [] } = useJobs();
    
   const latestJobs = useMemo(
    () =>
      [...jobs]
        .sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        )
        .slice(0, 8),
    [jobs]
  );

     
  return (
    <div className="px-31 pt-18 pb-15 flex flex-col gap-8 bg-neutrals-10 relative max-w-360 w-full mx-auto max-lg:px-6 max-md:px-4 max-md:items-center">
      <div className="absolute top-0 left-0 h-20 w-30 bg-white z-20 [clip-path:polygon(0_0,100%_0,0_100%)]" />
      <img
        src={Pattern}
        alt="Background Pattern"
        className="absolute object-cover top-0 left-195  pointer-events-none"
        style={{ zIndex: 1 }}
      />
      <div className="relative z-10">
        <SectionHeader title1="Latest" title2="jobs open" />
      </div>
      <div className="grid grid-cols-2 gap-x-8 gap-y-6 relative z-10 max-md:grid-cols-1 items-start">
        {latestJobs?.map((job: Job) => (
          <LatestJobCard
            key={job.id}
            companyLogo={job.companyLogo}
            title={job.title}
            company={job.companyName}
            location={job.location}
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

export default LatestJobOpen;
