import { useParams } from 'react-router-dom';
import { useJob } from '../api-hooks/useJobs';
import Typography from '../components/base/Typography';

const EditJob = () => {
  const param = useParams();
  const { data: job } = useJob(param.id);

  console.log(job);

  return (
    <div className="min-h-screen flex flex-col w-full">
      <div className="p-6 space-y-6 max-lg:p-4 max-sm:p-3">
        <Typography variant="heading" size="small" className="mb-6!">
          Job details
        </Typography>
        <div className="bg-white rounded border border-neutrals-20 p-8 max-w-2xl">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-neutrals-100 mb-2">
                Job Title
              </label>
              <input
                type="text"
                // defaultValue={mockJobs?.find(j => j.id === selectedJobId)?.title || ''}
                className="w-full px-4 py-3 border border-neutrals-20 rounded focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-neutrals-100 mb-2">
                Company Name
              </label>
              <input
                type="text"
                // defaultValue={mockJobs?.find(j => j.id === selectedJobId)?.company || ''}
                className="w-full px-4 py-3 border border-neutrals-20 rounded focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-neutrals-100 mb-2">
                  Location
                </label>
                <input
                  type="text"
                  // defaultValue={mockJobs?.find(j => j.id === selectedJobId)?.location || ''}
                  className="w-full px-4 py-3 border border-neutrals-20 rounded focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-neutrals-100 mb-2">
                  Job Type
                </label>
                <select className="w-full px-4 py-3 border border-neutrals-20 rounded focus:outline-none focus:border-primary transition-colors">
                  <option>Full-time</option>
                  <option>Part-time</option>
                  <option>Contract</option>
                  <option>Freelance</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-neutrals-100 mb-2">
                Job Description
              </label>
              <textarea
                rows={4}
                // defaultValue={mockJobs?.find(j => j.id === selectedJobId)?.description || ''}
                className="w-full px-4 py-3 border border-neutrals-20 rounded focus:outline-none focus:border-primary transition-colors resize-none"
              />
            </div>

            <div className="flex gap-4 pt-4">
              <button className="px-6 py-3 border border-primary! rounded font-semibold text-white bg-primary! hover:bg-primary/90 transition-colors">
                Update Job
              </button>
              <button className="px-6 py-3 border border-neutrals-20 rounded font-semibold text-neutrals-100 hover:bg-neutrals-10 transition-colors">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditJob;
