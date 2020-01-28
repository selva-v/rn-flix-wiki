import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./screens/SearchScreen";
import DetailsScreen from "./screens/DetailsScreen";

const MainNavigator = createStackNavigator(
  {
    Home: { screen: SearchScreen },
    DetailsScreen: { screen: DetailsScreen }
  },
  {
    initialRouteName: "Home"
  }
);

const AppNavigator = createAppContainer({
  Home: MainNavigator,
});

export default AppNavigator;