import { useSupabase } from '@/providers/AuthProvider';
import { View, Text, Button } from 'react-native';

export default function ClientHome() {
  // sign out with supabase
  const supabase = useSupabase();

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Client Home</Text>
      <Button title="Sign Out" onPress={signOut} />
    </View>
  );
}
