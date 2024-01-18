export type User = {
  name: string | undefined,
  username: string | undefined,
  email: string | undefined,
  password: string | undefined;
};

export type Product = {
  id: string,
  url: string,
  newItem: boolean,
  hotItem: boolean,
  favorite: boolean,
  percent: number | undefined,
  buttonLabel: string,
  name: string,
  description: string | undefined,
  price: number,
  oldPrice: number | undefined;
};

export type Service = {
  id: string,
  iconUrl: string,
  title: string,
  description: string;
};

export type Article = {
  id: string,
  articleUrl: string,
  title: string;
};

export type NewsFeedImage = {
  id: string,
  url: string;
};

export type Logo = {
  id: string,
  url: string;
};

export type Category = {
  id: string,
  url: string,
  name: string;
};

