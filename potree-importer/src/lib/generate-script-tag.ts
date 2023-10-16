export const generateScriptTag = (url: string) => {
  const script = document.createElement('script');

  script.setAttribute('src', url);
  return script;
};
