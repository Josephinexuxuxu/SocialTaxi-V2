import React, { Component } from 'react';
import { Alert, View, Text, ScrollView, List, FlatList, ImageBackground, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Colors from '../../../constants/Colors';
import { ListItem } from 'react-native-elements';
import styles from './styles/CategoryScreen';
import { SearchBar} from 'react-native-elements';
import { MyMeetupsList } from '../home/components';

import { fetchMyMeetups } from '../home/actions';
import { connect } from 'react-redux';
import { LoadingScreen } from '../../commons';
import {cloneDeep} from 'lodash';

@connect(
  state => ({
    myMeetups: state.home.myMeetups
  }),
  { fetchMyMeetups }
)

class CategoryScreen extends Component{
  constructor(props) {
    super(props)
    this.state = {
      myMeetups: [
        {"title": "hahaha", "currentSeat": 4, "seatNumber": 10, "description": "Interesting"},
        {"title": "this is another one", "currentSeat": 0, "seatNumber": 6, "description": "Interesting"},
        {"title": "try to test this one", "currentSeat": 2, "seatNumber": 100, "description": "Interesting"}]
    }
  }
  onPress(index) {
    const myMeetups = cloneDeep(this.state.myMeetups);
    myMeetups[index].currentSeat += 1;

    this.setState({myMeetups}, () => {
      console.log(this.state.myMeetups); // further value
    });
  }

  render() {
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

        <View style={styles.bottomContainer}>

        <FlatList
      extraData={this.state}
      data={this.state.myMeetups}
      renderItem={({item, index}) => (
        <View style={{marginLeft:8, marginTop: 8} }>
          <View style={styles.meetupCard}>
          <TouchableOpacity onPress={() => this.onPress(index)}>
          <View>
            <ImageBackground source={ require('../../imgs/food-2.jpg')} style={{width: 175, height: 200}} blurRadius={6}>
              <Text style={styles.gridItemText}>{item.title}</Text>
                <View style= {[styles.singleHabit, {backgroundColor: this.props.color}]}>
                  <Text>{item.currentSeat} / {item.seatNumber} </Text>
                </View>
              </ImageBackground>
            </View>
          </TouchableOpacity>
          </View>
        </View>
      )}
      numColumns={2}
      keyExtractor={item => item.title}
    />
        </View>
      </View>
    );
  }
}

export default CategoryScreen;

