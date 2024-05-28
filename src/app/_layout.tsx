import { SplashScreen, Stack, useNavigationContainerRef } from 'expo-router';
import { useReactNavigationDevTools } from '@dev-plugins/react-navigation';
import { Session } from '@supabase/supabase-js';
import { View } from 'react-native';
import { useCallback, useEffect, useState } from 'react';

import { AuthProvider } from '@/providers/AuthProvider';
import { DeepLinkProvider } from '@/providers/DeepLinkProvider';
import { supabase } from '@/api/supabase/client';
import { TamaguiProvider } from 'tamagui';
import { useFonts } from 'expo-font';
import { config } from '../../tamagui.config';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const navigationRef = useNavigationContainerRef();
  useReactNavigationDevTools(navigationRef);
  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const [fontLoaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  });

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
    if (fontLoaded && sessionLoadAttempted) {
      await SplashScreen.hideAsync();
    }
  }, [sessionLoadAttempted]);

  if (!fontLoaded || !sessionLoadAttempted) {
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
      <DeepLinkProvider>
        <TamaguiProvider config={config}>{children}</TamaguiProvider>
      </DeepLinkProvider>
    </AuthProvider>
  );
}
