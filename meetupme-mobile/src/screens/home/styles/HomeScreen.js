import EStyleSheet from 'react-native-extended-stylesheet';
import { Constants } from 'expo';

const styles = EStyleSheet.create({
  root: {
    flex: 1,
    //height: 300,
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  topContainer: {
    flex: 1.5
    //paddingTop: Constants.statusBarHeight,
  },
  bottomContainer: {
    flex: 7.5
    //backgroundColor: 'blue'
  },
  title: {
    color: '#9ADDDD',
    fontSize: 25,
    fontFamily: 'SignikaRegular'
  },
  titleContainer: {
    flex: 0.2,
    paddingHorizontal: '2.5%',

  }
});

export default styles;
