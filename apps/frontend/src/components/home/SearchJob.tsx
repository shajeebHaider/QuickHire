import LocationIcon from '../../assets/icons/LocationIcon';
import SearchIcon from '../../assets/icons/SearchIcon';
import { useState } from 'react';
import Typography from '../base/Typography';

const locations = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' }
];

const SearchJob = () => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <div className="w-213 p-4 bg-white search-box-shadow flex gap-2 items-center  ">
        <div className="flex flex-1 items-center justify-center gap-4">
          <SearchIcon />
          <input
            type="text"
            placeholder="Job titles or keyword..."
            className=" px-4 py-2 border-b border-neutrals-20  focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div className="flex flex-1 items-center justify-center gap-4 ">
          <LocationIcon />

          <select
            className="px-4 py-2 border-b border-neutrals-20  focus:outline-none focus:ring-2 focus:ring-primary"
            value={selectedValue}
            onChange={handleChange}
          >
            <option value="">Select your location...</option>
            {locations.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <button
          onClick={() => {
            console.log('button clicked');
          }}
          className="flex font-bold items-center justify-center w-52.25 h-12.5 text-sm leading-normal px-6 py-3 rounded-sm bg-primary! text-white"
        >
          Search my job
        </button>
      </div>
      <Typography size="small" variant="text" component="p" className="text-black mt-4">
        Popular : <span className="font-medium"> UI Designer, UX Researcher, Android, Admin</span>
      </Typography>
    </div>
  );
};

export default SearchJob;
