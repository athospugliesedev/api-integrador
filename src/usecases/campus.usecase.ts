import { Campus, CampusCreate, CampusRepository } from '../interfaces/campus.interface';
import { CampusRepositoryPrisma } from '../repositories/campus.repository';

class CampusUseCase {
  private campusRepository: CampusRepository;

  constructor() {
    this.campusRepository = new CampusRepositoryPrisma();
  }

  async create({ name }: CampusCreate): Promise<Campus> {
    const result = await this.campusRepository.create({ name });
    return result;
  }

  async findById(id: string): Promise<Campus | null> {
    const result = await this.campusRepository.findById(id);
    return result;
  }

  async getAll(): Promise<Campus[]> {
    const result = await this.campusRepository.getAll();
    return result;
  }

  async update(id: string, data: Partial<CampusCreate>): Promise<Campus | null> {
    const result = await this.campusRepository.update(id, data);
    return result;
  }

  async delete(id: string): Promise<boolean> {
    const result = await this.campusRepository.delete(id);
    return result;
  }
}

export { CampusUseCase };
