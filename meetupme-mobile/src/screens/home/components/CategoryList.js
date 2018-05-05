import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './styles/MyMeetupsList';

const CategoryList = ({ categories }) => (
  <View style={styles.root}>
    <View style={styles.contentContainer}>
      <ScrollView>
        {categories.map((category, i) => (
          <View key={i} style={styles.meetupCard}>
            <View style={styles.meetupCardTopContainer}>
              <Text style={styles.meetupCardTitle}>
                {meetup.title}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  </View>
);

export default CategoryList;
