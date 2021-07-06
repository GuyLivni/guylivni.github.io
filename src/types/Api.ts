export type Action = {
  method: 'get' | 'post';
  responseType: 'json';
  url: string;
};

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
