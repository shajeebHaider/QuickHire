import { prisma } from "../../lib/prisma";

export const getAllCategories = async () => {
  return prisma.category.findMany({
    include: {
      jobs: true,
    },
  });
};

export const getCategoryById = async (id: number) => {
  return prisma.category.findUnique({
    where: { id },
    include: {
      jobs: true,
    },
  });
};

export const createCategory = async (data: { name: string; icon: string }) => {
  return prisma.category.create({
    data: {
      name: data.name,
      icon: data.icon,
    },
  });
};

export const updateCategory = async (
  id: number,
  data: { name?: string; icon?: string }
) => {
  return prisma.category.update({
    where: { id },
    data,
  });
};

export const deleteCategory = async (id: number) => {
  return prisma.category.delete({ where: { id } });
};