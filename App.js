// Ket hop cac man hinh voi nhau de chay ung dung
import React from 'react';
import { StyleSheet, Platform, Image, Text, View } from 'react-native';
import { SwitchNavigator } from 'react-navigation'
// import the different screens
import Loading from './screens/loading';
import SignUp from './screens/signup';
import Login from './screens/login';
import Main from './screens/home';
// create our app's navigation stack
const App = SwitchNavigator(
  {
    loading,
    signup,
    login,
    home
  },
  {
    initialRouteName: 'Loading'
  }
)
export default App;