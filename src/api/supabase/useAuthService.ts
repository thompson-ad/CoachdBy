import { useSupabase } from '@/providers/AuthProvider';
import { useCallback } from 'react';

export const useAuthService = () => {
  const supabase = useSupabase();

  const signOut = useCallback(async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  }, [supabase]);

  return { signOut };
};
