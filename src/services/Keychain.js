// TODO: Locked as a limitation of Expo XDE, can be used with Xcode or Android Studio for App publishing.
import React from 'react';
import * as Crypto from 'expo-crypto';
import {CryptoDigestAlgorithm, CryptoEncoding} from 'expo-crypto';
import createSecureStore from '@neverdull-agency/expo-unlimited-secure-store';
//@flow

export const setLoginCredentials = async (key, value, user) => {
  if (key === 'uuid')
    {try {
      // 1. Stringy the value, expo-secure-store setItem only accepts a single string value
      let string = JSON.stringify(value + user);
      const digest = await Crypto.digestStringAsync(
        CryptoDigestAlgorithm.SHA256,
        string,
        {
          encoding: CryptoEncoding.HEX,
        },
      );

      // 2. Save the item into storage
      await createSecureStore.setItem(key, string);
    } catch (e) {
      console.log('Secure Store Key access: set login failed ', e);
      return {status: false, error: e};
    }}
};
export const getLoginCredentials = async key => {
  try {
    // 1. Retrieve the value/s
    let data = await createSecureStore.getItem(key);

    // 2. Parse response, it retrives a giant string hence the data needs to be parsed into JSON format
    return JSON.parse(data);
  } catch (e) {
    console.log('Secure Store Key access: get login failed ', e);
    return {status: false, error: e};
  }
};

export const resetLoginCredentials = async key => {
  try {
    // 1. Retrieve the value/s
    await createSecureStore.deleteItem(key);
  } catch (e) {
    console.log('Secure Store Key access: reset login failed ', e);
    return {status: false, error: e};
  }
};
