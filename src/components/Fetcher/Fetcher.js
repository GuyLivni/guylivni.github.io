import React from 'react';
import PropTypes from 'prop-types';
import { useFetch } from '../../hooks';
import { general } from '../../constants';

function Fetcher({ action, loader, children }) {
  const [data, loading, error] = useFetch(action);

  if (loading) return loader;
  if (error) return <div>{error}</div>;
  if (!data) return null;

  return children(data);
}

Fetcher.propTypes = {
  children: PropTypes.func.isRequired,
  action: PropTypes.object.isRequired,
  loader: PropTypes.node,
};

Fetcher.defaultProps = {
  loader: <div>{general.LOADING_TEXT}</div>,
};

export default Fetcher;
