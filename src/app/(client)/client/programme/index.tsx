import { useCallback, useEffect, useState } from 'react';
import { View, ScrollView, ActivityIndicator } from 'react-native';
import { useUser } from '@/providers/AuthProvider';
import { useSupabaseService } from '@/api/supabase/supabaseService';
import { Button, Paragraph, Text } from 'tamagui';

type Profile = {
  id: string;
  first_name: string | null;
  last_name: string | null;
  email: string;
  phone?: string;
  bio?: string;
  profile_image_url?: string;
};

type Programme = {
  coach_id: string | null;
  name?: string;
  workouts?: {
    day: any;
    name: any;
    type: any;
    movements: any;
  }[];
};

// Construct my first screen with expo router
// See how the example templates go about it

export default function ClientHome() {
  const user = useUser();
  const { fetchClientProgramme, fetchCoachProfile, signOut } =
    useSupabaseService();
  const [coach, setCoach] = useState<Profile | null>(null);
  const [programme, setProgramme] = useState<Programme | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const loadClientProgramme = useCallback(async () => {
    if (!user) return;

    try {
      const programmeData = await fetchClientProgramme(user.id);
      setProgramme(programmeData);

      if (programmeData.coach_id) {
        const coachData = await fetchCoachProfile(programmeData.coach_id);
        setCoach(coachData);
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  }, [fetchClientProgramme, fetchCoachProfile, user]);

  useEffect(() => {
    loadClientProgramme();
  }, [loadClientProgramme]);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {error ? (
        <Text>{error}</Text>
      ) : (
        <>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            {coach && <Text>Coach: {coach.first_name}</Text>}
          </View>
          <ScrollView style={{ flex: 1 }}>
            {programme && (
              <Paragraph>
                Program: {JSON.stringify(programme, null, 2)}
              </Paragraph>
            )}
          </ScrollView>
          <Button onPress={signOut}>Sign Out</Button>
        </>
      )}
    </View>
  );
}
