import { PrismaClient } from "@prisma/client";
import { SeededCategories } from "./category-seeder";
import path from "path";
import { uploadToCloudinary } from "../seed-helpers/uploadToCloudinary";

const assetsDir = path.join(__dirname, "assets", "logo");


export type SeededJobs = {
  job1Id: number;
  job2Id: number;
  job3Id: number;
  job4Id: number;
  job5Id: number;
  job6Id: number;
  job7Id: number;
  job8Id: number;
  job9Id: number;
  job10Id: number;
  job11Id: number;
  job12Id: number;
  job13Id: number;
  job14Id: number;
  job15Id: number;
  job16Id: number;
  job17Id: number;
  job18Id: number;
  job19Id: number;
  job20Id: number;
};

export const seedJobs = async (
  prisma: PrismaClient,
  categories: SeededCategories
): Promise<SeededJobs> => {

   const logos = {
    emailMarketing: await uploadToCloudinary(`${assetsDir}/email-marketing.png`),
    canva: await uploadToCloudinary(`${assetsDir}/canva.png`),
    dropbox: await uploadToCloudinary(`${assetsDir}/dropbox.png`),
    twitter: await uploadToCloudinary(`${assetsDir}/twitter.png`),
    designer: await uploadToCloudinary(`${assetsDir}/designer.png`),
    product: await uploadToCloudinary(`${assetsDir}/product.png`),
    pitch: await uploadToCloudinary(`${assetsDir}/pitch.png`),
    brand: await uploadToCloudinary(`${assetsDir}/brand-strategist.png`),
  };


  const job1 = await prisma.job.create({
    data: {
      companyLogo: logos.emailMarketing,
      title: "Software Engineer",
      description: "Looking for experienced full stack developer with 5+ years",
      companyName: "Tech Corp",
      location: "San Francisco",
      jobtype: "Full-time",
      categoryId: categories.engineeringId,
      isFeatured: true,
    },
  });

  const job2 = await prisma.job.create({
    data: {
      companyLogo: logos.canva,
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
      companyLogo: logos.designer,
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
      companyLogo: logos.product,
      title: "Marketing Manager",
      description: "Lead our digital marketing strategy and campaigns",
      companyName: "Global Inc",
      location: "Los Angeles, CA",
      jobtype: "Full-time",
      categoryId: categories.marketingId,
      isFeatured: false,
    },
  });

  const job5 = await prisma.job.create({
    data: {
      companyLogo: logos.dropbox,
      title: "Backend Engineer (Node.js)",
      description: "Build scalable backend services with Node.js and PostgreSQL",
      companyName: "Cloud Systems",
      location: "Remote",
      jobtype: "Full-time",
      categoryId: categories.engineeringId,
      isFeatured: true,
    },
  });

  const job6 = await prisma.job.create({
    data: {
      companyLogo: logos.twitter,
      title: "Content Writer",
      description: "Create engaging content for our marketing materials",
      companyName: "Media Works",
      location: "Remote",
      jobtype: "Part-time",
      categoryId: categories.contentId,
      isFeatured: true,
    },
  });

  const job7 = await prisma.job.create({
    data: {
      companyLogo: logos.brand,
      title: "DevOps Engineer",
      description: "Manage cloud infrastructure and CI/CD pipelines",
      companyName: "Cloud Systems",
      location: "Seattle, WA",
      jobtype: "Full-time",
      categoryId: categories.engineeringId,
      isFeatured: true,
    },
  });

  const job8 = await prisma.job.create({
    data: {
      companyLogo: logos.pitch,
      title: "Backend Engineer",
      description: "Build scalable backend services with Node.js and PostgreSQL",
      companyName: "Tech Innovations",
      location: "Remote",
      jobtype: "Full-time",
      categoryId: categories.engineeringId,
      isFeatured: true,
    },
  });

  const job9 = await prisma.job.create({
    data: {
      companyLogo: logos.canva,
      title: "Product Designer",
      description: "Design innovative product experiences",
      companyName: "DesignHub",
      location: "Boston, MA",
      jobtype: "Full-time",
      categoryId: categories.designId,
      isFeatured: false,
    },
  });

  const job10 = await prisma.job.create({
    data: {
      companyLogo: logos.emailMarketing,
      title: "Data Analyst",
      description: "Analyze business data and create insights",
      companyName: "DataCorp",
      location: "Chicago, IL",
      jobtype: "Full-time",
      categoryId: categories.analyticsId,
      isFeatured: true,
    },
  });

  const job11 = await prisma.job.create({
    data: {
      companyLogo: logos.designer,
      title: "Sales Representative",
      description: "Drive sales and build client relationships",
      companyName: "SalesPro",
      location: "Dallas, TX",
      jobtype: "Full-time",
      categoryId: categories.salesId,
      isFeatured: false,
    },
  });

  const job12 = await prisma.job.create({
    data: {
      companyLogo: logos.product,
      title: "HR Manager",
      description: "Manage recruitment and employee relations",
      companyName: "PeopleFirst",
      location: "Miami, FL",
      jobtype: "Full-time",
      categoryId: categories.hrId,
      isFeatured: false,
    },
  });

  const job13 = await prisma.job.create({
    data: {
      companyLogo: logos.dropbox,
      title: "Mobile Developer (iOS)",
      description: "Build native iOS applications using Swift",
      companyName: "AppWorks",
      location: "San Diego, CA",
      jobtype: "Full-time",
      categoryId: categories.engineeringId,
      isFeatured: true,
    },
  });

  const job14 = await prisma.job.create({
    data: {
      companyLogo: logos.twitter,
      title: "Social Media Manager",
      description: "Manage social media presence and engagement",
      companyName: "SocialBuzz",
      location: "Remote",
      jobtype: "Part-time",
      categoryId: categories.marketingId,
      isFeatured: false,
    },
  });

  const job15 = await prisma.job.create({
    data: {
      companyLogo: logos.brand,
      title: "Financial Analyst",
      description: "Analyze financial data and prepare reports",
      companyName: "FinanceHub",
      location: "New York, NY",
      jobtype: "Full-time",
      categoryId: categories.financeId,
      isFeatured: true,
    },
  });

  const job16 = await prisma.job.create({
    data: {
      companyLogo: logos.pitch,
      title: "QA Engineer",
      description: "Ensure software quality through comprehensive testing",
      companyName: "QualityFirst",
      location: "Austin, TX",
      jobtype: "Contract",
      categoryId: categories.engineeringId,
      isFeatured: false,
    },
  });

  const job17 = await prisma.job.create({
    data: {
      companyLogo: logos.canva,
      title: "Graphic Designer",
      description: "Create visual content for marketing campaigns",
      companyName: "Creative Studios",
      location: "Portland, OR",
      jobtype: "Full-time",
      categoryId: categories.designId,
      isFeatured: true,
    },
  });

  const job18 = await prisma.job.create({
    data: {
      companyLogo: logos.emailMarketing,
      title: "Customer Success Manager",
      description: "Ensure customer satisfaction and retention",
      companyName: "CustomerCare Inc",
      location: "Remote",
      jobtype: "Full-time",
      categoryId: categories.salesId,
      isFeatured: false,
    },
  });

  const job19 = await prisma.job.create({
    data: {
      companyLogo: logos.designer,
      title: "Business Analyst",
      description: "Bridge business needs with technical solutions",
      companyName: "BizTech",
      location: "Denver, CO",
      jobtype: "Full-time",
      categoryId: categories.analyticsId,
      isFeatured: true,
    },
  });

  const job20 = await prisma.job.create({
    data: {
      companyLogo: logos.product,
      title: "Project Manager",
      description: "Lead cross-functional teams to deliver projects",
      companyName: "ProjectPro",
      location: "Atlanta, GA",
      jobtype: "Full-time",
      categoryId: categories.engineeringId,
      isFeatured: false,
    },
  });

  return {
    job1Id: job1.id,
    job2Id: job2.id,
    job3Id: job3.id,
    job4Id: job4.id,
    job5Id: job5.id,
    job6Id: job6.id,
    job7Id: job7.id,
    job8Id: job8.id,
    job9Id: job9.id,
    job10Id: job10.id,
    job11Id: job11.id,
    job12Id: job12.id,
    job13Id: job13.id,
    job14Id: job14.id,
    job15Id: job15.id,
    job16Id: job16.id,
    job17Id: job17.id,
    job18Id: job18.id,
    job19Id: job19.id,
    job20Id: job20.id,
  };
};