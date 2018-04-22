import React from 'react';
import { AppLoading } from 'expo';
import EStyleSheet from 'react-native-extended-stylesheet';
import Colors from './constants/Colors';
import { HomeScreen } from './src/screens';
import { cachedFonts } from './helpers';
import Root from './src/Root';
import { Provider } from 'react-redux';
import store from './src/redux/store';

EStyleSheet.build();

export default class App extends React.Component {
  state = {
    fontLoaded: false
  }

  componentDidMount() {
    this._loadAssetsAsync();
  }

  async _loadAssetsAsync() {
    const fontAssets = cachedFonts([
      {
        SignikaRegular: require('./assets/fonts/Signika-Regular.ttf')
      },
      {
        SignikaBold: require('./assets/fonts/Signika-Bold.ttf')
      },
      {
        SignikaLight: require('./assets/fonts/Signika-Light.ttf')
      },
      {
        SignikaMedium: require('./assets/fonts/Signika-SemiBold.ttf')
      }
    ]);

    await Promise.all(fontAssets);

    this.setState({ fontLoaded: true });
  }

  render() {
    if (!this.state.fontLoaded) {
      return <AppLoading />;
    }
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}
