import React from 'react';
import SectionHeader from '../../components/home/SectionHeader';
import Pattern from '../../assets/images/Pattern2.png';
import LatestJobCard from '../../components/home/LatestJobCard';

import emailMarketing from '../../assets/logo/Email Marketing.png';
import product from '../../assets/logo/product.png';
import pitch from '../../assets/logo/pitch.png';
import canva from '../../assets/logo/canva.png';
import designer from '../../assets/logo/designer.png';
import dropbox from '../../assets/logo/dropbox.png';
import twitter from '../../assets/logo/twitter.png';
import brand from '../../assets/logo/brand-strategist.png';
import ArrowIcon from '../../assets/icons/ArrowIcon';
import { paths } from '../../routes/paths';

type Category = {
  variant: 'error' | 'primary' | 'secondary' | 'success' | 'warning';
  name: string;
};

type JobType = 'Fulltime' | 'Parttime' | 'Contract' | 'Internship' | 'Remote';

const jobs: Array<{
  logo: string;
  title: string;
  company: string;
  location: string;
  type: JobType;
  categories: Category[];
  link?: string;
}> = [
  {
    logo: canva,
    title: 'Software Engineer',
    company: 'TechCorp',
    location: 'New York, NY',
    type: 'Fulltime',
    categories: [{ variant: 'primary', name: 'Technology' }]
  },
  {
    logo: emailMarketing,
    title: 'Marketing Manager',
    company: 'Marketify',
    location: 'San Francisco, CA',
    type: 'Parttime',
    categories: [{ variant: 'error', name: 'Marketing' }]
  },
  {
    logo: dropbox,
    title: 'Data Analyst',
    company: 'DataWorks',
    location: 'Chicago, IL',
    type: 'Contract',
    categories: [{ variant: 'success', name: 'Analytics' }]
  },
  {
    logo: designer,
    title: 'Product Designer',
    company: 'DesignHub',
    location: 'Remote',
    type: 'Remote',
    categories: [{ variant: 'warning', name: 'Design' }]
  },
  {
    logo: twitter,
    title: 'Financial Analyst',
    company: 'FinancePros',
    location: 'Boston, MA',
    type: 'Fulltime',
    categories: [{ variant: 'error', name: 'Finance' }]
  },
  {
    logo: brand,
    title: 'Financial Analyst',
    company: 'FinancePros',
    location: 'Boston, MA',
    type: 'Fulltime',
    categories: [{ variant: 'error', name: 'Finance' }]
  },
  {
    logo: pitch,
    title: 'Financial Analyst',
    company: 'FinancePros',
    location: 'Boston, MA',
    type: 'Fulltime',
    categories: [{ variant: 'success', name: 'Finance' }]
  },
  {
    logo: product,
    title: 'Financial Analyst',
    company: 'FinancePros',
    location: 'Boston, MA',
    type: 'Fulltime',
    categories: [{ variant: 'success', name: 'Finance' }]
  }
];

const LatestJobOpen = () => {
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
        {jobs.map((job, index) => (
          <LatestJobCard
            key={index}
            logo={job.logo}
            title={job.title}
            company={job.company}
            location={job.location}
            categories={[...job.categories]}
            link={job.link}
            jobType={job.type}
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
