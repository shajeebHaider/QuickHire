import LocationIcon from '../../assets/icons/LocationIcon';
import SearchIcon from '../../assets/icons/SearchIcon';
import { useState } from 'react';
import Typography from '../base/Typography';
import { useJobs } from '../../api-hooks/useJobs';
import type { Job } from '../../pages/AllJobs';


const SearchJob = () => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  const {data: jobs = []} = useJobs();

  const locations = jobs.map((job: Job) => job.location);

  console.log(locations);

  return (
    <div>
      <div className="max-w-213 p-4 bg-white search-box-shadow flex flex-col lg:flex-row gap-4 items-stretch lg:items-center max-lg:mx-auto max-sm:max-w-85.75">
        <div className="flex flex-1 items-center gap-4 border-b border-neutrals-20 pb-2 lg:pb-0">
          <SearchIcon />
          <input
            type="text"
            aria-label="Search job"
            placeholder="Job titles or keyword..."
            className="w-full px-2 py-2 focus:outline-none"
          />
        </div>

        <div className="flex flex-1 items-center gap-4 border-b border-neutrals-20 pb-2 lg:pb-0">
          <LocationIcon />

          <select
            aria-label="Select location"
            className="w-full px-2 py-2 focus:outline-none"
            value={selectedValue}
            onChange={handleChange}
          >
            <option value="">Select your location...</option>
            {locations.map((location: string, index: number) => (
              <option key={index} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={() => console.log('button clicked')}
          className="font-bold flex items-center cursor-pointer justify-center sm:w-52 w-full h-12 px-6 py-3 rounded-sm bg-primary! text-white"
        >
          Search my job
        </button>
      </div>

      <Typography size="small" variant="text" component="p" className="text-black mt-4">
        Popular : <span className="font-medium">UI Designer, UX Researcher, Android, Admin</span>
      </Typography>
    </div>
  );
};

export default SearchJob;
