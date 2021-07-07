import React, { ReactNode, ReactElement } from 'react';
import { useFetchQuery } from '../../hooks';
import { general } from '../../constants';
import { Action } from '../../types/Api';

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
  const { isLoading, data, error, isError } = useFetchQuery(action);

  if (isLoading) return loader as JSX.Element;
  if (isError) return <>{error}</>;
  if (!data) return null;

  return children(data) as JSX.Element;
};

export default Fetcher;
