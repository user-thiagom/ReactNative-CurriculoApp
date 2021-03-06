import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import { Divider } from 'react-native-paper'
import BasicsInformations from '../Components/BasicsInformations'
import Contacts from '../Components/Contacts'
import Experience from '../Components/Experience'
import Qualification from '../Components/Qualification'
import Resumo from '../Components/Resumo'

export default props => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <BasicsInformations nome='Thiago Mateus' profissao='Programador' cidade='Ipojuca' uf='Pernambuco' pais='Brasil'/>    
                <Resumo 
                    texto= {loreimpsu}/>
                <Experience experiences={testeExperiencias}/>
                <Qualification formacoes={testeFormacoes}/>
                <Contacts contatos={testContatos}/>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#90caf9',
        // paddingTop: 10,
    },
    scroll: {
        backgroundColor:'#25F65D'
    }
})

const loreimpsu = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla, lacus ut convallis mollis, mi lectus pulvinar neque, eu blandit tortor tellus nec metus. Integer a rutrum ex. Donec ut posuere elit.'

const testeExperiencias = [{
    id: '1',
    empresa: 'Avanade',
    cargo: 'Desenvolvedor Junior',
    periodo: '2020 - 2021',
    descricao: 'Fusce quam nisi, consequat sodales felis eget, imperdiet vulputate tellus.'
},
{
    id: '2',
    empresa: 'everis',
    cargo: 'Desenvolvedor Junior',
    periodo: '2020 - 2021',
    descricao: ''
}
]

const testeFormacoes = [
    {
        id: '1',
        instituicao:'Unicap',
        curso:'Sistemas para Internet',
        anoDeInicio: 2020,
        anoDeTermino: 2022
    },
    {
        id: '2',
        instituicao:'Unibratec',
        curso:'Analise e desenvolvimento de sistemas',
        anoDeInicio: 2019,
        anoDeTermino: 2022
    }
]

const testContatos = {
    id:'1',
    telefone: '(81)989392358',
    email: 'thiago.2020107149@unicap.br',
    linkedin: 'https://www.linkedin.com',
    github: 'https://github.com/user-thiagom'
}