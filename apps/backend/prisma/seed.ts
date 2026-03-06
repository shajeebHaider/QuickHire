import { PrismaClient } from "@prisma/client";
import { seedCategories } from "./seeds/category-seeder";
import { seedJobs } from "./seeds/jobs-seeder";
import { seedApplications } from "./seeds/application-seeder";

const prisma = new PrismaClient();

async function main() {
  console.log("Starting seed...");

  await prisma.application.deleteMany();
  await prisma.job.deleteMany();
  await prisma.category.deleteMany();

  const categories = await seedCategories(prisma);
  const jobs = await seedJobs(prisma, categories);
  await seedApplications(prisma, jobs);

  console.log("Seed completed successfully!");
}

main()
  .catch((e) => {
    console.error("Seed failed:", e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });