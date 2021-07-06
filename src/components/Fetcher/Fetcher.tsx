import React, { ReactNode, ReactElement } from 'react';
import { useFetch } from '../../hooks';
import { general } from '../../constants';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type Action = {
  method: 'get' | 'post';
  responseType: 'json';
  url: string;
};

type FetcherProps = {
  loader: ReactNode;
  action: Action;
  children(data: Array<Record<string, unknown>>): ReactElement;
};

const DefaultLoader = () => <>{general.LOADING_TEXT}</>;

const Fetcher = ({
  action,
  loader = DefaultLoader,
  children,
}: FetcherProps) => {
  const { status, data, error } = useFetch<Post[]>(action.url);

  if (status === 'fetching') return loader;
  if (error) return <>{error}</>;
  if (!data) return null;

  return children(data);
};

export default Fetcher;
