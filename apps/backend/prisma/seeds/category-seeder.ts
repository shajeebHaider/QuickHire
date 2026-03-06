import { PrismaClient } from "@prisma/client";

export type SeededCategories = {
  engineeringId: number;
  designId: number;
  marketingId: number;
  salesId: number;
  hrId: number;
};

export const seedCategories = async (
  prisma: PrismaClient
): Promise<SeededCategories> => {
  const engineering = await prisma.category.create({
    data: { name: "Engineering", icon: "⚙️" },
  });

  const design = await prisma.category.create({
    data: { name: "Design", icon: "🎨" },
  });

  const marketing = await prisma.category.create({
    data: { name: "Marketing", icon: "📢" },
  });

  const sales = await prisma.category.create({
    data: { name: "Sales", icon: "💼" },
  });

  const hr = await prisma.category.create({
    data: { name: "HR", icon: "👥" },
  });

  return {
    engineeringId: engineering.id,
    designId: design.id,
    marketingId: marketing.id,
    salesId: sales.id,
    hrId: hr.id,
  };
};