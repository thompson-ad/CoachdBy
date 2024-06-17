import { useSupabase } from '@/providers/AuthProvider';
import { useCallback } from 'react';

export const useCoachService = () => {
  const supabase = useSupabase();

  const fetchCoachProfile = useCallback(
    async (coachId: string) => {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', coachId)
        .single();

      if (error) {
        console.log('error fetching coach profile');
        throw error;
      }

      if (!data) {
        throw new Error('No coach found with this ID');
      }

      return data;
    },
    [supabase],
  );

  return { fetchCoachProfile };
};
