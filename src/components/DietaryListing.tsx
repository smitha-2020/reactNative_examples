import { StyleSheet, View } from 'react-native';
import { Meal } from '../models/meal';
import { responsiveScale, useAppTheme } from '../Theme';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/FontAwesome6';

const DietaryListing = ({ item }: { item: Meal }) => {
  const { colors } = useAppTheme();
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'flex-end',
      }}
    >
      {item.isGlutenFree && (
        <View style={styles.roundCircleBackground}>
          <Icon
            name="wheat-awn-circle-exclamation"
            size={responsiveScale(10)}
            color={colors.tertiary}
          />
        </View>
      )}
      {item.isVegan && (
        <View style={styles.roundCircleBackground}>
          <EntypoIcon
            name="leaf"
            size={responsiveScale(10)}
            color={colors.tertiary}
          />
        </View>
      )}

      {item.isVegetarian && (
        <View style={styles.roundCircleBackground}>
          <EntypoIcon
            name="app-store"
            size={responsiveScale(10)}
            color={colors.tertiary}
          />
        </View>
      )}
      {item.isLactoseFree && (
        <View style={styles.roundCircleBackground}>
          <Icon
            name="virus-covid"
            size={responsiveScale(10)}
            color={colors.tertiary}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  roundCircleBackground: {
    marginHorizontal: responsiveScale(5),
    width: 25,
    height: 25,
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
  },
});

export default DietaryListing;
