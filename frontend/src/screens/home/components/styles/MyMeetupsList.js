import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  root: {
    flex: 1
  },
  titleContainer: {
    flex: 0.1,
    paddingHorizontal: '2.5%',
    paddingVertical: '2.5%'
  },
  title: {
    color: '#fff',
    fontSize: 25,
    fontFamily: 'SignikaRegular'
  },
  contentContainer: {
    flex:1
  },
  meetupCard: {
    height: 200,
    width: 175,
    marginHorizontal: '1.5%',
    borderWidth: 2,
    borderColor:'#c0d6e4',
    backgroundColor: '#FB9692'
  },
  meetupCardTopContainer: {
    flex: 1,
    position: 'relative'
  },
  meetupCardTitle: {
    fontFamily: 'SignikaBold',
    position: 'absolute',
    color: '#fff',
    top: '2%',
    left: '2%'
  },
  meetupCardBottomContainer: {
    flex: 0.5,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal: '2.5%'
  },
  meetupCardMetaName: {
    fontSize: 15,
    fontFamily: 'SignikaRegular'
  },
  meetupCardMetaDate: {
    fontSize: 13,
    fontFamily: 'SignikaLight'
  }
});

export default styles;
