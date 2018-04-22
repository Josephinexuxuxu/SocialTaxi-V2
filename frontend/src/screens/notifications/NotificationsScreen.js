import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import Colors from '../../../constants/Colors';

class NotificationsScreen extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#FB9692',
    },
    //tabBar:{
      tabBarIcon: ({tintColor}) => (
        <SimpleLineIcons name='ghost' size={20} color={tintColor}/>
      )
    //}
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>Notifications</Text>
      </View>
    );
  }
}

export default NotificationsScreen;
