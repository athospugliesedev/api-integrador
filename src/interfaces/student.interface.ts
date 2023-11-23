import { Prisma } from '@prisma/client';

export interface Student {
  id: string;
  enrollment: string;
  name: string;
  email: string;
  password: string | null;
  courseId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface StudentCreate {
  enrollment: string;
  name: string;
  email: string;
  password: string | null;
  courseId: string;
}

export interface StudentRepository {
  create(data: StudentCreate): Promise<Student>;
  findByEnrollment(enrollment: string): Promise<Student | null>;
  findById(id: string): Promise<Student | null>;
  getAll(): Promise<Student[]>;
  update(id: string, data: Prisma.StudentUpdateInput): Promise<Student | null>;
  delete(id: string): Promise<boolean>;
}
