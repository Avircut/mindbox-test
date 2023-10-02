import { useState, useEffect } from 'react';

export enum Sizes {
  xs= '0px',
  sm= '768px',
  md= '992px',
  lg= '1200px',
}

function isMatch(media:Sizes) {
  const query = `(min-width: ${media})`;
  return window.matchMedia(query).matches;
}

function findClosest(queries: Sizes[]) {
  for (let i = queries.length - 1; i >= 0; i -= 1) {
    if (isMatch(queries[i])) {
      return queries[i];
    }
  }
  return '0px';
}
export const useClosestMedia = () => {
  const [closest, setClosest] = useState('0px');

  useEffect(() => {
    const listener = () => setClosest(findClosest(Object.values(Sizes)));
    listener();
    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener); // Cleanup
  }, []);

  return closest;
};
