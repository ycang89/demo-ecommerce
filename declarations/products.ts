export interface ResponseProduct {
  id: number,
  title: string,
  image: string,
  description: string,
  price: number,
  stars: number,
  currency: string,
};

export interface Product extends ResponseProduct {
  currency: string;
};

export type Products = Product[]