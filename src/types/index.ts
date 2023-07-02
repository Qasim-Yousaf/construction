export interface Category {
  id: number;
  name?: string;
  fileds: Field[];
}

export interface Field {
  id: number;
  title: string;
  type: string;
}
