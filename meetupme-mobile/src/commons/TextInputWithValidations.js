import React from 'react';
import { View } from 'react-native';
import { FormInput, FormLabel, FormValidationMessage } from 'react-native-elements';
import { fontAssets } from '../../helpers';
import Colors from '../../constants/Colors';

const TextInputWithValidations = ({
  input,
  containerStyle,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <View style={containerStyle}>
    <FormLabel fontFamily="SignikaRegular" labelStyle={{ color: '#384259' }}>
      {label}
    </FormLabel>
    <FormInput
      {...input}
      {...custom}
    />
    {error && touched &&
      <FormValidationMessage fontFamily="SignikaRegular" labelStyle={{ color: '#FB9692' }}>
        {error}
      </FormValidationMessage>
    }
  </View>
);

export default TextInputWithValidations;
