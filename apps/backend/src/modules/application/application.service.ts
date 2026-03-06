import { prisma } from "../../lib/prisma";

export const getAllApplications = async () => {
  return prisma.application.findMany({
    include: {
      job: true,
    },
  });
};

export const getApplicationById = async (id: number) => {
  return prisma.application.findUnique({
    where: { id },
    include: {
      job: true,
    },
  });
};

export const createApplication = async (data: { applicantName: string; applicantEmail: string; resumeLink: string; jobId: number, coverNote: string, expectedSalary: number}) => {
  const { applicantName, applicantEmail, resumeLink, jobId, coverNote, expectedSalary } = data;
  return prisma.application.create({
    data: {
      applicantName,
      applicantEmail,
      resumeLink,
      jobId,
      coverNote,
      expectedSalary,
    },
    include: {
      job: true,
    },
  });
}

export const deleteApplication = async (id: number) => {
  return prisma.application.delete({ where: { id } });
};