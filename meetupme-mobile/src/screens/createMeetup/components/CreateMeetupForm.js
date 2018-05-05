import React from 'react';
import { View } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'react-native-elements';

import { TextInputWithValidations } from '../../../commons';
import { createMeetupValidations } from '../validations';
import Colors from '../../../../constants/Colors';
import styles from './styles/CreateMeetupForm';

const CreateMeetupForm = ({
  createMeetup,
  checkTitle,
  showDateTimePicker,
  handleSubmit,
  invalid,
  submitting,
}) => (
  <View style={styles.container}>
    <Field
      component={TextInputWithValidations}
      name="title"
      label="Title"
      selectionColor={'#FB9692'}
      containerStyle={styles.item}
    />
    <Field
      component={TextInputWithValidations}
      name="description"
      label="Description"
      multiline
      selectionColor={'#FB9692'}
      containerStyle={styles.item}
    />
    <View style={styles.item}>
      <Button
        height='100'
        raised
        fontFamily="SignikaMedium"
        onPress={showDateTimePicker}
        title={checkTitle}
      />
    </View>
    <View style={styles.buttonCreate}>
      <Button
        backgroundColor={'#384259'}
        title="Create Topic"
        raised
        fontFamily="SignikaMedium"
        disabled={invalid || submitting}
        onPress={handleSubmit(createMeetup)}
      />
    </View>
  </View>
);

export default reduxForm({
  form: 'createMeetup',
  validate: createMeetupValidations,
})(CreateMeetupForm);
