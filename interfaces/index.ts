export interface Case {
  title: string;
  path: string;
  id: string;
}
export interface Product extends Case {
  price: number;
  rate: string;
  isFavorite: boolean;
}
