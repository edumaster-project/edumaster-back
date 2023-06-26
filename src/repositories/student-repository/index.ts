import { prisma } from "@/config";
import { Prisma } from "@prisma/client";

async function create(data: Prisma.StudentUncheckedCreateInput) {
  return prisma.student.create({
    data,
  });
}

async function findAllStudents(classId: number) {
  return prisma.student.findMany({
    where: {
      classId,
    },
  });
}
const studentRepository = {
  create,
  findAllStudents,
};

export default studentRepository;
