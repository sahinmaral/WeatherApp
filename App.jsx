import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/screens/Home";
import Settings from "./src/screens/Settings";
import About from "./src/screens/About";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import Constants from "expo-constants";
import FlashMessage from "react-native-flash-message";
import PrivacyPolicy from "./src/screens/PrivacyPolicy/PrivacyPolicy";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationWrapper />
      <FlashMessage
        position="top"
        statusBarHeight={Constants.statusBarHeight}
      />
    </Provider>
  );
}

function NavigationWrapper() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
