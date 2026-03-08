import Typography from '../components/base/Typography';
import { useAppications, useDeleteApplication } from '../api-hooks/useApplications';
import { useNavigate } from 'react-router-dom';
import { paths } from '../routes/paths';
import type { Job } from './AllJobs';

interface Application {
  id: number;
  jobId: number;
  applicantName: string;
  applicantEmail: string;
  resumeLink: string;
  expectedSalary: number;
  coverNote: string;
  job: Job;
  isHired: boolean;
  createdAt: string;
  updatedAt: string;
}

const Applications = () => {
  const { data: applications = [] } = useAppications();
  const { mutate: deleteApplication, isPending: isDeleting } = useDeleteApplication();

  const navigate = useNavigate();

  const handleDeleteApplication = (id: number) => {
    const isConfirmed = window.confirm('Are you sure you want to delete this application?');
    if (!isConfirmed) return;

    deleteApplication(id);
  };

  return (
    <div className="min-h-screen flex flex-col w-full">
      <div className="p-6 space-y-6 max-lg:p-4 max-sm:p-3">
        <div className="rounded-xl border border-neutrals-20 bg-white p-5 max-sm:p-3">
          <div className="flex items-center justify-between mb-4 gap-3 flex-wrap">
            <Typography variant="heading" size="small">
              All Applications
            </Typography>

            <button
              type="button"
              className="px-4 py-2 text-sm font-semibold rounded-md bg-primary! text-white hover:bg-primary/90 transition-colors whitespace-nowrap"
            >
              Export Data
            </button>
          </div>

          <div className="bg-white rounded border border-neutrals-20 overflow-x-auto">
            <table className="w-full min-w-250">
              <thead className="bg-neutrals-10 border-b border-neutrals-20">
                <tr>
                  <th className="px-6 py-4 text-left max-sm:px-3 max-sm:py-3">
                    <Typography variant="text" size="small" className="font-semibold">
                      Applicants name
                    </Typography>
                  </th>
                  <th className="px-6 py-4 text-left max-sm:px-3 max-sm:py-3">
                    <Typography variant="text" size="small" className="font-semibold">
                      Applicants Email
                    </Typography>
                  </th>
                  <th className="px-6 py-4 text-left max-sm:px-3 max-sm:py-3">
                    <Typography variant="text" size="small" className="font-semibold">
                      Expected Salary
                    </Typography>
                  </th>
                  <th className="px-6 py-4 text-left max-sm:px-3 max-sm:py-3">
                    <Typography variant="text" size="small" className="font-semibold">
                      Job Title
                    </Typography>
                  </th>
                  <th className="px-6 py-4 text-left max-sm:px-3 max-sm:py-3">
                    <Typography variant="text" size="small" className="font-semibold">
                      Company Name
                    </Typography>
                  </th>
                  <th className="px-6 py-4 text-left max-sm:px-3 max-sm:py-3">
                    <Typography variant="text" size="small" className="font-semibold">
                      Hired
                    </Typography>
                  </th>
                  <th className="px-6 py-4 text-left max-sm:px-3 max-sm:py-3">
                    <Typography variant="text" size="small" className="font-semibold">
                      Resume Link
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
                {applications.map((app: Application) => (
                  <tr
                    key={app.id}
                    onClick={() => {
                      navigate(paths.editApplication(app.id));
                    }}
                    className="border-b cursor-pointer border-neutrals-20 hover:bg-neutrals-10 transition-colors"
                  >
                    <td className="px-6 py-4 max-sm:px-3 max-sm:py-3">
                      <Typography variant="text" size="medium">
                        {app.applicantName}
                      </Typography>
                    </td>
                    <td className="px-6 py-4 max-sm:px-3 max-sm:py-3">
                      <Typography variant="text" size="medium" className="text-neutrals-60!">
                        {app.applicantEmail}
                      </Typography>
                    </td>
                    <td className="px-6 py-4 max-sm:px-3 max-sm:py-3">
                      <Typography variant="text" size="medium" className="text-neutrals-60!">
                        ${app.expectedSalary.toLocaleString()}
                      </Typography>
                    </td>

                    <td className="px-6 py-4 max-sm:px-3 max-sm:py-3">
                      <Typography variant="text" size="medium" className="text-neutrals-60!">
                        {app.job.title}
                      </Typography>
                    </td>
                    <td className="px-6 py-4 max-sm:px-3 max-sm:py-3">
                      <Typography variant="text" size="medium" className="text-neutrals-60!">
                        {app.job.companyName}
                      </Typography>
                    </td>
                    <td className="px-6 py-4 max-sm:px-3 max-sm:py-3">
                      <span
                        className={`px-3 py-1 rounded text-xs font-medium whitespace-nowrap ${
                          app.isHired === false
                            ? 'bg-accents-yellow/10 text-accents-yellow'
                            : app.isHired === true
                              ? 'bg-accents-green/10 text-accents-green'
                              : 'bg-accents-red/10 text-accents-red'
                        }`}
                      >
                        {app.isHired ? 'Hired' : 'Pending'}
                      </span>
                    </td>
                    <td className="px-6 py-4 max-sm:px-3 max-sm:py-3">
                      <a
                        onClick={e => e.stopPropagation()}
                        href={app.resumeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        <Typography variant="text" size="medium">
                          View Resume
                        </Typography>
                      </a>
                    </td>
                    <td className="px-6 py-4 max-sm:px-3 max-sm:py-3">
                      <div className="flex gap-2 flex-nowrap">
                        <button
                          type="button"
                          onClick={e => {
                            e.stopPropagation();
                            navigate(paths.editApplication(app.id));
                          }}
                          className="px-3 py-1 text-sm bg-primary/10 text-primary rounded hover:bg-primary/20 transition-colors whitespace-nowrap"
                        >
                          Manage
                        </button>
                        <button
                          type="button"
                          disabled={isDeleting}
                          onClick={e => {
                            e.stopPropagation();
                            handleDeleteApplication(app.id);
                          }}
                          className="px-3 py-1 text-sm bg-accents-red/10 text-accents-red rounded hover:bg-accents-red/20 transition-colors whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed"
                        >
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

export default Applications;
