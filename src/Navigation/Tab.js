import React from 'react'
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Apresentacao from '../Views/Apresentacao'
import MoreInformation from '../Views/MoreInformation'
//Importar as telas

const Tab = createMaterialBottomTabNavigator()

export default props => {
    return (
        <Tab.Navigator  initialRouteName='Currículo'  >
            <Tab.Screen name='Currículo' component={Apresentacao} options={{
                tabBarIcon: ({color})=>(<Ionicons name='briefcase' size={25} color='#fff'/>),
                
            }}/>
            <Tab.Screen name='Mais Informações' component={MoreInformation} options={{
                tabBarIcon: ({color})=>(<Ionicons name='add-circle' size={25} color='#fff'/>),  
            }}/>
        </Tab.Navigator>
    )
}