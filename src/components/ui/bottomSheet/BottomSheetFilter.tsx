import React, { useCallback, useMemo } from 'react';
import { Text, StyleSheet, Button } from 'react-native';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import { useBottomSheet } from '../../../hooks/useBottomSheet';

const BottomSheetFilter = () => {
  const { bottomSheetRef, handleSheetChanges, closeSheet } = useBottomSheet();
  const snapPoints = useMemo(() => ['25%', '50%', '75%'], []);

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={1}
        appearsOnIndex={2}
      />
    ),
    [],
  );

  // renders
  return (
    <BottomSheet
      ref={bottomSheetRef}
      onChange={handleSheetChanges}
      index={1}
      snapPoints={snapPoints}
      backdropComponent={renderBackdrop}
      enableDynamicSizing={false}
    >
      <Button title="Close Sheet" onPress={closeSheet} />
      <BottomSheetView style={styles.contentContainer}>
        <Text>Awesome 🎉</Text>
      </BottomSheetView>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 36,
    alignItems: 'center',
  },
});

export default BottomSheetFilter;
