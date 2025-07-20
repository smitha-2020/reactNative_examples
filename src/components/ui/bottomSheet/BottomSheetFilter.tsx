import React, { useCallback, useMemo } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Checkbox } from 'react-native-paper';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { responsiveScale } from '../../../Theme';
import EntypoIcon from 'react-native-vector-icons/Entypo';

import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import { AllergyTypes } from '../../../navigation/types';

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
  setChecked: React.Dispatch<
    React.SetStateAction<Record<AllergyTypes, boolean>>
  >;
  checked: Record<AllergyTypes, boolean>;
}) => {
  const snapPoints = useMemo(() => ['25%', '50%', '75%'], []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('BottomSheet index changed:', index);
  }, []);

  const handleSelect = (label: AllergyTypes) => {
    setChecked(prev =>
      Object.keys(prev).reduce((acc, key) => {
        acc[key as AllergyTypes] = label === key;
        return acc;
      }, {} as typeof prev),
    );
  };

  const closeSheet = useCallback(() => {
    ref.current?.close();
    setChecked(prev =>
      Object.keys(prev).reduce((acc, key) => {
        acc[key as AllergyTypes] = false;
        return acc;
      }, {} as typeof prev),
    );
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
        >
          <View>
            <View
              style={{
                alignItems: 'flex-end',
              }}
            >
              <TouchableOpacity
                onPress={closeSheet}
                style={{
                  marginHorizontal: responsiveScale(5),
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <EntypoIcon
                  name="circle-with-cross"
                  size={responsiveScale(20)}
                />
              </TouchableOpacity>
            </View>
            <BottomSheetView>
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  marginVertical: responsiveScale(50),
                  marginHorizontal: responsiveScale(50),
                }}
              >
                {[
                  'isGlutenFree',
                  'isVegan',
                  'isVegetarian',
                  'isLactoseFree',
                ].map(label => (
                  <Checkbox.Item
                    labelStyle={{ fontSize: responsiveScale(8) }}
                    key={label}
                    label={label}
                    status={
                      checked[label as AllergyTypes] ? 'checked' : 'unchecked'
                    }
                    //status={checked === label ? 'checked' : 'unchecked'}
                    onPress={() => handleSelect(label as AllergyTypes)}
                  />
                ))}
              </View>
            </BottomSheetView>
          </View>
        </BottomSheet>
      )}
    </>
  );
};

export default BottomSheetFilter;
