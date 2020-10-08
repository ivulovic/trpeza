import 'react-native-gesture-handler';

import React from 'react';
import { StyleSheet, StatusBar, Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import HomePage from 'containers/Home';
import AccountPage from 'containers/Account';
import HomeDetailsPage from 'containers/Home/Details';
import AccountDetailsPage from 'containers/Account/Details';
import RecipesPage from 'containers/Recipes';
import RecipesDetailsPage from 'containers/Recipes/Details';

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
const RecipesStack = createStackNavigator();

function RecipesStackScreen() {
  return (
    <RecipesStack.Navigator screenOptions={{
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}>
      <RecipesStack.Screen options={{ headerShown: false }} name="Recipes" component={RecipesPage} />
      <RecipesStack.Screen name="Recipes/Details" component={RecipesDetailsPage} />
    </RecipesStack.Navigator>
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
// https://www.flaticon.com/free-icon/paste_3388549
// https://www.flaticon.com/packs/basic-ui-27
const tabIcons = {
  Home: require("./src/images/icons/navigation/main/home.png"),
  Recipes: require("./src/images/icons/navigation/main/chef.png"),
  Account: require("./src/images/icons/navigation/main/user.png"),
}
const App = () => {

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              return <Image resizeMode="contain" style={{ height: 24, width: 24, tintColor: focused ? '#4ad295' : "#000" }} source={tabIcons[route.name]} />
            },
          })}
          tabBarOptions={{
            showLabel: false,
          }}
        >
          <Tab.Screen name="Home" component={HomeStackScreen} />
          <Tab.Screen name="Recipes" component={RecipesStackScreen} />
          <Tab.Screen name="Account" component={AccountStackScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
