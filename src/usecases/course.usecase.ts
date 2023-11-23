import { Course, CourseCreate, CourseRepository } from '../interfaces/course.interface';
import { CourseRepositoryPrisma } from '../repositories/course.repository';

class CourseUseCase {
  private courseRepository: CourseRepository;
  
  constructor() {
    this.courseRepository = new CourseRepositoryPrisma();
  }

  async create(data: CourseCreate): Promise<Course> {
    const result = await this.courseRepository.create(data);
    return result;
  }

  async findById(id: string): Promise<Course | null> {
    const result = await this.courseRepository.findById(id);
    return result;
  }

  async getAll(): Promise<Course[]> {
    const result = await this.courseRepository.getAll();
    return result;
  }

  async update(id: string, data: Partial<CourseCreate>): Promise<Course | null> {
    const result = await this.courseRepository.update(id, data);
    return result;
  }

  async delete(id: string): Promise<boolean> {
    const result = await this.courseRepository.delete(id);
    return result;
  }
}

export { CourseUseCase };
