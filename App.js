import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './screens/SearchScreen';
import DetailsScreen from './screens/DetailsScreen';

const navigator = createStackNavigator(
  {
    Home: SearchScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Search movies',
      headerStyle: {
        backgroundColor: '#007aff',
        elevation: 0,
        shadowOpacity: 0
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff'
      },
      headerBackTitleVisible: false
    }
  }
);

export default createAppContainer(navigator);
