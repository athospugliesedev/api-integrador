export interface Campus {
  id: string;
  name: string;
}

export interface CampusCreate {
  name: string;
}

export interface CampusRepository {
  create(data: CampusCreate): Promise<Campus>;
  findById(id: string): Promise<Campus | null>;
  getAll(): Promise<Campus[]>;
  update(id: string, data: Partial<CampusCreate>): Promise<Campus | null>;
  delete(id: string): Promise<boolean>;
}
