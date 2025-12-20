export function debounce(callbackFunction:any, delay = 250) {
  let timeout : any;

  return (...args:any) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callbackFunction(...args);
    }, delay);
  };
}
