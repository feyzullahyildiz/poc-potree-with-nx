import React, { useEffect, useState } from 'react';
import { ViewerContext } from './viewer-context';

export const Viewer = ({ children }) => {
  const [viewer, setViewer] = useState<any>(null);
  useEffect(() => {
    console.log('CREATING VIEWER');
    setViewer(true);
  }, []);
  return (
    <ViewerContext.Provider value={viewer}>
      {viewer && children}
    </ViewerContext.Provider>
  );
};
