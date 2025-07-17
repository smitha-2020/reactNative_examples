import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

const data = [
  { label: 'Ingredients', value: 'ingredients' },
  { label: 'Steps', value: 'steps' },
];

const DropdownComponent = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View>
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'gray' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        containerStyle={styles.container}
        itemTextStyle={{ fontSize: 8 }}
        inputSearchStyle={{ fontSize: 8 }}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Select sorting Criteria' : '...'}
        searchPlaceholder="Search..."
        value={value}
        showsVerticalScrollIndicator={false}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
        }}
      />
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    fontSize: 8,
    backgroundColor: 'gray',
    borderRadius: 20,
    borderColor: 'gray',
  },
  dropdown: {
    height: 30,
    borderColor: 'gray',
    backgroundColor: 'lightgray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    width: 200,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    backgroundColor: 'gray',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 8,
  },
  placeholderStyle: {
    fontSize: 8,
  },
  selectedTextStyle: {
    fontSize: 8,
  },
});
