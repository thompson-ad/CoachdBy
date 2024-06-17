import { View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function WorkoutScreen() {
  const { workoutId } = useLocalSearchParams();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Workout ID: {workoutId}</Text>
    </View>
  );
}
