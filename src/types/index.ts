export interface Category {
  id: number;
  name?: string;
  fields: Field[];
}

export interface Field {
  id: number;
  title: string;
  type: string;
}
