import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center'
  },
  container:{
    flex: 1,
    width: '90'
  },

  iconClose: {
    marginLeft: '3'
  },
  buttonCreate:{
    position:'absolute',
    right:0,
    left: 0
  }
});

export default styles;
