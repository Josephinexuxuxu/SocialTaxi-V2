import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Colors from '../../../constants/Colors';
import styles from './styles/NotificationsScreen';
import { ListItem } from 'react-native-elements';

const coming = [
  {
    name: 'Peter Luger'
  }
]

class NotificationsScreen extends Component {
  static navigationOptions = {
    title: 'Order',
    headerTitleStyle:{
      color: '#40D4EB',
      fontFamily: "SignikaMedium",
      fontSize: 20
    },
    headerStyle: { backgroundColor: '#fff'},

    //tabBar:{
      tabBarIcon: ({tintColor}) => (
        <MaterialIcons name='credit-card' size={25} color={tintColor}/>
      )
    //}
  }
  render() {
    return (
      <View style={styles.root}>
        <View style={{flex: 0.9}}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Coming</Text>
          </View>
          <ScrollView>
            <View>
              {
              coming.map((l, i) => (
                <ListItem
                  key={i}
                  title={l.name}
                  padding = {3}
                  onPress={() => this.props.navigation.navigate("OrderDetailScreen")}
                />
                ))
              }
            </View>
          </ScrollView>
        </View>
        <View style={{flex: 0.9}}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Past</Text>
          </View>
          <ScrollView>
            <View>
              {
              coming.map((l, i) => (
                <ListItem
                  key={i}
                  title={l.name}
                  padding = {3}
                  onPress={() => this.props.navigation.navigate("OrderDetailScreen")}
                />
                ))
              }
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default NotificationsScreen;
