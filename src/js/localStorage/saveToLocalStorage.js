export const saveToLocalStorage = (storageName, data) => {
  try {
    const jsonData = JSON.stringify(data);
    localStorage.setItem(storageName, jsonData);
    return true;
  } catch (error) {
    console.error(`Error - ${error}`);
  }
};
