import { generateScriptTag } from './generate-script-tag';

const urls = [
  'potree/libs/jquery/jquery-3.1.1.min.js',
  'potree/libs/spectrum/spectrum.js',
  'potree/libs/perfect-scrollbar/js/perfect-scrollbar.jquery.js',
  'potree/libs/jquery-ui/jquery-ui.min.js',
  'potree/libs/three.js/build/three.min.js',
  'potree/libs/other/BinaryHeap.js',
  'potree/libs/tween/tween.min.js',
  'potree/libs/d3/d3.js',
  'potree/libs/proj4/proj4.js',
  'potree/libs/openlayers3/ol.js',
  'potree/libs/i18next/i18next.js',
  'potree/libs/jstree/jstree.js',
  'potree/build/potree/potree.js',
  'potree/libs/plasio/js/laslaz.js',
];
export async function potreeImporter(urlPrefix = '') {
  // const scripts = [
  //   generateScriptTag('potree/potree/potree.js'),
  //   // generateScriptTag('potree/shader.js'),
  // ];
  const scripts = urls.map((url) => generateScriptTag(urlPrefix + url));
  for (const script of scripts) {
    const isImportedAlready = false;

    if (!isImportedAlready) {
      document.body.append(script);
      const isSuccess = await new Promise<boolean>((resolve) => {
        script.addEventListener('load', () => {
          resolve(true);
        });
        script.addEventListener('error', (e: any) => {
          console.log('ERROR', e);
          resolve(false);
        });
      });
      if (!isSuccess) {
        console.error('LOADING FAILED', script);
      }
    }
  }
}
