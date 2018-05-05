import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { connect } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons';

import { LoadingScreen } from '../../commons';
import { MyMeetupsList, CategoryList } from './components';


import { fetchMyMeetups } from './actions';
import Colors from '../../../constants/Colors';
import styles from './styles/HomeScreen';
import { CreateMeetupScreen } from '../createMeetup/CreateMeetupScreen';
import { SearchBar, ListItem } from 'react-native-elements';

const list = [
  {
    name: 'LifeStyle'
  },
  {
    name: 'Food & Drinks'
  },
  {
    name: 'Community'
  },
  {
    name: 'Business & Professional'
  },
  {
    name: 'Art & Performance'
  }
]

@connect(
  state => ({
    myMeetups: state.home.myMeetups
  }),
  { fetchMyMeetups }
)



class HomeScreen extends Component {
    static navigationOptions = ({navigation: {navigate}})=>({
      title: 'Rides',
      headerTitleStyle:{
        color: '#40D4EB',
        fontFamily: "SignikaMedium",
        fontSize: 20
      },
      headerStyle: { backgroundColor: '#fff'},


      headerLeft: (
        <TouchableOpacity style={{marginLeft:20}} onPress={() => navigate('CreateMeetup')}>
          <MaterialIcons
            name="add"
            size={30}
            color="#FF5E00"
        />
      </TouchableOpacity>
      ),

    //},
    tabBarIcon: ({tintColor}) => (
      <MaterialIcons
      name='search'
      size={25}
      color={tintColor}
      />
    )
  })

   componentDidMount() {
    this.props.fetchMyMeetups();
  }

  render() {
    console.log(this.props);
    const {
      myMeetups: {
        isFetched,
        data,
        error
      }
    } = this.props;
    if (!isFetched) {
      return <LoadingScreen />;
    } else if (error.on) {
      return (
        <View>
          <Text>{error.message}</Text>
        </View>
      );
    }
    return (
      <View style={styles.root}>
        <View style={styles.topContainer}>
          <SearchBar
            lightTheme
            platform="ios"
            containerStyle={{ backgroundColor: '#fff'  }}
            //onChangeText={someMethod}
            //nClearText={someMethod}
            icon={{ type: 'font-awesome', name: 'search' }}
            placeholder='Type Here...' />
        </View>
        <View style={{flex: 1.3, paddingTop:12, paddingLeft: 10}}>
          <Text style={styles.title}>Trending</Text>
        </View>
        <View style={styles.bottomContainer}>
          <ScrollView horizontal style={{paddingLeft:2}}>
            <Image source={require('../../imgs/east.png')} style={{height: 200, width: 200, borderWidth: 2,borderColor:'#fff'}}/>
            <Image source={require('../../imgs/nba.png')} style={{height: 200, width: 200, borderWidth: 2,borderColor:'#fff'}}/>
            <Image source={require('../../imgs/music.png')} style={{height: 200, width: 200, borderWidth: 2,borderColor:'#fff'}}/>
          </ScrollView>
        </View>
        <View style={{flex: 8}}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Category</Text>
          </View>
          <ScrollView>
            <View>
              {
              list.map((l, i) => (
                <ListItem
                  key={i}
                  title={l.name}
                  padding = {3}
                  onPress={() => this.props.navigation.navigate("CategoryScreen")}
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
export default HomeScreen;
