// hooks/useBottomSheet.ts
import { useCallback, useEffect, useRef } from 'react';
import BottomSheet from '@gorhom/bottom-sheet';

export const useBottomSheet = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleSheetChanges = useCallback((index: number) => {
    console.log('BottomSheet index changed:', index);
  }, []);

  const openSheet = useCallback(() => {
    bottomSheetRef.current?.expand();
  }, []);

  const closeSheet = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);

  return {
    bottomSheetRef,
    handleSheetChanges,
    openSheet,
    closeSheet,
  };
};
