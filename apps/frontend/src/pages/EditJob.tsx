import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useJob, useUpdateJob, useDeleteJob } from '../api-hooks/useJobs';
import { useCategories } from '../api-hooks/useCategories';
import Typography from '../components/base/Typography';
import { paths } from '../routes/paths';
import type { Category } from './AllJobs';

const EditJob = () => {
  const params = useParams();
  const navigate = useNavigate();

  const { data: job, isLoading, isError } = useJob(params.id);
  const { data: categories = [] } = useCategories();
  const { mutate: updateJob, isPending: isUpdating } = useUpdateJob();
  const deleteJobMutation = useDeleteJob();
  const {
    mutate: deleteJob,
    isPending: isDeleting,
    isSuccess: isDeleteSuccess
  } = deleteJobMutation;

  useEffect(() => {
    if (isDeleteSuccess) {
      setTimeout(() => navigate(paths.dashboard), 500);
    }
  }, [isDeleteSuccess, navigate]);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    companyName: '',
    location: '',
    jobtype: '',
    categoryId: ''
  });

  useEffect(() => {
    if (job) {
      setFormData({
        title: job.title || '',
        description: job.description || '',
        companyName: job.companyName || '',
        location: job.location || '',
        jobtype: job.jobtype || '',
        categoryId: job.categoryId || ''
      });
    }
  }, [job]);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleUpdateJob = () => {
    if (!job) return;
    updateJob({
      id: job.id,
      data: {
        title: formData.title || job.title,
        description: formData.description || job.description,
        companyName: formData.companyName || job.companyName,
        location: formData.location || job.location,
        jobtype: formData.jobtype || job.jobtype,
        categoryId: formData.categoryId ? parseInt(formData.categoryId, 10) : job.categoryId
      }
    });
  };

  const handleDeleteJob = () => {
    const isConfirmed = window.confirm(
      'Are you sure you want to delete this job? This action cannot be undone.'
    );
    if (!isConfirmed || !job) return;
    deleteJob(job.id);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col w-full">
        <div className="p-6 space-y-6 max-lg:p-4 max-sm:p-3">
          <Typography variant="heading" size="small">
            Edit Job
          </Typography>
          <div className="rounded-xl border border-neutrals-20 bg-white p-6">
            <Typography variant="text" size="medium" className="text-neutrals-60!">
              Loading job details...
            </Typography>
          </div>
        </div>
      </div>
    );
  }

  if (isError || !job) {
    return (
      <div className="min-h-screen flex flex-col w-full">
        <div className="p-6 space-y-6 max-lg:p-4 max-sm:p-3">
          <Typography variant="heading" size="small">
            Edit Job
          </Typography>
          <div className="rounded-xl border border-neutrals-20 bg-white p-6 space-y-4">
            <Typography variant="text" size="medium" className="text-accents-red!">
              Job not found or failed to load.
            </Typography>
            <button
              type="button"
              onClick={() => navigate(paths.dashboard)}
              className="px-5 py-2.5 border border-neutrals-20 rounded font-semibold text-neutrals-100 hover:bg-neutrals-10 transition-colors"
            >
              Back to Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col w-full">
      <div className="p-6 space-y-6 max-lg:p-4 max-sm:p-3">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <Typography variant="heading" size="small">
            Edit Job
          </Typography>
          <button
            type="button"
            onClick={() => navigate(paths.dashboard)}
            className="px-4 py-2 text-sm font-semibold rounded-md border border-neutrals-20 hover:bg-neutrals-10 transition-colors"
          >
            Back
          </button>
        </div>

        <div className="rounded-xl border border-neutrals-20 bg-white p-5 max-sm:p-3 space-y-6">
          <div>
            <Typography variant="heading" size="small" className="mb-1!">
              {job.title}
            </Typography>
            <Typography variant="text" size="small" className="text-neutrals-60!">
              {job.companyName} • {job.location}
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-neutrals-100 mb-2">
                Job Title
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={e => handleInputChange('title', e.target.value)}
                className="w-full px-4 py-3 border border-neutrals-20 rounded focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-neutrals-100 mb-2">
                Company Name
              </label>
              <input
                type="text"
                value={formData.companyName}
                onChange={e => handleInputChange('companyName', e.target.value)}
                className="w-full px-4 py-3 border border-neutrals-20 rounded focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-neutrals-100 mb-2">Location</label>
              <input
                type="text"
                value={formData.location}
                onChange={e => handleInputChange('location', e.target.value)}
                className="w-full px-4 py-3 border border-neutrals-20 rounded focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-neutrals-100 mb-2">Job Type</label>
              <select
                value={formData.jobtype}
                onChange={e => handleInputChange('jobtype', e.target.value)}
                className="w-full px-4 py-3 border border-neutrals-20 rounded focus:outline-none focus:border-primary transition-colors"
              >
                <option value="">Select Job Type</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
                <option value="Freelance">Freelance</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-neutrals-100 mb-2">Category</label>
              <select
                value={formData.categoryId}
                onChange={e => handleInputChange('categoryId', e.target.value)}
                className="w-full px-4 py-3 border border-neutrals-20 rounded focus:outline-none focus:border-primary transition-colors"
              >
                <option value="">Select Category</option>
                {categories.map((cat: Category) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-neutrals-100 mb-2">
              Job Description
            </label>
            <textarea
              rows={6}
              value={formData.description}
              onChange={e => handleInputChange('description', e.target.value)}
              className="w-full px-4 py-3 border border-neutrals-20 rounded focus:outline-none focus:border-primary transition-colors resize-none"
            />
          </div>

          <div className="flex gap-4 pt-4 flex-wrap">
            <button
              type="button"
              disabled={isUpdating}
              onClick={handleUpdateJob}
              className="px-6 py-3 border border-primary! rounded font-semibold text-white bg-primary! hover:bg-primary/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isUpdating ? 'Updating...' : 'Update Job'}
            </button>
            <button
              type="button"
              disabled={isDeleting}
              onClick={handleDeleteJob}
              className="px-6 py-3 border border-accents-red! rounded font-semibold text-accents-red! bg-accents-red/10 hover:bg-accents-red/20 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isDeleting ? 'Deleting...' : 'Delete Job'}
            </button>
            <button
              type="button"
              onClick={() => navigate(paths.dashboard)}
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
