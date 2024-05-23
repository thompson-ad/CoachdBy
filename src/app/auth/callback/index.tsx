import { useState, useEffect, useCallback } from 'react';
import { View, Text, Button } from 'react-native';
import * as QueryParams from 'expo-auth-session/build/QueryParams';

import { useDeepLink } from '@/providers/DeepLinkProvider';
import { useSupabase } from '@/providers/AuthProvider';
import { useRouter } from 'expo-router';

const AuthCallback = () => {
  const link = useDeepLink();
  const supabase = useSupabase();
  const router = useRouter();
  const [message, setMessage] = useState('Signing in...');
  const [isLoading, setIsLoading] = useState(true);

  const createSessionFromUrl = useCallback(
    async (url: string) => {
      const { params, errorCode } = QueryParams.getQueryParams(url);

      if (errorCode) {
        setMessage('Invalid link. Please try again.');
        throw new Error(errorCode);
      }

      const { access_token, refresh_token } = params;

      if (!access_token || !refresh_token) {
        setMessage('Invalid or missing token. Please try again.');
        return;
      }

      const { data, error } = await supabase.auth.setSession({
        access_token,
        refresh_token,
      });

      if (error) {
        setMessage('Error creating session. Please try again.');
        throw error;
      }

      return data.session;
    },
    [supabase.auth],
  );

  const handleDeepLink = useCallback(
    async (event: { link: string }) => {
      const url = event.link;
      try {
        const session = await createSessionFromUrl(url);
        if (session) {
          setMessage('Sign-in successful!');
        }
      } catch (error) {
        console.error('Error handling sign-in:', error);
      } finally {
        setIsLoading(false);
      }
    },
    [createSessionFromUrl],
  );

  useEffect(() => {
    if (link) {
      handleDeepLink({ link });
    } else {
      setMessage('No link provided. Please try again.');
      setIsLoading(false);
    }
  }, [handleDeepLink, link]);

  const goBack = async () => {
    router.back();
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{message}</Text>
      {isLoading && <Text>Loading...</Text>}
      <Button title="Try again" onPress={goBack} />
    </View>
  );
};

export default AuthCallback;
