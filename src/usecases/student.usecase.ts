import { Student, StudentCreate, StudentRepository } from '../interfaces/student.interface';
import { StudentRepositoryPrisma } from '../repositories/student.repository';

class StudentUseCase {
  private studentRepository: StudentRepository;

  constructor() {
    this.studentRepository = new StudentRepositoryPrisma();
  }

  async create({ enrollment, name, courseId, email, password }: StudentCreate): Promise<Student> {
    const verifyIfStudentExists = await this.studentRepository.findByEnrollment(enrollment);
    if (verifyIfStudentExists) {
      throw new Error('Student already exists');
    }
    const result = await this.studentRepository.create({ enrollment, name, courseId, email, password });

    return result;
  }

  async getById(id: string): Promise<Student | null> {
    return this.studentRepository.findById(id);
  }

  async getAll(): Promise<Student[]> {
    return this.studentRepository.getAll();
  }

  async update(id: string, data: Partial<StudentCreate>): Promise<Student | null> {
    return this.studentRepository.update(id, data);
  }

  async delete(id: string): Promise<boolean> {
    return this.studentRepository.delete(id);
  }
}

export { StudentUseCase };
