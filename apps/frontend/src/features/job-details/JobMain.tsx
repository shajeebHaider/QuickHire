import Typography from '../../components/base/Typography';
import Label from '../../components/base/Label';
import JobDescription from './JobDescription';

interface JobMainProps {
  job: {
    title: string;
    companyName: string;
    companyLogo?: string;
    location: string;
    jobtype: string;
    category?: {
      name: string;
      icon?: string;
    };
    isFeatured?: boolean;
    description: string;
  }
}


const JobMain = ({job}: JobMainProps) => {
  return (
    <div className="col-span-2 max-lg:col-span-1">
          <div className="bg-white p-10 mb-8">
            <div className="flex items-start gap-6 mb-6">
              <div className="w-16 h-16 shrink-0">
                {job.companyLogo ? (
                  <img src={job.companyLogo} alt={job.companyName} className="w-full h-full object-contain" />
                ) : (
                  <div className="w-full h-full bg-neutrals-20 flex items-center justify-center text-2xl">
                    {job.category?.icon || '💼'}
                  </div>
                )}
              </div>
              <div className="flex-1">
                <Typography variant="heading" size="medium" className="mb-2!">
                  {job.title}
                </Typography>
                <Typography variant="text" size="medium" className="text-neutrals-60! mb-4!">
                  {job.companyName} • {job.location}
                </Typography>
                <div className="flex gap-2 flex-wrap">
                  <Label text={job.jobtype} variant="primary" />
                  {job.category && <Label text={job.category.name} variant="success" />}
                  {job.isFeatured && <Label text="Featured" variant="warning" />}
                </div>
              </div>
            </div>
          </div>
          <JobDescription description={job.description} />
        </div>

  )
}

export default JobMain