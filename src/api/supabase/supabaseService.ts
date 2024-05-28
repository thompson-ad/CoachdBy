import { useSupabase } from '@/providers/AuthProvider';
import { useCallback } from 'react';

export const useSupabaseService = () => {
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

      const program = data[0];
      const flattenedProgram = {
        name: program.name,
        coach_id: program.coach_id,
        workouts: program.workouts.map((workout) => ({
          day: workout.day,
          name: workout.name,
          type: workout.type,
          movements: workout.sections.flatMap((section) =>
            section.section_movements.map((section_movement) =>
              section_movement.movements
                ? section_movement.movements.name
                : null,
            ),
          ),
        })),
      };

      return flattenedProgram;
    },
    [supabase],
  );

  const fetchCoachProfile = useCallback(
    async (coachId: string) => {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', coachId);

      if (error) {
        console.log('error fetching coach profile');
        throw error;
      }

      if (!data || data.length === 0) {
        throw new Error('No coach found with this ID');
      }

      return data[0];
    },
    [supabase],
  );

  const signOut = useCallback(async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  }, [supabase]);

  return {
    fetchClientProgramme,
    fetchCoachProfile,
    signOut,
  };
};
