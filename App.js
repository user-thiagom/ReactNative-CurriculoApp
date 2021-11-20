import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import Apresentacao from './src/Views/Apresentacao'
import Navigation from './src/Navigation'

const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <Apresentacao/>
      
    </SafeAreaView>
  )
}

export default App
