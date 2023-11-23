import { prisma } from '../utils/prisma-client';
import { Campus, CampusCreate, CampusRepository } from '../interfaces/campus.interface';

class CampusRepositoryPrisma implements CampusRepository {
  async create(data: CampusCreate): Promise<Campus> {
    const result = await prisma.campus.create({
      data: {
        name: data.name,
      },
    });
    return result;
  }

  async findById(id: string): Promise<Campus | null> {
    const result = await prisma.campus.findUnique({
      where: {
        id,
      },
    });
    return result || null;
  }

  async getAll(): Promise<Campus[]> {
    return prisma.campus.findMany();
  }

  async update(id: string, data: Partial<CampusCreate>): Promise<Campus | null> {
    const result = await prisma.campus.update({
      where: {
        id,
      },
      data,
    });
    return result || null;
  }

  async delete(id: string): Promise<boolean> {
    const result = await prisma.campus.delete({
      where: {
        id,
      },
    });
    return !!result;
  }
}

export { CampusRepositoryPrisma };
