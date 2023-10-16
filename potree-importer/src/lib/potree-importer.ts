import { generateScriptTag } from './generate-script-tag';

export async function potreeImporter() {
  const scripts = [
    generateScriptTag('potree/potree.js'),
    generateScriptTag('potree/shader.js'),
  ];
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
