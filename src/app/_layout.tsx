import { SplashScreen, Stack, useNavigationContainerRef } from 'expo-router';
import { useReactNavigationDevTools } from '@dev-plugins/react-navigation';
import { Session } from '@supabase/supabase-js';
import { View } from 'react-native';
import { useCallback, useEffect, useState } from 'react';

import { AuthProvider } from '@/providers/AuthProvider';
import { DeepLinkProvider } from '@/providers/DeepLinkProvider';
import { supabase } from '@/api/supabase/client';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const navigationRef = useNavigationContainerRef();
  useReactNavigationDevTools(navigationRef);
  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const [sessionLoadAttempted, setSessionLoadAttempted] = useState(false);
  const [initialSession, setInitialSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth
      .getSession()
      .then(({ data }) => {
        if (data) {
          setInitialSession(data.session);
        }
      })
      .finally(() => {
        setSessionLoadAttempted(true);
      });
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (sessionLoadAttempted) {
      await SplashScreen.hideAsync();
    }
  }, [sessionLoadAttempted]);

  if (!sessionLoadAttempted) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <Providers initialSession={initialSession}>
        <Stack screenOptions={{ headerShown: false }} />
      </Providers>
    </View>
  );
}

function Providers({
  children,
  initialSession,
}: {
  children: React.ReactNode;
  initialSession?: Session | null;
}) {
  return (
    <AuthProvider initialSession={initialSession}>
      <DeepLinkProvider>{children}</DeepLinkProvider>
    </AuthProvider>
  );
}
