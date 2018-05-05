import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  root: {
    flex: 1
  },
  titleContainer: {
    flex: 0.15,
    paddingHorizontal: '2.5%',
    paddingVertical: '2.5%'
  },
  title: {
    color: '#9ADDDD',
    fontSize: 25,
    fontFamily: 'SignikaRegular'
  },
  contentContainer: {
    flex:1
  },
  meetupCard: {
    height: 200,
    width: 175,
    //marginHorizontal: '1.5%',
    //borderWidth: 2,
    //borderColor:'#fff',
    backgroundColor: 'transparent'
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
  },
  grid: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
},
gridItem: {
    margin:5,
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
},
gridItemImage: {
    width: 100,
    height: 100,
    borderWidth: 1.5,
    borderColor: 'white',
    borderRadius: 50,
},
gridItemText: {
    marginTop: 50,
    textAlign:'center',
},
});

export default styles;
