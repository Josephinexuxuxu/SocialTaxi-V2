import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Colors from '../../../constants/Colors';
import { SimpleLineIcons } from '@expo/vector-icons';

class ProfileScreen extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#FB9692',
    },
    //tabBar:{
      tabBarIcon: ({tintColor}) => (
        <SimpleLineIcons name='user' size={20} color={tintColor}/>
      )
    //}
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>ProfileScreen</Text>
      </View>
    );
  }
}

export default ProfileScreen;
