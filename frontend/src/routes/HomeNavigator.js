import { TabNavigator } from 'react-navigation';
import {
  HomeScreen,
  NotificationsScreen,
  ProfileScreen,
  CreateMeetupScreen
} from '../screens';

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