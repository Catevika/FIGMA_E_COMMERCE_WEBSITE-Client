export type User = { name: string, username: string, email: string, password: string; };

export type Product = {
  id: number,
  url: string,
  newItem: boolean,
  hotItem: boolean,
  percent: number | undefined,
  buttonLabel: string,
  name: string,
  description: string | undefined,
  price: number,
  oldPrice: number | undefined;
};

export type Service = {
  id: number,
  iconUrl: string,
  title: string,
  description: string;
};

export type Article = {
  id: number,
  articleUrl: string,
  title: string;
};

export type NewsFeedImage = {
  id: number,
  url: string;
};

export type Logo = {
  id: number,
  url: string;
};

export type Category = {
  id: number,
  url: string,
  name: string;
};

