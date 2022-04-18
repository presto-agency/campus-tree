export const getDataFromLocalStorage = (storageName) => {
  try {
    const data = localStorage.getItem(storageName.toString());
    return JSON.parse(data);
  } catch (error) {
    console.error(`Error - ${error}`);
  }
};