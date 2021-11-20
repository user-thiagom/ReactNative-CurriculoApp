import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import Apresentacao from './src/Views/Apresentacao'
import Navigation from './src/Navigation'
import { Provider, DefaultTheme } from 'react-native-paper'


const App = () => {
  return (
    <Provider>
      <SafeAreaView style={{flex:1}}>
      {/* <Apresentacao/> */}
      <Navigation/>
      </SafeAreaView>
    </Provider>
    
  )
}

export default App
