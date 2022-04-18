export const removeFromLocalStorage = (storageName = '') =>
  new Promise((resolve = () => null) => {
    localStorage.removeItem(storageName.toString());

    resolve();
  }).catch((e) => {
    console.error(`Error - ${e}`);
  });
