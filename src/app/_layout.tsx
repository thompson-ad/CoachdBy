import { Slot, SplashScreen, useNavigationContainerRef } from 'expo-router';
import { useReactNavigationDevTools } from '@dev-plugins/react-navigation';
import { Session } from '@supabase/supabase-js';
import { View } from 'react-native';
import { useCallback, useEffect, useState } from 'react';

import { AuthProvider } from '@/providers/AuthProvider';
import { DeepLinkProvider } from '@/providers/DeepLinkProvider';
import { supabase } from '@/api/supabase/client';
import { TamaguiProvider } from 'tamagui';
import { config } from '../../tamagui.config';
import { initialiseI18n } from '@/i18n/setup';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const navigationRef = useNavigationContainerRef();
  useReactNavigationDevTools(navigationRef);
  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const [sessionLoadAttempted, setSessionLoadAttempted] = useState(false);
  const [initialSession, setInitialSession] = useState<Session | null>(null);
  const [languageLoaded, setLanguageLoaded] = useState(false);

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

  useEffect(() => {
    initialiseI18n();
    setLanguageLoaded(true);
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (sessionLoadAttempted && languageLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [languageLoaded, sessionLoadAttempted]);

  if (!sessionLoadAttempted || !languageLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <Providers initialSession={initialSession}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <SafeAreaProvider>
            <Slot />
          </SafeAreaProvider>
        </GestureHandlerRootView>
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
