import { useState, useEffect } from 'react';
import axios from 'axios';
import { general } from '../constants';

function useFetch(action, initialData) {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchUrl() {
      try {
        if (data) return Promise.resolve();
        const fetchResult = await axios(action);
        setData(fetchResult.data);
      } catch (error) {
        setError(error.message || general.FETCH_ERROR);
      } finally {
        setLoading(false);
      }
    }

    fetchUrl();
  }, [action, data]);

  return [data, loading, error];
}

export default useFetch;
