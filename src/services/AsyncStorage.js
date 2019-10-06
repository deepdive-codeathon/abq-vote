import React, {useState, useEffect} from 'react';
import createSecureStore from '@neverdull-agency/expo-unlimited-secure-store';

//createSecureStore(key, value)

// hook for createSecureStore
const useStorage = (key, defaultValue) => {
  const [storageValue, updateStorageValue] = useState(defaultValue);

  async function getStorageValue() {
    let value = defaultValue;
    try {
      value = JSON.parse(await createSecureStore.getItem(key)) || defaultValue;
    } catch (e) {
    } finally {
      updateStorageValue(value);
    }
  }

  async function updateStorage(newValue) {
    try {
      if (newValue === null) {
        await createSecureStore.removeItem(key);
      } else {
        const value = JSON.stringify(newValue);
        await createSecureStore.setItem(key, value);
      }
    } catch (e) {
    } finally {
      updateStorageValue(newValue);
    }
  }

  useEffect(() => {
    getStorageValue();
  }, []);

  return [storageValue, updateStorage];
};

async function saveValue(key, value) {
  try {
    if (value == null) {
      await removeValue(key);
      return {success: true};
    } else {
      await createSecureStore.setItem(key, value);
      return {success: true};
    }
  } catch (e) {
    console.log('LOG_Async Storage access Failed', e);
    return {error: e};
  }
}

async function saveMultiValues(data) {
  const mappedValues = values.map((v, i) => {
    return [i, v];
  });
  try {
    await createSecureStore.multiSet(mappedValues);
    return {success: true};
  } catch (e) {
    console.log('LOG_Async Storage access Failed', e);
    return {error: e};
  }
}

async function getValue(key) {
  try {
    const value = await createSecureStore.getItem(key);
    return value;
  } catch (e) {
    console.log('LOG_Async Storage access Failed', e);
    return false;
  }
}

async function getMultiValues(keys) {
  let values;
  try {
    values = await createSecureStore.multiGet(keys);
  } catch (e) {
    console.log('LOG_Async Storage access Failed', e);
    return false;
  }

  let value;
  values.forEach((v, i) => {
    value[v[0]] = v[1];
  });

  return value;
}

async function removeValue(key) {
  try {
    await createSecureStore.removeItem(key);
    return {success: true};
  } catch (e) {
    console.log('LOG_Async Storage access Failed', e);
    return {error: e};
  }
}

async function removeMultiValues(keys) {
  try {
    await createSecureStore.multiRemove(keys);
    return {success: true};
  } catch (e) {
    console.log('LOG_Async Storage access Failed', e);
    return {error: e};
  }
}

async function getAllKeys() {
  let keys = [];
  try {
    keys = await createSecureStore.getAllKeys();
  } catch (e) {
    console.log('LOG_Async Storage access Failed', e);
  }
  return keys;
}

async function clearAll() {
  try {
    await createSecureStore.clear();
  } catch (e) {
    console.log('LOG_Async Storage access Failed', e);
  }
}


export default useStorage;
