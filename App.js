import 'react-native-gesture-handler';

import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import HomePage from 'containers/Home';
import AccountPage from 'containers/Account';

const Stack = createStackNavigator();

const App = () => {

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
          }}
        >
          <Stack.Screen
            name="Home"
            component={HomePage}
          />
          <Stack.Screen
            name="Account"
            component={AccountPage}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
