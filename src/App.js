/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './Screens/Home'
import Splash from './Screens/Splash'
import Map from './Screens/Map'
import { Provider } from 'react-redux'
import Store from './redux/store'

const RootStack = createStackNavigator()

export default function() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <RootStack.Navigator
          initialRouteName='Splash'
        >
          <RootStack.Screen 
            name="Home" 
            component={Home} 
          />
          <RootStack.Screen 
            name="Map" 
            component={Map} 
          />
          <RootStack.Screen 
            name="Splash" 
            component={Splash} 
            options={{
              headerShown: false,
            }}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
