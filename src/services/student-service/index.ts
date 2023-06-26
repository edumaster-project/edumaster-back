import { StudentParams } from "@/protocols/protocols";
import studentRepository from "@/repositories/student-repository";

async function createStudent(studentData: StudentParams) {
  
  const createdClass = await studentRepository.create(studentData);

  return createdClass;
}

async function getAllStudents(classId: number) {
  const listClasses = await studentRepository.findAllStudents(classId);

  return listClasses;
}

const studentService = { createStudent, getAllStudents };

export default studentService;
