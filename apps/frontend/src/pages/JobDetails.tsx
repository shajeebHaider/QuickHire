import { useParams } from 'react-router-dom';
import { useJob } from '../api-hooks/useJobs';
import Typography from '../components/base/Typography';
import { useState } from 'react';
import JobOverview from '../features/job-details/JobOverview';
import JobMain from '../features/job-details/JobMain';
import { useSubmitApplication } from '../api-hooks/useApplications';

const JobDetails = () => {
  const { id } = useParams();
  const { data: job, isLoading, isError } = useJob(id);
  const { mutateAsync: submitApplication, isPending: isSubmitting } = useSubmitApplication();

  const [formData, setFormData] = useState({
    applicantName: '',
    applicantEmail: '',
    resumeLink: '',
    coverNote: '',
    expectedSalary: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!job?.id) return;

    await submitApplication({
      applicantName: formData.applicantName,
      applicantEmail: formData.applicantEmail,
      resumeLink: formData.resumeLink,
      coverNote: formData.coverNote,
      expectedSalary: Number(formData.expectedSalary),
      jobId: job.id
    });

    alert('Applied successfully');
    setFormData({
      applicantName: '',
      applicantEmail: '',
      resumeLink: '',
      coverNote: '',
      expectedSalary: ''
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Typography variant="text" size="large">
          Loading job details...
        </Typography>
      </div>
    );
  }

  if (isError || !job) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Typography variant="text" size="large" className="text-accents-red!">
          Job not found
        </Typography>
      </div>
    );
  }

  return (
    <div className="min-h-screen max-w-360 mx-auto bg-neutrals-10 px-31 py-18 max-lg:px-6 max-sm:px-4">
      <div className="max-w-360 mx-auto grid grid-cols-3 gap-8 max-lg:grid-cols-1">
        <JobMain job={job} />
        <div className="col-span-1">
          <JobOverview job={job} />
          <div className="bg-white p-8">
            <Typography variant="heading" size="small" className="mb-6!">
              Apply for this Job
            </Typography>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="applicantName"
                  className="block text-sm font-semibold text-neutrals-100 mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="applicantName"
                  name="applicantName"
                  value={formData.applicantName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-neutrals-20 rounded focus:outline-none focus:border-primary transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="applicantEmail"
                  className="block text-sm font-semibold text-neutrals-100 mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="applicantEmail"
                  name="applicantEmail"
                  value={formData.applicantEmail}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-neutrals-20 rounded focus:outline-none focus:border-primary transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="resumeLink"
                  className="block text-sm font-semibold text-neutrals-100 mb-2"
                >
                  Resume Link *
                </label>
                <input
                  type="url"
                  id="resumeLink"
                  name="resumeLink"
                  value={formData.resumeLink}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-neutrals-20 rounded focus:outline-none focus:border-primary transition-colors"
                  placeholder="https://drive.google.com/..."
                />
              </div>

              <div>
                <label
                  htmlFor="expectedSalary"
                  className="block text-sm font-semibold text-neutrals-100 mb-2"
                >
                  Expected Salary ($) *
                </label>
                <input
                  type="number"
                  id="expectedSalary"
                  name="expectedSalary"
                  value={formData.expectedSalary}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-neutrals-20 rounded focus:outline-none focus:border-primary transition-colors"
                  placeholder="80000"
                />
              </div>

              <div>
                <label
                  htmlFor="coverNote"
                  className="block text-sm font-semibold text-neutrals-100 mb-2"
                >
                  Cover Note *
                </label>
                <textarea
                  id="coverNote"
                  name="coverNote"
                  value={formData.coverNote}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-neutrals-20 rounded focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Tell us why you're a great fit..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-primary! cursor-pointer w-full text-white font-semibold px-3 py-3 rounded hover:bg-primary-dark transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
              <button
                type="button"
                onClick={() => window.history.back()}
                className="bg-white! w-full cursor-pointer pointer- text-black border border-primary font-semibold px-3 py-3 rounded hover:bg-primary-dark transition-colors duration-200"
              >
                Go back
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
