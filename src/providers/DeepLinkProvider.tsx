import React, { createContext, useContext, useEffect, useState } from 'react';
import * as Linking from 'expo-linking';
import { useSession } from './AuthProvider';

const DeepLinkContext = createContext<string | null>(null);

export const DeepLinkProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const session = useSession();
  const [initialUrl, setInitialUrl] = useState<string | null>(null);

  useEffect(() => {
    const handleDeepLink = (event: { url: string }) => {
      if (session) {
        console.log('User already authenticated, ignoring deep link.');
        return;
      }
      setInitialUrl(event.url);
    };

    // Check if the app was opened with a deep link
    const getUrlFromDeepLink = async () => {
      const url = await Linking.getInitialURL();
      if (url) {
        if (session) {
          console.log(
            'User already authenticated, ignoring initial deep link.',
          );
          return;
        }
        setInitialUrl(url);
      }
    };

    getUrlFromDeepLink();

    const listener = Linking.addEventListener('url', handleDeepLink);

    return () => {
      listener.remove();
      setInitialUrl(null);
    };
  }, [session]);

  return (
    <DeepLinkContext.Provider value={initialUrl}>
      {children}
    </DeepLinkContext.Provider>
  );
};

export const useDeepLink = () => {
  const context = useContext(DeepLinkContext);
  if (context === undefined) {
    throw new Error(`useDeepLink must be used within a DeepLinkProvider.`);
  }

  return context;
};
