enum StorageType {
  local = "localStorage",
  session = "sessionStorage",
}

export const getFromStorage = <T, K extends string>(
  type: StorageType,
  key: K,
  defaultValue?: T
): T | null => {
  try {
    const data = window?.[type]?.getItem(key);
    return data ? JSON.parse(data) : defaultValue;
  } catch (error) {
    console.log(error);
  }
  return null;
};

export const setToStorage = <T, K extends string>(
  type: StorageType,
  key: K,
  value: T
) => {
  try {
    window?.[type]?.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log(error);
  }
};

export const removeFromStorage = <T extends string>(
  type: StorageType,
  key: T
) => {
  try {
    window?.[type]?.removeItem(key);
  } catch (error) {
    console.log(error);
  }
};

export const clearStorage = (type: StorageType) => {
  try {
    window?.[type]?.clear();
  } catch (error) {
    console.log(error);
  }
};
