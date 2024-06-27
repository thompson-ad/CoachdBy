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
      order: number;
      section_movements: {
        order: number;
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
            sections!inner (
              order,
              section_movements!inner (
                order,
                movements (
                  name
                )
              )
            )
          )
        `,
        )
        .eq('client_id', clientId);

      if (error) {
        console.log('error fetching client program', error);
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
