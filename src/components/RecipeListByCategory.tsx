import ViewRow from './ui/ViewRow';
import { responsiveScale, useAppTheme } from '../Theme';
import { Text } from 'react-native-paper';
import { TouchableOpacity } from 'react-native';
import Meal from '../models/meal';

const RecipeListByCategory = ({
  recipes,
  navigation,
}: {
  recipes: Meal[];
  navigation: any;
}) => {
  const { colors } = useAppTheme();

  return (
    <>
      {recipes.map(recipe => (
        <TouchableOpacity
          key={recipe.id}
          onPress={() => {}}
          style={{
            backgroundColor: colors.secondary,
            flex: 1,
            minWidth: '90%',
            padding: responsiveScale(10),
            marginVertical: responsiveScale(8),
            borderRadius: responsiveScale(50),
          }}
        >
          <ViewRow style={{ flex: 1 }}>
            <Text variant="bodySmall" style={{ color: colors.tertiary }}>
              {recipe.title}
            </Text>
          </ViewRow>
        </TouchableOpacity>
      ))}
    </>
  );
};

export default RecipeListByCategory;
