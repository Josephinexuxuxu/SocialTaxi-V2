import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';

import { CreateMeetupForm } from './components';
import { LoadingScreen } from '../../commons';
import { createMeetup } from './actions';
import Colors from '../../../constants/Colors';
import styles from './styles/CreateMeetupScreen';

@connect(
  state => ({
    meetup: state.createMeetup
  }),
  { createMeetup }
)
export default class CreateMeetupScreen extends Component {
  static navigationOptions = {
    title: 'Create a Ride',
    headerTitleStyle:{
      color: '#40D4EB',
      fontFamily: "SignikaMedium",
      fontSize: 20
    },
    headerStyle: { backgroundColor: '#fff'},
    tabBarIcon: ({tintColor}) => (
      <SimpleLineIcons name='plus' size={20} color={tintColor}/>
    )
  }

  state = {
    isDateTimePickerVisible: false,
    date: moment()
  }

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true })

  _handleDateTimePicker = () => this.setState({ isDateTimePickerVisible: false })

  _handleDatePicked = date => {
    this.setState({ date });
    this._handleDateTimePicker();
  }

  _checkTitle() {
    const { date } = this.state;
    if (date > moment()) {
      return moment(date).format('MMMM Do YYYY, h:mm:ss a');
    }
    return 'Pick a date';
  }

  _checkIfButtonSubmitDisabled() {
    const { date } = this.state;

    if (date > moment()) {
      return false;
    }
    return true;
  }

  _createMeetup = async values => {
    await this.props.createMeetup(values);
    this.props.navigation.goBack();
  }

  render() {
    const {
      meetup
    } = this.props;
    if (meetup.isLoading) {
      return (
        <View style={styles.root}>
          <LoadingScreen />
        </View>
      );
    } else if (meetup.error.on) {
      return (
        <View style={styles.root}>
          <Text>{meetup.error.message}</Text>
        </View>
      );
    }
    return (
      <View style={styles.root}>
        <CreateMeetupForm
          createMeetup={this._createMeetup}
          showDateTimePicker={this._showDateTimePicker}
          checkTitle={this._checkTitle()}
        />
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._handleDateTimePicker}
          mode="datetime"
        />
      </View>
    );
  }
}
