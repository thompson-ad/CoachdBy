import React, { useCallback, useMemo } from 'react';
import { StyleSheet } from 'react-native';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetFlatList,
} from '@gorhom/bottom-sheet';
import { Text } from 'tamagui';
import { WorkoutCard } from './WorkoutCard';
import { Workout } from '@/app/(app)';

type WorkoutBottomSheetProps = {
  workouts: Workout[] | undefined;
};

export const WorkoutBottomSheet = React.forwardRef<
  BottomSheet,
  WorkoutBottomSheetProps
>(function WorkoutBottomSheet({ workouts }, ref) {
  const snapPoints = useMemo(() => ['50%', '70%'], []);

  const renderBackdrop = useCallback((props: any) => {
    return <BottomSheetBackdrop {...props} />;
  }, []);

  // renders
  return (
    <BottomSheet
      ref={ref}
      index={-1}
      snapPoints={snapPoints}
      enablePanDownToClose={true}
      backdropComponent={renderBackdrop}
    >
      <BottomSheetFlatList
        horizontal
        data={workouts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <WorkoutCard
            key={item.id}
            header={item.name}
            subheading={item.type}
            movements={item.movements}
            footerButton="Start"
            onStartPress={() => console.log(`Start ${item.name}`)}
          />
        )}
        contentContainerStyle={styles.contentContainer}
        ListEmptyComponent={<Text>No workouts available</Text>}
      />
    </BottomSheet>
  );
});

const styles = StyleSheet.create({
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
