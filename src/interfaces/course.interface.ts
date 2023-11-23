export interface Course {
  id: string;
  name: string;
  campusId: string;
}

export interface CourseCreate {
  name: string;
  campusId: string;
}

export interface CourseRepository {
  create(data: CourseCreate): Promise<Course>;
  findById(id: string): Promise<Course | null>;
  getAll(): Promise<Course[]>;
  update(id: string, data: Partial<CourseCreate>): Promise<Course | null>;
  delete(id: string): Promise<boolean>;
}
