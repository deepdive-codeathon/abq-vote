import React, { useEffect, useState } from "./node_modules/react";
import NetInfo from "./node_modules/@react-native-community/netinfo";

const inititalState = {
  type: null,
  effectiveType: null
};

const useNetInfo = () => {
  const [netInfo, setNetInfo] = useState(inititalState);

  onChange = newState => {
    setNetInfo(newState);
  };

  useEffect(() => {
    NetInfo.fetch().then(connectionInfo => {
      setNetInfo(connectionInfo);
    });
  }, []);

  useEffect(() => {
    const unsubscriber = NetInfo.addEventListener(onChange);

    return () => {
      unsubscriber();
    };
  }, []);

  return netInfo;
};

export default useNetInfo;
