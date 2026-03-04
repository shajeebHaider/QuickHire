import SectionHeader from '../../components/home/SectionHeader';
import FeaturedJobCard from '../../components/home/FeaturedJobCard';

import emailMarketing from '../../assets/logo/Email Marketing.png';
import product from '../../assets/logo/product.png';
import pitch from '../../assets/logo/pitch.png';
import canva from '../../assets/logo/canva.png';
import designer from '../../assets/logo/designer.png';
import dropbox from '../../assets/logo/dropbox.png';
import twitter from '../../assets/logo/twitter.png';
import brand from '../../assets/logo/brand-strategist.png';

type Category = {
  variant: 'error' | 'primary' | 'secondary' | 'success' | 'warning';
  name: string;
};

type JobType = 'Full-time' | 'Part-time' | 'Contract' | 'Internship' | 'Remote';

const jobs: Array<{
  logo: string;
  title: string;
  company: string;
  location: string;
  description: string;
  type: JobType;
  categories: Category[];
  link?: string;
}> = [
  {
    logo: canva,
    title: 'Software Engineer',
    company: 'TechCorp',
    location: 'New York, NY',
    description: 'Develop and maintain web applications using modern technologies.',
    type: 'Full-time',
    categories: [
      { variant: 'primary', name: 'Technology' },
      { variant: 'success', name: 'Engineering' }
    ],
    link: '#'
  },
  {
    logo: emailMarketing,
    title: 'Marketing Manager',
    company: 'Marketify',
    location: 'San Francisco, CA',
    description: 'Manage marketing campaigns and analyze customer data.',
    type: 'Part-time',
    categories: [
      { variant: 'error', name: 'Marketing' },
      { variant: 'warning', name: 'Strategy' }
    ],
    link: '#'
  },
  {
    logo: dropbox,
    title: 'Data Analyst',
    company: 'DataWorks',
    location: 'Chicago, IL',
    description: 'Analyze data to help drive business decisions.',
    type: 'Contract',
    categories: [{ variant: 'success', name: 'Analytics' }],
    link: '#'
  },
  {
    logo: designer,
    title: 'Product Designer',
    company: 'DesignHub',
    location: 'Remote',
    description: 'Design user interfaces and experiences for digital products.',
    type: 'Remote',
    categories: [{ variant: 'warning', name: 'Design' }],
    link: '#'
  },
  {
    logo: twitter,
    title: 'Financial Analyst',
    company: 'FinancePros',
    location: 'Boston, MA',
    description: 'Analyze financial data and prepare reports for stakeholders.',
    type: 'Full-time',
    categories: [{ variant: 'error', name: 'Finance' }],
    link: '#'
  },
  {
    logo: brand,
    title: 'Financial Analyst',
    company: 'FinancePros',
    location: 'Boston, MA',
    description: 'Analyze financial data and prepare reports for stakeholders.',
    type: 'Full-time',
    categories: [
      { variant: 'error', name: 'Finance' },
      { variant: 'success', name: 'Accounting' }
    ],
    link: '#'
  },
  {
    logo: product,
    title: 'Engineering Manager',
    company: 'FinancePros',
    location: 'Boston, MA',
    description: 'Analyze financial data and prepare reports for stakeholders.',
    type: 'Full-time',
    categories: [{ variant: 'success', name: 'Finance' }],
    link: '#'
  },
  {
    logo: pitch,
    title: 'Financial Analyst',
    company: 'FinancePros',
    location: 'Boston, MA',
    description: 'Analyze financial data and prepare reports for stakeholders.',
    type: 'Full-time',
    categories: [{ variant: 'success', name: 'Finance' }],
    link: '#'
  }
];

const FeaturedJob = () => {
  return (
    <div className="px-31 py-18 flex flex-col gap-8 max-w-360 mx-auto">
      <SectionHeader title1="Featured" title2="jobs" linkText="Show all jobs" linkHref="#" />
      <div className="grid grid-cols-4 gap-8 w-full">
        {jobs.map((job, index) => (
          <FeaturedJobCard
            key={index}
            logo={job.logo}
            title={job.title}
            company={job.company}
            location={job.location}
            description={job.description}
            categories={[...job.categories]}
            link={job.link}
            jobType={job.type}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedJob;
