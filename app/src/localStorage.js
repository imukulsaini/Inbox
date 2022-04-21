export function loadStateFromLocalStorage() {
  try {
    const localStorageData = localStorage.getItem("email");
    if (localStorageData === null) {
      return undefined;
    }
    return JSON.parse(localStorageData);
  } catch (error) {
    return undefined;
  }
}

export function saveStateInLocalStorage(state) {
  try {
    const savedData = JSON.stringify(state);
    localStorage.setItem("email", savedData);
  } catch (err) {
    console.log(err);
  }
}
