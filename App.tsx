import React from "react";
import { NativeBaseProvider } from "native-base";
import HomeScreen from "./screens/HomeScreen";
import { createStackNavigator } from "@react-navigation/stack";
import WheatherScreen from "./screens/WeatherScreen";
import { NavigationContainer } from "@react-navigation/native";
import { RootStackParamList } from "./types/navigationTypes";
import { LogBox, StatusBar } from "react-native";
import store from "./redux/store";
import { Provider } from "react-redux";
import LocationScreen from "./screens/LocationScreen";

export default function App() {
  LogBox.ignoreLogs(["MapViewDirections Error:"]);
  const RootStack = createStackNavigator<RootStackParamList>();

  return (
    <>
      <StatusBar barStyle='dark-content' />
      <Provider store={store}>
        <NavigationContainer>
          <NativeBaseProvider>
            <RootStack.Navigator initialRouteName='HomeScreen'>
              <RootStack.Screen
                name='HomeScreen'
                component={HomeScreen}
                options={{ headerShown: false }}
              />
              <RootStack.Screen
                name='WheatherScreen'
                component={WheatherScreen}
                options={{
                  headerShown: false,
                }}
              />
              <RootStack.Screen
                name='LocationScreen'
                component={LocationScreen}
                options={{
                  headerShown: false,
                }}
              />
            </RootStack.Navigator>
          </NativeBaseProvider>
        </NavigationContainer>
      </Provider>
    </>
  );
}
