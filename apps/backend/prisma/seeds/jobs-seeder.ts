import { PrismaClient } from "@prisma/client";
import { SeededCategories } from "./category-seeder";

export type SeededJobs = {
  job1Id: number;
  job2Id: number;
  job3Id: number;
  job4Id: number;
  job5Id: number;
};

export const seedJobs = async (
  prisma: PrismaClient,
  categories: SeededCategories
): Promise<SeededJobs> => {
  const job1 = await prisma.job.create({
    data: {
      title: "Senior Full Stack Developer",
      description: "Looking for experienced full stack developer with 5+ years",
      companyName: "Tech Corp",
      location: "San Francisco, CA",
      jobtype: "Full-time",
      categoryId: categories.engineeringId,
      isFeatured: true,
    },
  });

  const job2 = await prisma.job.create({
    data: {
      title: "React Developer",
      description: "Join our frontend team building modern web applications",
      companyName: "StartupXYZ",
      location: "New York, NY",
      jobtype: "Full-time",
      categoryId: categories.engineeringId,
      isFeatured: true,
    },
  });

  const job3 = await prisma.job.create({
    data: {
      title: "UI/UX Designer",
      description: "Create beautiful user experiences for mobile apps",
      companyName: "Design Studio",
      location: "Austin, TX",
      jobtype: "Contract",
      categoryId: categories.designId,
      isFeatured: false,
    },
  });

  const job4 = await prisma.job.create({
    data: {
      title: "Digital Marketing Manager",
      description: "Lead our digital marketing strategy and campaigns",
      companyName: "Global Brands Inc",
      location: "Los Angeles, CA",
      jobtype: "Full-time",
      categoryId: categories.marketingId,
      isFeatured: false,
    },
  });

  const job5 = await prisma.job.create({
    data: {
      title: "Backend Engineer (Node.js)",
      description: "Build scalable backend services with Node.js and PostgreSQL",
      companyName: "Cloud Systems",
      location: "Remote",
      jobtype: "Full-time",
      categoryId: categories.engineeringId,
      isFeatured: true,
    },
  });

  return {
    job1Id: job1.id,
    job2Id: job2.id,
    job3Id: job3.id,
    job4Id: job4.id,
    job5Id: job5.id,
  };
};