import { useEffect, useRef, useState } from 'react';
import { potreeImporter } from './potree-importer';

interface Props {
  children: JSX.Element;
}
export const PotreeLoaderProvider: React.FC<Props> = ({ children }) => {
  const [loaded, setLoaded] = useState(false);
  const isStartedRef = useRef(false);
  useEffect(() => {
    if (isStartedRef.current === true) {
      return;
    }
    isStartedRef.current = true;
    console.log('USE EFFECT');
    potreeImporter().then(() => {
      setLoaded(true);
    });
  }, []);
  return loaded ? children : null;
};
