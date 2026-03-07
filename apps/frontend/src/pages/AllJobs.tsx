import { useState, useMemo } from 'react';
import Typography from '../components/base/Typography';
import FeaturedJobCard from '../components/home/FeaturedJobCard';
import { useJobs } from '../api-hooks/useJobs';
import { paths } from '../routes/paths';

export type Category = {
  id: number;
  name: string;
  icon: string;
};

export interface Job {
  id: number;
  title: string;
  companyName: string;
  companyLogo: string;
  location: string;
  description: string;
  jobtype: string;
  category: Category;
  link?: string;
  isFeatured?: boolean;
}

const AllJobs = () => {
  const { data: jobs = [] } = useJobs();
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('trending');

  const filteredAndSortedJobs = useMemo(() => {
    let filtered = jobs.filter(
      (job: Job) =>
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (sortBy === 'location') {
      filtered = filtered.sort((a: Job, b: Job) => a.location.localeCompare(b.location));
    } else if (sortBy === 'title') {
      filtered = filtered.sort((a: Job, b: Job) => a.title.localeCompare(b.title));
    } else if (sortBy === 'latest') {
      filtered = filtered.reverse();
    }

    return filtered;
  }, [jobs, searchQuery, sortBy]);

  return (
    <div className="min-h-screen px-31 py-18 flex flex-col gap-8 max-w-360 mx-auto max-lg:px-6 max-sm:px-4 max-sm:items-center">
      <Typography
        size="medium"
        variant="heading"
        component="h2"
        className="mb-4! max-md:text-3xl! max-md:leading-[35.2px]!"
      >
        All <span className="text-accents-blue">Jobs</span>
      </Typography>

      <div className="w-full flex flex-col gap-4 max-sm:items-center">
        <div className="flex gap-4 w-full max-sm:flex-col max-sm:items-stretch">
          <input
            type="text"
            placeholder="Search by job title, company, or location..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="flex-1 px-6 py-3 border border-neutrals-20 rounded bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
          />

          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value)}
            className="px-6 py-3 border border-neutrals-20 rounded bg-white focus:outline-none focus:border-primary! focus:ring-1 focus:ring-primary transition-all min-w-40"
          >
            <option value="trending">Trending</option>
            <option value="location">Sort by Location</option>
            <option value="title">Sort by Title</option>
            <option value="latest">Latest</option>
          </select>
        </div>

        <Typography variant="text" size="small" className="text-neutrals-60!">
          Showing {filteredAndSortedJobs.length} of {jobs.length} jobs
        </Typography>
      </div>

      {filteredAndSortedJobs.length > 0 ? (
        <div className="grid grid-cols-4 gap-8 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 w-full">
          {filteredAndSortedJobs.map((job: Job) => (
            <FeaturedJobCard
              key={job.id}
              title={job.title}
              company={job.companyName}
              companyLogo={job.companyLogo}
              location={job.location}
              description={job.description}
              category={job.category}
              link={paths.jobDetails(job.id)}
              jobtype={job.jobtype}
            />
          ))}
        </div>
      ) : (
        <div className="w-full text-center py-12">
          <Typography variant="text" size="large" className="text-neutrals-60!">
            No jobs found matching your criteria
          </Typography>
        </div>
      )}
    </div>
  );
};

export default AllJobs;
