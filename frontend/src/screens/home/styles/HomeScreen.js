import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  root: {
    flex: 1,
    //height: 300,
    justifyContent: 'center',
    backgroundColor: '#c0d6e4'
  },
  topContainer: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
    //backgroundColor: 'red'
  },
  bottomContainer: {
    flex: 0.8
    //backgroundColor: 'blue'
  }
});

export default styles;
