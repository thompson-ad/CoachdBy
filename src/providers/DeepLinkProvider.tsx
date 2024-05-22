import React, { createContext, useContext, useEffect, useState } from "react";
import * as Linking from "expo-linking";

const DeepLinkContext = createContext<string | null>(null);

export const DeepLinkProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [initialUrl, setInitialUrl] = useState<string | null>(null);

  useEffect(() => {
    const handleDeepLink = (event: { url: string }) => {
      setInitialUrl(event.url);
    };

    // Check if the app was opened with a deep link
    const getUrlFromDeepLink = async () => {
      const url = await Linking.getInitialURL();
      if (url) {
        setInitialUrl(url);
      }
    };

    getUrlFromDeepLink();

    Linking.addEventListener("url", handleDeepLink);
  }, []);

  return (
    <DeepLinkContext.Provider value={initialUrl}>
      {children}
    </DeepLinkContext.Provider>
  );
};

export const useDeepLink = () => {
  return useContext(DeepLinkContext);
};
