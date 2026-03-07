import Typography from '../components/base/Typography';
import { useAppications } from '../api-hooks/useApplications';

interface Application {
  id: string;
  jobId: number;
  applicantName: string;
  applicantEmail: string;
  resumeLink: string;
  expectedSalary: number;
  coverNote: string;
  isHired: boolean;
  createdAt: string;
  updatedAt: string;
}

const Applications = () => {
  const { data: applications = [] } = useAppications();

  console.log(applications);

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
            <table className="w-full min-w-[1000px]">
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
                      Resume Link
                    </Typography>
                  </th>
                  <th className="px-6 py-4 text-left max-sm:px-3 max-sm:py-3">
                    <Typography variant="text" size="small" className="font-semibold">
                      Expected Salary
                    </Typography>
                  </th>
                  <th className="px-6 py-4 text-left max-sm:px-3 max-sm:py-3">
                    <Typography variant="text" size="small" className="font-semibold">
                      Hired
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
                    className="border-b border-neutrals-20 hover:bg-neutrals-10 transition-colors"
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
                      <a
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
                      <Typography variant="text" size="medium" className="text-neutrals-60!">
                        ${app.expectedSalary.toLocaleString()}
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

export default Applications;
