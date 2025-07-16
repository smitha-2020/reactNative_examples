import { RouteProp } from '@react-navigation/native';
import { RouteStackParamList } from '../navigation/types';
import { FlatList, Image, StyleSheet, View } from 'react-native';
import ViewOuterTemplate from '../components/ui/template/ViewOuterTemplate';
import { responsiveScale, useAppTheme } from '../Theme';
import { useFilterBySearch } from '../hooks/useFilterBySearch';
import Meal from '../models/meal';
import { Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome6';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import ViewRowStart from '../components/ui/ViewRowStart';

const IndividualDetailScreen = ({
  route,
  navigation,
}: {
  route: RouteProp<RouteStackParamList, 'IndividualDetailScreen'>;
  navigation: any;
}) => {
  const recipeId = route.params.recipeId;
  const { colors } = useAppTheme();
  const { recipeList, loading, error } = useFilterBySearch({ recipeId });
  type ItemProps = { key: string; item: string };
  const Item = ({ key, item }: ItemProps) => {
    return (
      <View
        style={{ marginVertical: 4, marginHorizontal: 4 }}
        key={key + new Date()}
      >
        <Text style={{ fontSize: responsiveScale(10) }}>{item}</Text>
      </View>
    );
  };

  const renderItem = ({ item }: { item: Meal }) => {
    return (
      <View style={styles.individualDetailScreenContainer}>
        <ViewRowStart
          style={{
            flex: 1,
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
        </ViewRowStart>

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
              width: '60%',
            }}
          >
            <View>
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

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}
        >
          <View style={styles.roundCircleBackground}>
            <Icon
              name="wheat-awn-circle-exclamation"
              size={responsiveScale(10)}
              color={colors.tertiary}
            />
          </View>
          <View style={styles.roundCircleBackground}>
            <EntypoIcon
              name="leaf"
              size={responsiveScale(10)}
              color={colors.tertiary}
            />
          </View>
          <View style={styles.roundCircleBackground}>
            <EntypoIcon
              name="app-store"
              size={responsiveScale(10)}
              color={colors.tertiary}
            />
          </View>
          <View style={styles.roundCircleBackground}>
            <Icon
              name="virus-covid"
              size={responsiveScale(10)}
              color={colors.tertiary}
            />
          </View>
        </View>
      </View>
    );
  };
  return (
    <ViewOuterTemplate marginWidth="0" marginHeight="80">
      <FlatList
        showsVerticalScrollIndicator={false}
        data={recipeList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
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
