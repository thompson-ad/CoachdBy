import { Redirect, Slot } from 'expo-router';
import { useSessionContext } from '@/providers/AuthProvider';
import { Text } from 'react-native';

export default function AppLayout() {
  console.log('rendering group one');
  const { session, isLoading } = useSessionContext();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  // Only require authentication within the (app) group's layout as users
  // need to be able to access the (auth) group and sign in again.
  if (!session) {
    console.log('no session, redirecting to sign in');
    return <Redirect href="/sign-in" />;
  }

  // This layout can be deferred because it's not the root layout.
  return <Slot />;
}
