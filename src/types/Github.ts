export type Commit = {
  url: string;
  message: string;
};

export type Repo = {
  url: string;
  message: string;
  name: string;
};

export type PushEvent = {
  type: 'PushEvent';
  payload: { commits: Commit[] };
  repo: Repo;
};

export type PushEvents = PushEvent[];
