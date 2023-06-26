import { prisma } from "@/config";
import { ClassParams } from "@/protocols/protocols";

async function create(userId: number, params: ClassParams) {
  return prisma.classes.create({
    data: {
      userId,
      ...params,
    },
  });
}

async function findName(userId: number, name: string) {
  return prisma.classes.findFirst({
    where: {
      userId,
      name,
    },
  });
}

async function findClasses(userId: number) {
  return prisma.classes.findMany({
    where: { userId },
  });
}

const classRepository = { create, findName, findClasses };

export default classRepository;
