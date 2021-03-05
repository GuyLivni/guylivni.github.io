import { useEffect, useState } from 'react';

const windowExists = typeof window !== 'undefined';

export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    if (windowExists) {
      try {
        const item = window.localStorage.getItem(key) || initialValue;
        return JSON.parse(item);
      } catch (error) {
        console.log(error);
        return initialValue;
      }
    }
  });

  useEffect(() => {
    if (windowExists) {
      try {
        window.localStorage.setItem(key, JSON.stringify(storedValue));
        setStoredValue(storedValue);
      } catch (error) {
        console.log(error);
      }
    }
  }, [key, storedValue]);

  useEffect(() => {
    if (windowExists) {
      try {
        const item = JSON.parse(window.localStorage.getItem(key)) || false;
        setStoredValue(item);
      } catch (error) {
        console.log(error);
      }
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

export default useLocalStorage;
