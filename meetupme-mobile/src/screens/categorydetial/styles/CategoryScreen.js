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
    flex: 0.8
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

  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
  countContainer: {
    alignItems: 'center',
    padding: 10
  },
  countText: {
    color: '#FF00FF'
  }
});

export default styles;
