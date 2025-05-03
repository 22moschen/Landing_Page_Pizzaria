'use client';

import { useState, useEffect } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
  const [value, setValue] = useState<T>(() => {
     // This part only runs on the client after hydration
     if (typeof window === 'undefined') {
       return typeof initialValue === 'function'
         ? (initialValue as () => T)()
         : initialValue;
     }
    try {
      const jsonValue = window.localStorage.getItem(key);
      if (jsonValue != null) return JSON.parse(jsonValue);
    } catch (error) {
        console.error("Error reading localStorage key “" + key + "”:", error);
    }

    if (typeof initialValue === 'function') {
      return (initialValue as () => T)();
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    // This effect runs only on the client
    try {
       window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error("Error writing to localStorage key “" + key + "”:", error);
    }
  }, [key, value]);

  return [value, setValue] as [typeof value, typeof setValue];
}
