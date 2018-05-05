import { TabNavigator } from 'react-navigation';
import {
  HomeScreen,
  ProfileScreen,
  NotificationsScreen
} from '../screens';
//import OrderNavigator from './OrderNavigator';

export default TabNavigator({
  Home: {
    screen: HomeScreen
  },
  NotificationsScreen: {
    screen: NotificationsScreen
  },
  ProfileScreen: {
    screen: ProfileScreen
  }
}, {
  //swipeEnabled: true,
  animationEnabled: true,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    showLabel: false,
    inactiveTintColor: '#fff',
    activeTintColor: '#fff',
    style: {
      backgroundColor: '#FF5E00'
    }
  }
});
