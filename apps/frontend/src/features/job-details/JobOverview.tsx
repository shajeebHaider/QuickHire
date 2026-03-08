import React from 'react'
import Typography from '../../components/base/Typography'

interface JobOverviewProps {
  job: {
    createdAt: string;
    location: string;
    jobtype: string;
    category?: {
      name: string;
    };
  }
}

const JobOverview = ({ job }: JobOverviewProps) => {
  return (
             <div className="bg-white p-8 mb-6">
            <Typography variant="heading" size="small" className="mb-6!">
              Job Overview
            </Typography>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-accents-blue/10 rounded flex items-center justify-center text-accents-blue shrink-0">
                  📅
                </div>
                <div>
                  <Typography variant="text" size="small" className="text-neutrals-60! block">
                    Job Posted
                  </Typography>
                  <Typography variant="text" size="medium" className="font-semibold">
                    {new Date(job.createdAt).toLocaleDateString('en-US', { 
                      month: 'long', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}
                  </Typography>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-accents-green/10 rounded flex items-center justify-center text-accents-green shrink-0">
                  📍
                </div>
                <div>
                  <Typography variant="text" size="small" className="text-neutrals-60! block">
                    Location
                  </Typography>
                  <Typography variant="text" size="medium" className="font-semibold">
                    {job.location}
                  </Typography>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-accents-yellow/10 rounded flex items-center justify-center text-accents-yellow shrink-0">
                  ⏰
                </div>
                <div>
                  <Typography variant="text" size="small" className="text-neutrals-60! block">
                    Job Type
                  </Typography>
                  <Typography variant="text" size="medium" className="font-semibold">
                    {job.jobtype}
                  </Typography>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center text-primary shrink-0">
                  🏷️
                </div>
                <div>
                  <Typography variant="text" size="small" className="text-neutrals-60! block">
                    Category
                  </Typography>
                  <Typography variant="text" size="medium" className="font-semibold">
                    {job.category?.name || 'N/A'}
                  </Typography>
                </div>
              </div>
            </div>
          </div>
  )
}

export default JobOverview