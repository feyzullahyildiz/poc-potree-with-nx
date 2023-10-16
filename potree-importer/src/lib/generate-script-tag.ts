export const generateScriptTag = (url: string) => {
  const script = document.createElement('script');
  script.id = url;
  script.setAttribute('src', url);
  return script;
};
