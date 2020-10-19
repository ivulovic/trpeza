import 'react-native-gesture-handler';

import React from 'react';
import { StyleSheet, StatusBar, Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import ProductsPage from 'containers/Products';
import AccountPage from 'containers/Account';
import ProductsDetailsPage from 'containers/Products/Details';
import AccountDetailsPage from 'containers/Account/Details';
import RecipesPage from 'containers/Recipes';
import RecipesDetailsPage from 'containers/Recipes/Details';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const ProductsStack = createStackNavigator();

function ProductsStackScreen() {
  return (
    <ProductsStack.Navigator screenOptions={{
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}>
      <ProductsStack.Screen options={{ headerShown: false }} name="Products" component={ProductsPage} />
      <ProductsStack.Screen name="Products/Details" component={ProductsDetailsPage} />
    </ProductsStack.Navigator>
  );
}
const RecipesStack = createStackNavigator();

function RecipesStackScreen() {
  return (
    <RecipesStack.Navigator screenOptions={{
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}>
      <RecipesStack.Screen options={{ headerShown: false }} name="Recipes" component={RecipesPage} />
      <RecipesStack.Screen name="Recipes/Details" options={{ headerShown: false }} component={RecipesDetailsPage} />
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
      <ProductsStack.Screen name="Account/Details" component={AccountDetailsPage} />
    </AccountStack.Navigator>
  );
}
const tabIcons = {
  Products: require("./src/images/icons/navigation/main/list2.png"),
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
              return <Image resizeMode="contain" style={{ height: 26, width: 26, tintColor: focused ? '#4ad295' : "#000" }} source={tabIcons[route.name]} />
            },
          })}
          tabBarOptions={{
            showLabel: false,
          }}
        >
          <Tab.Screen name="Recipes" component={RecipesStackScreen} />
          <Tab.Screen name="Products" component={ProductsStackScreen} />
          <Tab.Screen name="Account" component={AccountStackScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
