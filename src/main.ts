export const getFromLocalStorage = <T, K extends string>(
  key: K,
  defaultValue?: T
): T | null => {
  try {
    const data = window?.localStorage.getItem(key);
    return data ? JSON.parse(data) : defaultValue;
  } catch (error) {
    console.log(error);
  }
  return null;
};

export const setToLocalStorage = <T, K extends string>(key: K, value: T) => {
  try {
    window?.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log(error);
  }
};

export const removeFromLocalStorage = <T extends string>(key: T) => {
  try {
    window?.localStorage.removeItem(key);
  } catch (error) {
    console.log(error);
  }
};

export const clearLocalStorage = () => {
  try {
    window?.localStorage.clear()
  } catch (error) {
    
  }
}
