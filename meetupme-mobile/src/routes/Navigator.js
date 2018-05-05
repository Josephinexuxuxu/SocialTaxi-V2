import { StackNavigator } from 'react-navigation';
import { CreateMeetupScreen } from '../screens';
import { OrderDetailScreen } from '../screens/orderdetail';
import { CategoryScreen } from '../screens/categorydetial';
import HomeNavigator from './HomeNavigator';
import { MaterialIcons } from '@expo/vector-icons';
import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';

export default StackNavigator({
    Home: { screen: HomeNavigator },
    CreateMeetup: { screen: CreateMeetupScreen,
      navigationOptions: {
        headerTintColor: '#FF5E00'
      }
    },
    OrderDetailScreen:{
      screen: OrderDetailScreen,
      navigationOptions: {
        headerTintColor: '#FF5E00',
        headerTitle: 'Order',
        headerTitleStyle:{
          color: '#40D4EB',
          fontFamily: "SignikaMedium",
          fontSize: 20
        },
      },
    },
    CategoryScreen:{
      screen: CategoryScreen,
      navigationOptions: {
        headerTintColor: '#FF5E00',
        headerTitle: 'Category',
        headerTitleStyle:{
          color: '#40D4EB',
          fontFamily: "SignikaMedium",
          fontSize: 20
        },
      }
    }
  },
  {
    mode:'modal'
  }
);






