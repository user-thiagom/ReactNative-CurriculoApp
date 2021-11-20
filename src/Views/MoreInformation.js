import React from 'react'
import { View, Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import ExtraInformation from '../Components/ExtraInformation'


export default props => {
    return (
        <SafeAreaView style={styles.container}>
                <ExtraInformation title='Principais Competências' contents={testeCompetencias}/>
                <ExtraInformation title='Idiomas' contents={testeIdiomas}/>
                <ExtraInformation title='Hobbies' contents={testeHobbies}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#90caf9'
    },
    scroll: {
        backgroundColor: '#90caf9',
        width: '100%',
        // flex:1,
        
    }
})


const testeCompetencias = {
    id: '1',
    cont: 'React Native, Javasrcipt, HTML'
}

const testeIdiomas = {
    id: '1',
    cont: 'Português, Ingles, Espanhol'
}

const testeHobbies = {
    id: '1',
    cont: 'Estudar Desenvolvimento Web, Musculação, Vôleibol'
}