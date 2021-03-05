import { useState, useEffect } from 'react';
import * as Cookies from 'js-cookie';

export function useCookie(key, initialValue, options) {
  const [item, setItemValue] = useState(() => {
    return Cookies.get(key) || initialValue;
  });

  useEffect(() => {
    Cookies.set(key, item, options);
  }, [key, item, options]);

  return [item, setItemValue];
}

export default useCookie;
