import { prisma } from '../utils/prisma-client';
import { Course, CourseCreate, CourseRepository } from '../interfaces/course.interface';

class CourseRepositoryPrisma implements CourseRepository {
  async create(data: CourseCreate): Promise<Course> {
    const result = await prisma.course.create({
      data,
    });
    return result;
  }

  async findById(id: string): Promise<Course | null> {
    const result = await prisma.course.findUnique({
      where: {
        id,
      },
    });

    return result || null;
  }

  async getAll(): Promise<Course[]> {
    return prisma.course.findMany();
  }

  async update(id: string, data: Partial<CourseCreate>): Promise<Course | null> {
    const result = await prisma.course.update({
      where: {
        id,
      },
      data,
    });

    return result || null;
  }

  async delete(id: string): Promise<boolean> {
    const result = await prisma.course.delete({
      where: {
        id,
      },
    });

    return !!result;
  }
}

export { CourseRepositoryPrisma };
