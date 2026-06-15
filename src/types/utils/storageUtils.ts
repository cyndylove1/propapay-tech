// import CryptoJS from "crypto-js";

// const SECRET_KEY = "secret-key";

const getNamespacedKey = (key: string): string => {
  return `propapay_${key}`;
};

const getFromLocalStorage = <T>(key: string, parseData: boolean = true) => {
  const namespacedKey = getNamespacedKey(key);
  const data = localStorage.getItem(namespacedKey);
  if (data) {
    return parseData ? (JSON.parse(data) as T) : (data as T);
  }
  return data as T;
};

const saveToLocalStorage = <T>(key: string, value: T) => {
  const namespacedKey = getNamespacedKey(key);
  if (localStorage.getItem(namespacedKey)) localStorage.removeItem(namespacedKey);
  try {
    localStorage.setItem(namespacedKey, JSON.stringify(value));
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const removeFromLocalStorage = (key: string) => {
  const namespacedKey = getNamespacedKey(key);
  try {
    localStorage.removeItem(namespacedKey);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

// const saveToSessionStorage = <T>(
//   key: string,
//   value: T,
//   encrypt: boolean = false
// ): boolean => {
//   try {
//     let storedValue = JSON.stringify(value);
//     if (encrypt) {
//       storedValue = CryptoJS.AES.encrypt(storedValue, SECRET_KEY).toString();
//     }
//     sessionStorage.setItem(key, storedValue);
//     return true;
//   } catch (error) {
//     console.error("Error saving to sessionStorage:", error);
//     return false;
//   }
// };

// const getFromSessionStorage = <T>(
//   key: string,
//   decrypt: boolean = false
// ): T | null => {
//   try {
//     const storedValue = sessionStorage.getItem(key);
//     if (!storedValue) return null;

//     if (decrypt) {
//       const bytes = CryptoJS.AES.decrypt(storedValue, SECRET_KEY);
//       const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
//       return JSON.parse(decryptedData) as T;
//     }

//     return JSON.parse(storedValue) as T;
//   } catch (error) {
//     console.error("Error retrieving from sessionStorage:", error);
//     return null;
//   }
// };

const setCookie = (key: string, value: string, days: number = 7): void => {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(
    value
  )}; expires=${expires}; path=/`;
};

const getCookie = (key: string): string | null => {
  return document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${encodeURIComponent(key)}=`))
    ?.split("=")[1]
    ? decodeURIComponent(
        document.cookie
          .split("; ")
          .find((row) => row.startsWith(`${encodeURIComponent(key)}=`))
          ?.split("=")[1] || ""
      )
    : null;
};

const deleteCookie = (key: string): void => {
  document.cookie = `${encodeURIComponent(
    key
  )}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
};

export {
  getFromLocalStorage,
  saveToLocalStorage,
  removeFromLocalStorage,
  // saveToSessionStorage,
  // getFromSessionStorage,
  setCookie,
  getCookie,
  deleteCookie,
};
