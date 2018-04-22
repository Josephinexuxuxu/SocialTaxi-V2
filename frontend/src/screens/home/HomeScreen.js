import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { SimpleLineIcons, MaterialIcons } from '@expo/vector-icons';

import { LoadingScreen } from '../../commons';
import { MyMeetupsList } from './components';


import { fetchMyMeetups } from './actions';
import Colors from '../../../constants/Colors';
import styles from './styles/HomeScreen';
/*
const stateMap = (state) => {
  return{
    myMeetups: state.home.myMeetups,
    fetchMyMeetups
  }
};
*/


@connect(
  state => ({
    myMeetups: state.home.myMeetups
  }),
  { fetchMyMeetups }
)


class HomeScreen extends Component {
    static navigationOptions = {

    //header: ({ navigate }) => {
      title: 'HomeScreen',
      headerTitleStyle:{
        color: '#40D4EB'
      },
      headerStyle: { backgroundColor: '#fff' },

      headerRight: (
        <TouchableOpacity style={{marginRight:10}} onPress={() => this.props.navigation.navigate('CreateMeetup')}>
        <MaterialIcons
          name="add-circle"
          size={30}
          color="#40D4EB"
        />
      </TouchableOpacity>
      ),
    //},
    tabBarIcon: ({tintColor}) => (
      <SimpleLineIcons
      name='home'
      size={20}
      color={tintColor}
      />
    )
  }

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
          <Text>HomeScreen</Text>
        </View>
        <View style={styles.bottomContainer}>
          <MyMeetupsList meetups={data} />
        </View>
      </View>
    );
  }
}

export default HomeScreen;
