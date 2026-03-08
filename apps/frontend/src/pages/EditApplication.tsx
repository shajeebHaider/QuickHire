import { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useApplication, useUpdateApplicationHireStatus } from '../api-hooks/useApplications';
import Typography from '../components/base/Typography';
import { paths } from '../routes/paths';

const EditApplication = () => {
  const params = useParams();
  const navigate = useNavigate();

  const { data: application, isLoading, isError } = useApplication(params.id);
  const { mutate: updateHireStatus, isPending } = useUpdateApplicationHireStatus();

  const salaryText = useMemo(() => {
    if (!application) return '—';
    if (typeof application.expectedSalary !== 'number') return 'Not provided';
    return `$${application.expectedSalary.toLocaleString()}`;
  }, [application]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col w-full">
        <div className="p-6 space-y-6 max-lg:p-4 max-sm:p-3">
          <Typography variant="heading" size="small">
            Manage Application
          </Typography>
          <div className="rounded-xl border border-neutrals-20 bg-white p-6">
            <Typography variant="text" size="medium" className="text-neutrals-60!">
              Loading application details...
            </Typography>
          </div>
        </div>
      </div>
    );
  }

  if (isError || !application) {
    return (
      <div className="min-h-screen flex flex-col w-full">
        <div className="p-6 space-y-6 max-lg:p-4 max-sm:p-3">
          <Typography variant="heading" size="small">
            Manage Application
          </Typography>
          <div className="rounded-xl border border-neutrals-20 bg-white p-6 space-y-4">
            <Typography variant="text" size="medium" className="text-accents-red!">
              Application not found or failed to load.
            </Typography>
            <button
              type="button"
              onClick={() => navigate(paths.applications)}
              className="px-5 py-2.5 border border-neutrals-20 rounded font-semibold text-neutrals-100 hover:bg-neutrals-10 transition-colors"
            >
              Back to Applications
            </button>
          </div>
        </div>
      </div>
    );
  }

  const handleHireStatusChange = (isHired: boolean) => {
    updateHireStatus({ id: application.id, isHired });
  };

  return (
    <div className="min-h-screen flex flex-col w-full">
      <div className="p-6 space-y-6 max-lg:p-4 max-sm:p-3">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <Typography variant="heading" size="small">
            Manage Application
          </Typography>
          <button
            type="button"
            onClick={() => navigate(paths.applications)}
            className="px-4 py-2 text-sm font-semibold rounded-md border border-neutrals-20 hover:bg-neutrals-10 transition-colors"
          >
            Back
          </button>
        </div>

        <div className="rounded-xl border border-neutrals-20 bg-white p-5 max-sm:p-3 space-y-6">
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <Typography variant="heading" size="small" className="mb-1!">
                {application.applicantName}
              </Typography>
              <Typography variant="text" size="small" className="text-neutrals-60!">
                Applied for {application.job.title} at {application.job.companyName}
              </Typography>
            </div>

            <span
              className={`px-3 py-1 rounded text-xs font-medium whitespace-nowrap ${
                application.isHired
                  ? 'bg-accents-green/10 text-accents-green'
                  : 'bg-accents-yellow/10 text-accents-yellow'
              }`}
            >
              {application.isHired ? 'Hired' : 'Pending'}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded border border-neutrals-20 p-4">
              <Typography variant="text" size="small" className="text-neutrals-60! mb-1!">
                Applicant Email
              </Typography>
              <Typography variant="text" size="medium">
                {application.applicantEmail}
              </Typography>
            </div>

            <div className="rounded border border-neutrals-20 p-4">
              <Typography variant="text" size="small" className="text-neutrals-60! mb-1!">
                Expected Salary
              </Typography>
              <Typography variant="text" size="medium">
                {salaryText}
              </Typography>
            </div>

            <div className="rounded border border-neutrals-20 p-4">
              <Typography variant="text" size="small" className="text-neutrals-60! mb-1!">
                Job Title
              </Typography>
              <Typography variant="text" size="medium">
                {application.job.title}
              </Typography>
            </div>

            <div className="rounded border border-neutrals-20 p-4">
              <Typography variant="text" size="small" className="text-neutrals-60! mb-1!">
                Company Name
              </Typography>
              <Typography variant="text" size="medium">
                {application.job.companyName}
              </Typography>
            </div>

            <div className="rounded border border-neutrals-20 p-4 md:col-span-2">
              <Typography variant="text" size="small" className="text-neutrals-60! mb-1!">
                Resume Link
              </Typography>
              {application.resumeLink ? (
                <a
                  href={application.resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  <Typography variant="text" size="medium">
                    Open Resume
                  </Typography>
                </a>
              ) : (
                <Typography variant="text" size="medium">
                  Not provided
                </Typography>
              )}
            </div>

            <div className="rounded border border-neutrals-20 p-4 md:col-span-2">
              <Typography variant="text" size="small" className="text-neutrals-60! mb-1!">
                Cover Note
              </Typography>
              <Typography variant="text" size="medium" className="whitespace-pre-wrap">
                {application.coverNote || 'No cover note provided'}
              </Typography>
            </div>
          </div>

          <div className="rounded border border-neutrals-20 p-4 space-y-3">
            <Typography variant="text" size="small" className="font-semibold">
              Hiring Decision
            </Typography>
            <div className="flex gap-3 flex-wrap">
              <button
                type="button"
                disabled={isPending || application.isHired}
                onClick={() => handleHireStatusChange(true)}
                className="px-4 py-2 text-sm font-semibold rounded-md bg-accents-green! text-white disabled:opacity-60 disabled:cursor-not-allowed"
              >
                Mark as Hired
              </button>
              <button
                type="button"
                disabled={isPending || !application.isHired}
                onClick={() => handleHireStatusChange(false)}
                className="px-4 py-2 text-sm font-semibold rounded-md bg-accents-yellow! text-white disabled:opacity-60 disabled:cursor-not-allowed"
              >
                Mark as Pending
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditApplication;
