import { RouteProp } from '@react-navigation/native';
import { RouteStackParamList } from '../navigation/types';
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import ViewOuterTemplate from '../components/ui/template/ViewOuterTemplate';
import { responsiveScale, useAppTheme } from '../Theme';
import { Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome6';
import IonicIons from 'react-native-vector-icons/Ionicons';
import { Meal } from '../models/meal';
import { useAppSelector } from '../app/hooks';
import { useReduxReducerFilter } from '../hooks/useReduxReducerFilter';
import DietaryListing from '../components/DietaryListing';

const IndividualDetailScreen = ({
  route,
  navigation,
}: {
  route: RouteProp<RouteStackParamList, 'IndividualDetailScreen'>;
  navigation: any;
}) => {
  const recipeId = route.params.recipeId;
  const { colors } = useAppTheme();
  //const { recipeList, loading, error } = useFilterBySearch({ recipeId });
  let meals: Meal[] = useAppSelector(state => state.RecipeReducer.filterdMeals);
  let favoriteMeal: string[] = useAppSelector(
    state => state.RecipeReducer.favoriteIds,
  );
  const meal = meals.filter(meal => {
    return meal.id === recipeId;
  });
  const { addFav } = useReduxReducerFilter();
  const renderItem = ({ item }: { item: Meal }) => {
    return (
      <View style={styles.individualDetailScreenContainer}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <View
            style={{
              width: '90%',
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}
          >
            <Text
              variant="headlineSmall"
              style={{
                fontSize: 16,
                fontFamily: 'FontAwesome6_Solid',
                color: 'coral',
              }}
            >
              {item.title.toUpperCase()}
            </Text>
          </View>

          <View>
            <TouchableOpacity
              onPress={() => {
                addFav({ recipeId: item.id });
              }}
            >
              {favoriteMeal.includes(item.id) ? (
                <IonicIons
                  name="heart"
                  size={responsiveScale(20)}
                  color={'red'}
                />
              ) : (
                <IonicIons
                  name="heart-outline"
                  size={responsiveScale(20)}
                  color={'white'}
                />
              )}
            </TouchableOpacity>

            {/**  */}
          </View>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-start',
          }}
        >
          <Text
            variant="bodySmall"
            style={{ color: colors.tertiary, fontSize: responsiveScale(10) }}
          >
            Complexity : {item.complexity.toUpperCase()}
          </Text>
        </View>
        <View>
          <Text
            variant="bodySmall"
            style={{
              color: 'white',
              marginTop: responsiveScale(10),
              fontWeight: 'bold',
              fontFamily: 'FontAwesome6_Solid',
            }}
          >
            Ingredients
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
            }}
          >
            <View
              style={{
                width: '65%',
                flexWrap: 'wrap',
                flexDirection: 'row',
              }}
            >
              {item.ingredients.map((mealIngredient: any) => (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                  }}
                  key={mealIngredient}
                >
                  <Icon
                    name="diamond"
                    size={responsiveScale(5)}
                    color={colors.tertiary}
                  />
                  <Text
                    variant="bodySmall"
                    style={{
                      color: colors.tertiary,
                      fontSize: responsiveScale(10),
                      marginLeft: responsiveScale(10),
                    }}
                  >
                    {mealIngredient}
                  </Text>
                </View>
              ))}
            </View>
            <View>
              <Image source={{ uri: item.imageUrl }} height={100} width={100} />
            </View>
          </View>
        </View>

        <View>
          <Text
            variant="bodySmall"
            style={{
              color: 'white',
              marginTop: responsiveScale(10),
              fontWeight: 'bold',
              fontFamily: 'FontAwesome6_Solid',
            }}
          >
            Steps
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              width: '85%',
            }}
          >
            <View>
              {item.steps.map((step: any) => (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                  }}
                  key={step}
                >
                  <Icon
                    name="arrows-to-dot"
                    size={responsiveScale(5)}
                    color={colors.tertiary}
                  />
                  <Text
                    variant="bodySmall"
                    style={{
                      color: colors.tertiary,
                      fontSize: responsiveScale(10),
                      marginLeft: responsiveScale(10),
                    }}
                  >
                    {step}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        <DietaryListing item={item} />
      </View>
    );
  };
  return (
    <ViewOuterTemplate marginWidth="0" marginHeight="80">
      <FlatList
        showsVerticalScrollIndicator={false}
        data={meal}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        keyboardShouldPersistTaps="handled"
      />
    </ViewOuterTemplate>
  );
};
const styles = StyleSheet.create({
  individualDetailScreenContainer: {
    minWidth: '90%',
    padding: responsiveScale(10),
    marginHorizontal: responsiveScale(8),
    marginBottom: responsiveScale(100),
    borderRadius: responsiveScale(10),
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
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

export default IndividualDetailScreen;
