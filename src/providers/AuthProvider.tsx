import { AuthError, Session, SupabaseClient } from '@supabase/supabase-js';
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

export const AuthProvider = ({
  initialSession,
  children,
}: AuthProviderProps) => {
  const [session, setSession] = useState<Session | null>(
    initialSession || null,
  );
  const [error, setError] = useState<AuthError | null>(null);
  const [isLoading, setIsLoading] = useState(false);

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
      setSession(newSession);
    });
    return () => {
      data.subscription.unsubscribe();
    };
  }, []);

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
