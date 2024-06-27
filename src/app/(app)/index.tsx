import { useCallback, useEffect, useRef, useState } from 'react';
import { View, ActivityIndicator, FlatList } from 'react-native';
import { useUser } from '@/providers/AuthProvider';
import { Avatar, Button, Paragraph, Text, XStack, YStack } from 'tamagui';
import { useTranslation } from 'react-i18next';
import { WorkoutCard } from '@/components/WorkoutCard';
import { useRouter } from 'expo-router';
import {
  RawProgramData,
  useProgramService,
} from '@/api/supabase/useProgramService';
import { useCoachService } from '@/api/supabase/useCoachService';
import { useAuthService } from '@/api/supabase/useAuthService';
import { WorkoutBottomSheet } from '@/components/WorkoutBottomSheet';
import BottomSheet from '@gorhom/bottom-sheet';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Profile = {
  id: string;
  first_name: string | null;
  last_name: string | null;
  email: string;
};

export type Workout = {
  id: string;
  day: number;
  name: string;
  type: string;
  movements: {
    name: string;
  }[];
};

type Program = {
  coach_id: string | null;
  name: string;
  workouts: Workout[];
};

export const transformProgramToViewModel = (
  data: RawProgramData[],
): Program => {
  if (!data || data.length === 0) {
    throw new Error('No programme found for this client');
  }

  const program = data[0];
  return {
    name: program.name,
    coach_id: program.coach_id,
    workouts: program.workouts.map((workout) => ({
      id: workout.id,
      day: workout.day,
      name: workout.name,
      type: workout.type,
      movements: workout.sections
        .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
        .flatMap((section) =>
          section.section_movements
            .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
            .map((section_movement) => section_movement.movements?.name)
            .filter((name): name is string => name !== undefined)
            .map((name) => ({ name })),
        ),
    })),
  };
};

export default function ClientHome() {
  const { t } = useTranslation();
  const router = useRouter();
  const user = useUser();
  const { fetchClientProgramme } = useProgramService();
  const { fetchCoachProfile } = useCoachService();
  const { signOut } = useAuthService();
  const [coach, setCoach] = useState<Profile | null>(null);
  const [programme, setProgramme] = useState<Program | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const bottomSheetRef = useRef<BottomSheet>(null);

  const insets = useSafeAreaInsets();

  const workouts = programme?.workouts;
  const userId = user?.id;

  const loadClientProgramme = useCallback(async () => {
    if (!userId) return;

    try {
      setLoading(true);
      const rawProgrammeData = await fetchClientProgramme(userId);
      const programmeData = transformProgramToViewModel(rawProgrammeData);
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
  }, [fetchClientProgramme, fetchCoachProfile, userId]);

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
    <>
      <YStack f={1} pb={insets.bottom} pt={insets.top} gap="$8">
        {error ? (
          <Text>{error}</Text>
        ) : (
          <>
            <XStack alignItems="center" gap="$3">
              <Avatar circular size="$6">
                <Avatar.Image
                  accessibilityLabel="Coach Cam"
                  src="https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80"
                />
                <Avatar.Fallback backgroundColor="$blue10" />
              </Avatar>
              <YStack gap="$1">
                <Paragraph>{t('clientApp.home.coached_by')}</Paragraph>
                {coach && (
                  <Text>{`${coach.first_name} ${coach.last_name}`}</Text>
                )}
              </YStack>
            </XStack>

            <FlatList
              data={workouts}
              renderItem={({ item }) => (
                <WorkoutCard
                  key={item.name}
                  header={item.name}
                  subheading={item.type}
                  movements={item.movements}
                  footerButton={t('clientApp.home.start')}
                  onStartPress={() => router.push(`/client/program/${item.id}`)}
                />
              )}
              keyExtractor={(item) => item.id.toString()}
            />

            <Button onPress={signOut}>Sign Out</Button>
          </>
        )}
      </YStack>
      <WorkoutBottomSheet ref={bottomSheetRef} workouts={workouts} />
    </>
  );
}
