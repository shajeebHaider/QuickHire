import React from 'react'
import Typography from '../../components/base/Typography'

interface JobDescriptionProps { 
  description: string;
}

const JobDescription = ({ description }: JobDescriptionProps) => {
  return (
          <div className="bg-white p-10">
            <Typography variant="heading" size="small" className="mb-4!">
              Job Description
            </Typography>
            <Typography variant="text" size="medium" className="text-neutrals-80! mb-6 whitespace-pre-line">
              {description}
            </Typography>

            <Typography variant="heading" size="small" className="mb-4! mt-8!">
              Responsibilities
            </Typography>
            <ul className="list-disc list-inside space-y-2 text-neutrals-80">
              <li>Develop and maintain high-quality software applications</li>
              <li>Collaborate with cross-functional teams</li>
              <li>Write clean, maintainable code</li>
              <li>Participate in code reviews and team meetings</li>
            </ul>

            <Typography variant="heading" size="small" className="mb-4! mt-8!">
              Requirements
            </Typography>
            <ul className="list-disc list-inside space-y-2 text-neutrals-80">
              <li>5+ years of relevant experience</li>
              <li>Strong problem-solving skills</li>
              <li>Excellent communication abilities</li>
              <li>Bachelor's degree in Computer Science or related field</li>
            </ul>
          </div>
  )
}

export default JobDescription