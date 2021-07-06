import React, { ReactNode, ReactElement } from 'react';
import { useFetch } from '../../hooks';
import { general } from '../../constants';
import { Action, Post } from '../../types/Api';

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
}: FetcherProps): JSX.Element | null => {
  const { status, data, error } = useFetch<Post[]>(action.url);

  if (status === 'fetching') return loader as JSX.Element;
  if (error) return <>{error}</>;
  if (!data) return null;

  return children(data) as JSX.Element;
};

export default Fetcher;
