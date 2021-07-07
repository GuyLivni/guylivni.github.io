export type Action = {
  queryKey: string;
  url: string;
};

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
