const { prisma } = require("../../lib/prisma");

export const getAllJobs = async () => {
  try {
    const jobs = await prisma.job.findMany({
      include: {
        category: true,
      },
    });
    return jobs;
  } catch (error) {
    console.error("Error fetching jobs:", error);
    throw error;
  }
};

export const getJobById = async (id: number) => {
  try {
    const job = await prisma.job.findUnique({
      where: { id },
      include: {
        category: true,
      },
    });
    return job;
  } catch (error) {
    console.error(`Error fetching job with id ${id}:`, error);
    throw error;
  }
};

export const createJob = async (data: {
  title: string;
  description: string;
  companyName: string;
  location: string;
  jobType: string;
  categoryId: number;
}) => {
  try {
    const job = await prisma.job.create({
      data: {
        title: data.title,
        companyName: data.companyName,
        location: data.location,
        description: data.description,
        jobtype: data.jobType,
        category: {
          connect: { id: data.categoryId },
        },
      },
      include: {
        category: true,
      },
    });
    return job;
  } catch (error) {
    console.error("Error creating job:", error);
    throw error;
  }
};

export const deleteJob = async (id: number) => {
  return prisma.job.delete({ where: { id } });
};



