import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/screens/Home';
import Settings from './src/screens/Settings';
import About from './src/screens/About';
import PrivacyPolicy from './src/screens/PrivacyPolicy';
import {store} from './src/redux/store';
import {Provider} from 'react-redux';
import {StatusBar, Platform} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import SplashScreen from 'react-native-splash-screen';
import {useEffect} from 'react';

const Stack = createStackNavigator();

function NavigationWrapper() {
  useEffect(() => {
    if (Platform.OS === 'android') {
      SplashScreen.hide();
    }
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function App() {
  return (
    <Provider store={store}>
      <NavigationWrapper />
      <FlashMessage position="top" statusBarHeight={StatusBar.currentHeight} />
    </Provider>
  );
}

export default App;
