import React, { useCallback, useMemo, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import { Button, Checkbox } from 'react-native-paper';
import { responsiveScale, useAppTheme } from '../../../Theme';
import { useFilterBySearch } from '../../../hooks/useFilterBySearch';

const BottomSheetFilter = ({
  ref,
  isBottomSheetVisible,
  handleBottomSheetVisibility,
  setChecked,
  checked,
}: {
  ref: React.RefObject<BottomSheetMethods | null>;
  isBottomSheetVisible: boolean;
  handleBottomSheetVisibility: () => void;
  setChecked: React.Dispatch<React.SetStateAction<string>>;
  checked: string;
}) => {
  const snapPoints = useMemo(() => ['25%', '50%', '75%'], []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('BottomSheet index changed:', index);
  }, []);
  const handleSelect = (label: string) => {
    setChecked(label); // Toggle logic
  };

  const closeSheet = useCallback(() => {
    ref.current?.close();
    handleBottomSheetVisibility();
  }, []);

  // renders
  return (
    <>
      {isBottomSheetVisible && (
        <BottomSheet
          ref={ref}
          onChange={handleSheetChanges}
          index={1}
          snapPoints={snapPoints}
          enableDynamicSizing={false}
          style={{
            paddingHorizontal: responsiveScale(40),
          }}
        >
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <TouchableOpacity
              onPress={closeSheet}
              style={{
                marginHorizontal: responsiveScale(5),
                width: 25,
                height: 25,
                backgroundColor: 'black',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '50%',
              }}
            >
              <Text style={{ color: 'white', fontWeight: 'bold' }}>x</Text>
            </TouchableOpacity>
          </View>
          <BottomSheetView>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'center',
                marginVertical: responsiveScale(50),
              }}
            >
              {['isGlutenFree', 'isVegan', 'isVegetarian', 'isLactoseFree'].map(
                label => (
                  <Checkbox.Item
                    labelStyle={{ fontSize: responsiveScale(8) }}
                    key={label}
                    label={label}
                    status={checked === label ? 'checked' : 'unchecked'}
                    onPress={() => handleSelect(label)}
                  />
                ),
              )}
            </View>
          </BottomSheetView>
        </BottomSheet>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 40,
    flexDirection: 'row',
  },
});

export default BottomSheetFilter;
