import { useState, useEffect, useCallback } from 'react';
import { View, Text, Button } from 'react-native';
import * as QueryParams from 'expo-auth-session/build/QueryParams';

import { useDeepLink } from '@/providers/DeepLinkProvider';
import { useSupabase } from '@/providers/AuthProvider';
import { useRouter } from 'expo-router';

const AuthCallback = () => {
  const link = useDeepLink();
  const supabase = useSupabase();
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const router = useRouter();

  const createSessionFromUrl = useCallback(
    async (url: string) => {
      const { params, errorCode } = QueryParams.getQueryParams(url);

      if (errorCode) {
        setMessage('Invalid link. Please try again.');
        setIsError(true);
        throw new Error(errorCode);
      }

      const { access_token, refresh_token } = params;

      if (!access_token || !refresh_token) {
        setMessage('Invalid or missing token. Please try again.');
        setIsError(true);
        return;
      }

      const { data, error } = await supabase.auth.setSession({
        access_token,
        refresh_token,
      });

      if (error) {
        setMessage('Error creating session. Please try again.');
        setIsError(true);
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
        console.log('session', session);
        if (session) {
          // Even though we have code for auto-redirection on session change
          // in /(app)/_layout.tsx, the redirect doesn't work when the session
          // is created by the callback because that screen is not on the stack yet

          const user = session.user;
          const role = user.user_metadata?.role;

          if (role === 'coach') {
            router.replace('/coach');
          } else {
            router.replace('/client');
          }
          setMessage('Sign-in successful!');
          setIsError(false);
        }
      } catch (error) {
        console.error('Error handling sign-in:', error);
        setMessage('Failed to sign in. Please try again.');
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    },
    [createSessionFromUrl, router],
  );

  useEffect(() => {
    if (link) {
      handleDeepLink({ link });
    } else {
      setIsLoading(false);
    }
  }, [handleDeepLink, link]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{message}</Text>
      {isLoading && <Text>Loading...</Text>}
      {!isLoading && isError && (
        <Button
          title="Go back to Sign In"
          onPress={() => router.replace('(auth)/sign-in')}
        />
      )}
    </View>
  );
};

export default AuthCallback;
