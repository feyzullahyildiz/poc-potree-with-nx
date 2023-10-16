import React, { useLayoutEffect, useRef, useState } from 'react';
import { ViewerContext } from './viewer-context';

export const Viewer = ({ children }) => {
  const divRef = useRef<any>();
  const [viewer, setViewer] = useState(null);

  useLayoutEffect(() => {
    const www = window as any;
    const v = new www.Potree.Viewer(divRef.current);
    // console.log('VIEWER', v);
    www.viewer = v;

    v.setEDLEnabled(true);
    v.setFOV(60);
    v.setPointBudget(2_000_000);
    v.loadSettingsFromURL();
    // v.setDescription(`Mobile LIDAR with 360 degree image overlays.
    // Click on a sphere to enter 360 view. Click "unfocus" to leave 360 view. <br>
    // Point cloud courtesy of <a href="http://www.helimap.com/">Helimap System SA</a>. Images were downsized for this online demo; Original size is 8000x400.`);

    // v.loadGUI(() => {
    // 	v.setLanguage('en');
    // 	$("#menu_appearance").next().show();
    // 	v.toggleSidebar();
    // });
    setViewer(v);
  }, []);

  return (
    <div ref={divRef} className="FOO BAR" style={{ minHeight: '500px' }}>
      <ViewerContext.Provider value={viewer}>
        {viewer && children}
      </ViewerContext.Provider>
    </div>
  );
};
