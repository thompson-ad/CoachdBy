import { AuthError, Session, SupabaseClient } from '@supabase/supabase-js';
import { useRouter, useSegments } from 'expo-router';
import { createContext, useContext, useEffect, useState } from 'react';
import { AppState } from 'react-native';

import { supabase } from '@/api/supabase/client';
import { Database } from 'database.types';

type AuthProviderProps = {
  initialSession?: Session | null;
  children?: React.ReactNode;
};

type SessionContextType = {
  isLoading: boolean;
  session: Session | null;
  error: AuthError | null;
  supabaseClient: SupabaseClient;
};

const SessionContext = createContext<SessionContextType>({
  session: null,
  error: null,
  isLoading: false,
  supabaseClient: supabase,
});

export const useSessionContext = () => {
  const context = useContext(SessionContext);
  if (context === undefined) {
    throw new Error(
      `useSessionContext must be used within a SessionContextProvider.`,
    );
  }

  return context;
};

function useSupabaseClient<
  Database = any,
  SchemaName extends string & keyof Database = 'public' extends keyof Database
    ? 'public'
    : string & keyof Database,
>() {
  const context = useContext(SessionContext);
  if (context === undefined) {
    throw new Error(
      `useSupabaseClient must be used within a SessionContextProvider.`,
    );
  }

  return context.supabaseClient as SupabaseClient<Database, SchemaName>;
}

export const useSupabase = () => {
  return useSupabaseClient<Database>();
};

export const useSession = () => {
  const context = useContext(SessionContext);
  if (context === undefined) {
    throw new Error(`useSession must be used within a SessionContextProvider.`);
  }

  return context.session;
};

export const useUser = () => {
  const context = useContext(SessionContext);
  if (context === undefined) {
    throw new Error(`useUser must be used within a SessionContextProvider.`);
  }

  return context.session?.user ?? null;
};

export function useProtectedRoute(session: Session | null) {
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    // Check if the user is in a screen in /auth or if they are at the root (/index.tsx)
    const inAuthGroup = segments[0] === 'auth' || segments.length === 0;
    const user = session?.user || null;

    if (!user && !inAuthGroup) {
      console.log('No user, redirecting to /');
      router.replace('/');
    } else if (user && inAuthGroup) {
      console.log('User exists, redirecting to /client or /coach');
      if (session?.user.user_metadata?.role === 'coach') {
        router.replace('/coach');
      } else {
        router.replace('/client');
      }
    }
  }, [session, segments, router]);
}

export const AuthProvider = ({
  initialSession,
  children,
}: AuthProviderProps) => {
  const [session, setSession] = useState<Session | null>(
    initialSession || null,
  );
  const [error, setError] = useState<AuthError | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  useProtectedRoute(session);

  useEffect(() => {
    setIsLoading(true);
    supabase.auth
      .getSession()
      .then(({ data: { session: newSession } }) => {
        setSession(newSession);
        setError(null);
      })
      .catch((error) => setError(new AuthError(error.message)))
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange((event, newSession) => {
      console.log('event', event);
      setSession(newSession);
    });
    return () => {
      data.subscription.unsubscribe();
    };
  }, [router]);

  useEffect(() => {
    const handleAppStateChange = (state: string) => {
      if (state === 'active') {
        supabase.auth.startAutoRefresh();
      } else {
        supabase.auth.stopAutoRefresh();
      }
    };

    AppState.addEventListener('change', handleAppStateChange);
  }, []);

  return (
    <SessionContext.Provider
      value={{ session, isLoading, error, supabaseClient: supabase }}
    >
      {children}
    </SessionContext.Provider>
  );
};
