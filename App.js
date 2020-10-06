import 'react-native-gesture-handler';

import React from 'react';
import { StyleSheet, StatusBar, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import HomePage from 'containers/Home';
import AccountPage from 'containers/Account';
import HomeDetailsPage from 'containers/Home/Details';
import AccountDetailsPage from 'containers/Account/Details';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}>
      <HomeStack.Screen options={{ headerShown: false }} name="Home" component={HomePage} />
      <HomeStack.Screen name="Home/Details" component={HomeDetailsPage} />
    </HomeStack.Navigator>
  );
}

const AccountStack = createStackNavigator();

function AccountStackScreen() {
  return (
    <AccountStack.Navigator screenOptions={{
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}>
      <AccountStack.Screen name="Account" options={{ headerShown: false }} component={AccountPage} />
      <HomeStack.Screen name="Account/Details" component={AccountDetailsPage} />
    </AccountStack.Navigator>
  );
}

const App = () => {

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            showLabel: true,
            showIcon: false,
            labelStyle: {
              fontSize: 14,
              bottom: 15,
            },
            activeTintColor: 'indianred',
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name="Home" component={HomeStackScreen} />
          <Tab.Screen name="Account" component={AccountStackScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
