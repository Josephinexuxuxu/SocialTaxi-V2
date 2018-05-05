import React, {Component} from 'react';
import { View, Text, ScrollView, FlatList, ImageBackground, TouchableWithoutFeedback, TextInput } from 'react-native';
import styles from './styles/MyMeetupsList';
//import { Col, Row, Grid } from "react-native-easy-grid";
/*
const MyMeetupsList = ({ meetups }) => (
  <View style={styles.root}>
    <View style={styles.contentContainer}>
      <ScrollView>
        {meetups.map((meetup, i) => (
          <Grid key={i} style={styles.meetupCard}>
            <Row style={styles.meetupCardTopContainer}>
              <Text style={styles.meetupCardTitle}>
                {meetup.title}
              </Text>
            </Row>
          </Grid>
        ))}
      </ScrollView>
    </View>
  </View>
);*/

//class SingleHabit extends Component {

const MyMeetupsList = ({meetups}) => (
    <FlatList
      data={meetups}
      renderItem={({item}) => (
        <View style={{marginLeft:8, marginTop: 8} }>
          <View style={styles.meetupCard}>
            <ImageBackground source={ require('../../../imgs/food-2.jpg')} style={{width: 175, height: 200}} blurRadius={6}>
              <Text style={styles.gridItemText}>{item.title}</Text>
            </ImageBackground>
          </View>
        </View>
      )}
      numColumns={2}
      keyExtractor={item => item.title}
    />
);

export default MyMeetupsList;
