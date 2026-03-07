import Typography from '../../components/base/Typography';

const AddNewJob = () => {
  return (
    <div>
      <Typography variant="heading" size="medium" className="mb-6!">
        Add New Job
      </Typography>
      <div className="bg-white rounded border border-neutrals-20 p-8 max-w-2xl">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-neutrals-100 mb-2">Job Title</label>
            <input
              type="text"
              placeholder="e.g., Senior Developer"
              className="w-full px-4 py-3 border border-neutrals-20 rounded focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-neutrals-100 mb-2">
              Company Name
            </label>
            <input
              type="text"
              placeholder="e.g., Tech Corp"
              className="w-full px-4 py-3 border border-neutrals-20 rounded focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-neutrals-100 mb-2">Location</label>
              <input
                type="text"
                placeholder="e.g., San Francisco, CA"
                className="w-full px-4 py-3 border border-neutrals-20 rounded focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-neutrals-100 mb-2">Job Type</label>
              <select className="w-full px-4 py-3 border border-neutrals-20 rounded focus:outline-none focus:border-primary transition-colors">
                <option>Full-time</option>
                <option>Part-time</option>
                <option>Contract</option>
                <option>Freelance</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-neutrals-100 mb-2">Category</label>
            <select className="w-full px-4 py-3 border border-neutrals-20 rounded focus:outline-none focus:border-primary transition-colors">
              <option>Engineering</option>
              <option>Design</option>
              <option>Marketing</option>
              <option>Sales</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-neutrals-100 mb-2">
              Job Description
            </label>
            <textarea
              rows={4}
              placeholder="Enter job description..."
              className="w-full px-4 py-3 border border-neutrals-20 rounded focus:outline-none focus:border-primary transition-colors resize-none"
            />
          </div>

          <div className="flex gap-4 pt-4">
            <button className="px-6 py-3 border border-primary rounded font-semibold text-white bg-primary hover:bg-primary/90 transition-colors">
              Add Job
            </button>
            <button className="px-6 py-3 border border-neutrals-20 rounded font-semibold text-neutrals-100 hover:bg-neutrals-10 transition-colors">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewJob;
