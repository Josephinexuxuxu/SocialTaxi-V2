import { Font } from 'expo';

const cachedFonts = fonts =>
  fonts.map(font => Font.loadAsync(font));


export const fontAssets = cachedFonts([
  {
    SignikaRegular: require('../assets/fonts/Signika-Regular.ttf')
  },
  {
    SignikaBold: require('../assets/fonts/Signika-Bold.ttf')
  },
  {
    SignikaLight: require('../assets/fonts/Signika-Light.ttf')
  },{
    SignikaMedium: require('../assets/fonts/Signika-SemiBold.ttf')
  }
]);
