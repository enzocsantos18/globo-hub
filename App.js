import React from 'react';

import {StatusBar, View} from 'react-native'
import Start from './src/pages/Start'
import Register from './src/pages/favorites'
import Routes from './src/routes'


export default function App() {
  return (
    <View style={{backgroundColor: '#fff', height: '100%', width: '100%'}}>
    <StatusBar
    backgroundColor="#0669DE"
    barStyle="light-content"
  />
  <Routes/>
    {/* <Register/>
    */}
   </View>
  );
}

