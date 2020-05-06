import React from 'react'
import {NavigationContainer} from '@react-navigation/native'

import {createStackNavigator} from '@react-navigation/stack'
import Start from './pages/Start'
import Register from './pages/Register'
import Favorites from './pages/favorites'
import Login from './pages/Login'

import Stories from './pages/Home/Stories'


const AppStack = createStackNavigator();

export default function Routes(){
  return(
    <NavigationContainer >
      <AppStack.Navigator initialRouteName="Start" screenOptions={{cardStyle: {backgroundColor: '#fff'}}}>
        <AppStack.Screen  name="Start" component={Start} options={{headerShown: false}}  />
        <AppStack.Screen  name="Register" 
        options={
          {
            title: "",
            headerTransparent: true, 
            headerTintColor: '#fff',
          }
        } 
        component={Register} />
         <AppStack.Screen  name="Favorites" 
        options={
          {
            title: "",
            headerTransparent: true, 
            headerTintColor: '#fff',
          }
        } 
        component={Favorites} />

  <AppStack.Screen name="Stories" 
        options={
          {
            title: "",
            headerTransparent: true, 
            headerTintColor: '#fff',
          }
        } 
        component={Stories} />

<AppStack.Screen name="Login" 
        options={
          {
            title: "",
            headerTransparent: true, 
            headerTintColor: '#fff',
          }
        } 
        component={Login} />

      </AppStack.Navigator>

      
    </NavigationContainer>
  )
}