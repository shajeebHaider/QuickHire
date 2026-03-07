import React from 'react';
import Typography from '../../components/base/Typography';

interface EditJobProps {
  selectedJobId: number | null;
  setJobsSubTab: (tab: 'list' | 'edit') => void;
  mockJobs?: { id: number; title: string; company: string; location: string }[];
}

const EditJob = ({ selectedJobId, setJobsSubTab, mockJobs }: EditJobProps) => {
  return (
    <div>
      <Typography variant="heading" size="medium" className="mb-6!">
        Edit Job {selectedJobId && `#${selectedJobId}`}
      </Typography>
      <div className="bg-white rounded border border-neutrals-20 p-8 max-w-2xl">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-neutrals-100 mb-2">Job Title</label>
            <input
              type="text"
              defaultValue={mockJobs?.find(j => j.id === selectedJobId)?.title || ''}
              className="w-full px-4 py-3 border border-neutrals-20 rounded focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-neutrals-100 mb-2">
              Company Name
            </label>
            <input
              type="text"
              defaultValue={mockJobs?.find(j => j.id === selectedJobId)?.company || ''}
              className="w-full px-4 py-3 border border-neutrals-20 rounded focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-neutrals-100 mb-2">Location</label>
              <input
                type="text"
                defaultValue={mockJobs?.find(j => j.id === selectedJobId)?.location || ''}
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
            <label className="block text-sm font-semibold text-neutrals-100 mb-2">
              Job Description
            </label>
            <textarea
              rows={4}
              className="w-full px-4 py-3 border border-neutrals-20 rounded focus:outline-none focus:border-primary transition-colors resize-none"
            />
          </div>

          <div className="flex gap-4 pt-4">
            <button className="px-6 py-3 border border-primary rounded font-semibold text-white bg-primary hover:bg-primary/90 transition-colors">
              Update Job
            </button>
            <button
              onClick={() => setJobsSubTab('list')}
              className="px-6 py-3 border border-neutrals-20 rounded font-semibold text-neutrals-100 hover:bg-neutrals-10 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditJob;
