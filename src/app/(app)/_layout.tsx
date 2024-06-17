import { useSession } from '@/providers/AuthProvider';
import { useSegments, Redirect, Slot } from 'expo-router';

export default function AppLayout() {
  const session = useSession();
  const segments = useSegments();

  const inAuthGroup = segments[0] === 'callback' || segments.length === 0;
  const user = session?.user || null;

  if (!user && !inAuthGroup) {
    console.log('No user, redirecting to /');
    return <Redirect href="(auth)/sign-in" />;
  } else if (user && inAuthGroup) {
    if (session?.user.user_metadata?.role === 'coach') {
      console.log('redirecting to /coach');
      return <Redirect href="/coach" />;
    } else {
      console.log('No user, redirecting to /client');
      return <Redirect href="/client" />;
    }
  }

  return <Slot />;
}
