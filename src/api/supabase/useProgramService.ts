import { useSupabase } from '@/providers/AuthProvider';
import { useCallback } from 'react';

export type RawProgramData = {
  name: string;
  coach_id: string | null;
  workouts: {
    id: string;
    name: string;
    day: number;
    type: string;
    sections: {
      section_movements: {
        movements: {
          name: string;
        } | null;
      }[];
    }[];
  }[];
};

export const useProgramService = () => {
  const supabase = useSupabase();

  const fetchClientProgramme = useCallback(
    async (clientId: string) => {
      const { data, error } = await supabase
        .from('programs')
        .select(
          `
          name, 
          coach_id, 
          workouts!inner(
            id,
            name, 
            day, 
            type, 
            sections!inner(
              section_movements!inner(
                movements(
                  name
                )
              )
            )
          )
          `,
        )
        .eq('client_id', clientId);

      if (error) {
        console.log('error fetching client program');
        throw error;
      }

      if (!data || data.length === 0) {
        throw new Error('No programme found for this client');
      }

      return data;
    },
    [supabase],
  );

  return { fetchClientProgramme };
};
