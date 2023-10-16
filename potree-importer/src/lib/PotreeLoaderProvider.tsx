import { useEffect, useRef, useState } from 'react';
import { potreeImporter } from './potree-importer';

interface Props {
  children: JSX.Element;
  urlPrefix?: string;
}
export const PotreeLoaderProvider: React.FC<Props> = ({
  urlPrefix = '',
  children,
}) => {
  const [loaded, setLoaded] = useState(false);
  const isStartedRef = useRef(false);
  useEffect(() => {
    if (isStartedRef.current === true) {
      return;
    }
    isStartedRef.current = true;
    console.log('USE EFFECT');
    potreeImporter(urlPrefix).then(() => {
      setLoaded(true);
    });
  }, []);
  return loaded ? children : null;
};
