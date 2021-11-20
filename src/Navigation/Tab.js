import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Teste from '../Views/Teste'
import Apresentacao from '../Views/Apresentacao'
//Importar as telas

const Tab = createBottomTabNavigator()

export default props => {
    return (
        <Tab.Navigator initialRouteName='Teste'>
            <Tab.Screen name='Teste' component={Apresentacao}/>
        </Tab.Navigator>
    )
}