export type User = { name: string, username: string, email: string, password: string; };

export type Product = {
  id: number,
  url: string,
  newItem: boolean,
  percent: number | undefined,
  buttonLabel: string,
  name: string,
  price: number,
  oldPrice: number | undefined;
};

export type Products = Product[];

export type Service = {
  id: number,
  iconUrl: string,
  title: string,
  description: string;
};

export type Services = Service[];

export type Article = {
  id: number,
  articleUrl: string,
  title: string;
};