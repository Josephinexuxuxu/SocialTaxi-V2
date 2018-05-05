import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Colors from '../../../constants/Colors';
import { MaterialIcons } from '@expo/vector-icons';

class ProfileScreen extends Component {
  static navigationOptions = {
    title: 'ProfileScreen',
    headerTitleStyle:{
      color: '#40D4EB',
      fontFamily: "SignikaMedium",
      fontSize: 20
    },
    headerStyle: { backgroundColor: '#fff'},

    //tabBar:{
      tabBarIcon: ({tintColor}) => (
        <MaterialIcons name='account-circle' size={25} color={tintColor}/>
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
