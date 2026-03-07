import { useJobs } from '../api-hooks/useJobs';
import Typography from '../components/base/Typography';
import type { Job } from './AllJobs';

const Dashboard = () => {
  const { data: jobs = [] } = useJobs();

  return (
    <div className="min-h-screen flex flex-col w-full">
      <div className="p-6 space-y-6 max-lg:p-4 max-sm:p-3">
        <div className="rounded-xl border border-neutrals-20 bg-white p-5 max-sm:p-3">
          <div className="flex items-center justify-between mb-4 gap-3 flex-wrap">
            <Typography variant="heading" size="small">
              All Jobs
            </Typography>

            <button
              type="button"
              className="px-4 py-2 text-sm font-semibold rounded-md bg-primary! text-white hover:bg-primary/90 transition-colors whitespace-nowrap"
            >
              Add New Job
            </button>
          </div>

          <div className="bg-white rounded border border-neutrals-20 overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <thead className="bg-neutrals-10 border-b border-neutrals-20">
                <tr>
                  <th className="px-6 py-4 text-left max-sm:px-3 max-sm:py-3">
                    <Typography variant="text" size="small" className="font-semibold">
                      Job title
                    </Typography>
                  </th>
                  <th className="px-6 py-4 text-left max-sm:px-3 max-sm:py-3">
                    <Typography variant="text" size="small" className="font-semibold">
                      Company Name
                    </Typography>
                  </th>
                  <th className="px-6 py-4 text-left max-sm:px-3 max-sm:py-3">
                    <Typography variant="text" size="small" className="font-semibold">
                      Location
                    </Typography>
                  </th>
                  <th className="px-6 py-4 text-left max-sm:px-3 max-sm:py-3">
                    <Typography variant="text" size="small" className="font-semibold">
                      Job Type
                    </Typography>
                  </th>
                  <th className="px-6 py-4 text-left max-sm:px-3 max-sm:py-3">
                    <Typography variant="text" size="small" className="font-semibold">
                      Actions
                    </Typography>
                  </th>
                </tr>
              </thead>
              <tbody>
                {jobs.map((job: Job) => (
                  <tr
                    key={job.id}
                    className="border-b border-neutrals-20 hover:bg-neutrals-10 transition-colors"
                  >
                    <td className="px-6 py-4 max-sm:px-3 max-sm:py-3">
                      <Typography variant="text" size="medium">
                        {job.title}
                      </Typography>
                    </td>
                    <td className="px-6 py-4 max-sm:px-3 max-sm:py-3">
                      <Typography variant="text" size="medium" className="text-neutrals-60!">
                        {job.companyName}
                      </Typography>
                    </td>
                    <td className="px-6 py-4 max-sm:px-3 max-sm:py-3">
                      <Typography variant="text" size="medium">
                        {job.location}
                      </Typography>
                    </td>
                    <td className="px-6 py-4 max-sm:px-3 max-sm:py-3">
                      <Typography variant="text" size="medium" className="text-neutrals-60!">
                        {job.jobtype}
                      </Typography>
                    </td>
                    <td className="px-6 py-4 max-sm:px-3 max-sm:py-3">
                      <div className="flex gap-2 flex-nowrap">
                        <button
                          onClick={() => {}}
                          className="px-3 py-1 text-sm bg-primary/10 text-primary rounded hover:bg-primary/20 transition-colors whitespace-nowrap"
                        >
                          Manage
                        </button>
                        <button className="px-3 py-1 text-sm bg-accents-red/10 text-accents-red rounded hover:bg-accents-red/20 transition-colors whitespace-nowrap">
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
