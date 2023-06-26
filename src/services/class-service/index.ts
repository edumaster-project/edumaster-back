import { conflictError } from "@/errors";
import { ClassParams } from "@/protocols/protocols";
import classRepository from "@/repositories/class-repository";

async function createClasses(userId: number, classData: ClassParams) {
  const verifyDuplicatedName = await classRepository.findName(
    userId,
    classData.name
  );
  console.log(verifyDuplicatedName);

  if (verifyDuplicatedName)
    throw conflictError("There is already a class with given name");

  const createdClass = await classRepository.create(userId, classData);

  return createdClass;
}

async function getAllClasses(userId: number) {
  const listClasses = await classRepository.findClasses(userId);

  return listClasses;
}

const classService = { createClasses, getAllClasses };

export default classService;
