import { useEffect, useState, SetStateAction, Dispatch } from 'react';

const windowExists = typeof window !== 'undefined';

function useLocalStorage<T>(
  key: string,
  initialValue: T | (() => T)
): [T, Dispatch<SetStateAction<T>>] {
  const readValue = () => {
    if (windowExists) {
      try {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        console.log(error);
        return initialValue;
      }
    }
  };

  const [storedValue, setStoredValue] = useState<T>(readValue);

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
        const item = window.localStorage.getItem(key);
        setStoredValue(item ? JSON.parse(item) : false);
      } catch (error) {
        console.log(error);
      }
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

export default useLocalStorage;
