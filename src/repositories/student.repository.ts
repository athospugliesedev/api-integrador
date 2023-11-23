import { prisma } from '../utils/prisma-client';
import { Student, StudentCreate, StudentRepository } from '../interfaces/student.interface';

class StudentRepositoryPrisma implements StudentRepository {
  async create(data: StudentCreate): Promise<Student> {
    const result = await prisma.student.create({
      data: {
        enrollment: data.enrollment,
        name: data.name,
        courseId: data.courseId,
        email: data.email,
        password: data.password
      },
    });
    return result;
  }

  async findByEnrollment(enrollment: string): Promise<Student | null> {
    const result = await prisma.student.findFirst({
      where: {
        enrollment,
      },
    });

    return result || null;
  }

  async findById(id: string): Promise<Student | null> {
    const result = await prisma.student.findUnique({
      where: {
        id,
      },
    });

    return result || null;
  }

  async getAll(): Promise<Student[]> {
    return prisma.student.findMany();
  }

  async update(id: string, data: Partial<StudentCreate>): Promise<Student | null> {
    const result = await prisma.student.update({
      where: {
        id,
      },
      data,
    });

    return result || null;
  }

  async delete(id: string): Promise<boolean> {
    const result = await prisma.student.delete({
      where: {
        id,
      },
    });

    return !!result;
  }
}

export { StudentRepositoryPrisma };
