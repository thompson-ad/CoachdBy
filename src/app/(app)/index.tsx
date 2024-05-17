import { FlatList, ListRenderItem, Text, View } from "react-native";

type Programme = {
  name: string;
  workouts: Workout[];
};

type Workout = {
  id: string;
  name: string;
  sections: Section[];
};

type Section = {
  id: string;
  movements: Movement[];
};

type Movement = {
  name: string;
  sets: number;
  reps: string;
  rir: string;
  rest: number;
  notes: string;
};

// Example programme
const programme = {
  name: "Full Body Three Day Split",
  workouts: [
    {
      id: "1",
      name: "Day 1",
      sections: [
        {
          id: "A",
          movements: [
            {
              name: "Trap Bar Deadlift",
              sets: 4,
              reps: "6-8",
              rir: "1-2",
              rest: 90,
              notes: "This is a note",
            },
          ],
        },
        {
          id: "B",
          movements: [
            {
              name: "Bench Press",
              sets: 4,
              reps: "6-8",
              rir: "1-2",
              rest: 90,
              notes: "This is a note",
            },
            {
              name: "Pull Up",
              sets: 4,
              reps: "6-8",
              rir: "1-2",
              rest: 90,
              notes: "This is a note",
            },
          ],
        },
      ],
    },
    {
      id: "2",
      name: "Day 2",
      sections: [
        {
          id: "A",
          movements: [
            {
              name: "Trap Bar Deadlift",
              sets: 4,
              reps: "6-8",
              rir: "1-2",
              rest: 90,
              notes: "This is a note",
            },
          ],
        },
        {
          id: "B",
          movements: [
            {
              name: "Bench Press",
              sets: 4,
              reps: "6-8",
              rir: "1-2",
              rest: 90,
              notes: "This is a note",
            },
            {
              name: "Pull Up",
              sets: 4,
              reps: "6-8",
              rir: "1-2",
              rest: 90,
              notes: "This is a note",
            },
          ],
        },
      ],
    },
  ],
} as Programme;

export default function App() {
  const renderSection: ListRenderItem<Section> = ({ item: section }) => {
    const movements = section.movements.map((movement) => movement.name);

    return (
      <View>
        {movements.map((m) => (
          <Text key={m}>{m}</Text>
        ))}
      </View>
    );
  };

  const renderWorkout: ListRenderItem<Workout> = ({ item: workout }) => {
    return (
      <FlatList
        ListHeaderComponent={<Text>{workout.name}</Text>}
        data={workout.sections}
        renderItem={renderSection}
        keyExtractor={({ id }) => id}
      />
    );
  };

  return (
    <FlatList
      contentContainerStyle={{
        padding: 16,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
      ListHeaderComponent={<Text>{programme.name}</Text>}
      data={programme.workouts}
      renderItem={renderWorkout}
      keyExtractor={({ id }) => id}
    />
  );
}
