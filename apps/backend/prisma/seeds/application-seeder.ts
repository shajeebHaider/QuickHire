import { PrismaClient } from "@prisma/client";
import { SeededJobs } from "./jobs-seeder";

export const seedApplications = async (
  prisma: PrismaClient,
  jobs: SeededJobs
): Promise<void> => {
  await prisma.application.createMany({
    data: [
      {
        jobId: jobs.job1Id,
        applicantName: "John Doe",
        applicantEmail: "john@example.com",
        resumeLink: "https://example.com/resume/john",
        expectedSalary: 120000,
        coverNote: "Very interested in this position",
        isHired: false,
      },
      {
        jobId: jobs.job1Id,
        applicantName: "Jane Smith",
        applicantEmail: "jane@example.com",
        resumeLink: "https://example.com/resume/jane",
        expectedSalary: 130000,
        coverNote: "Great match for the role",
        isHired: true,
      },
      {
        jobId: jobs.job2Id,
        applicantName: "Bob Wilson",
        applicantEmail: "bob@example.com",
        resumeLink: "https://example.com/resume/bob",
        expectedSalary: 95000,
        coverNote: "Excited about React development",
        isHired: false,
      },
      {
        jobId: jobs.job3Id,
        applicantName: "Sarah Johnson",
        applicantEmail: "sarah@example.com",
        resumeLink: "https://example.com/resume/sarah",
        expectedSalary: 85000,
        coverNote: "Portfolio available at portfolio.com",
        isHired: false,
      },
      {
        jobId: jobs.job5Id,
        applicantName: "Mike Chen",
        applicantEmail: "mike@example.com",
        resumeLink: "https://example.com/resume/mike",
        expectedSalary: 125000,
        coverNote: "10 years backend experience",
        isHired: true,
      },
    ],
  });
};