import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Subheading, Paragraph, Headline } from 'react-native-paper';

const Qualification = ({formacoes = []}) => {
    const isEmpty = !formacoes.length

    const Card = ({formacao}) =>{
        
        return(
            <View style={styles.card}>
                <View style={styles.line}/>
                <Subheading>{formacao.instituicao}</Subheading>
                <Paragraph style={{textAlign: 'center'}}>{formacao.curso} * ({formacao.anoDeInicio} - {formacao.anoDeTermino})</Paragraph>
                
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Headline style={styles.title}>Experiências</Headline>
            {isEmpty ? <></>: formacoes.map(
                formacao => <Card formacao={formacao} key={formacao.id}/>
            )}
        </View>
    )
}

export default Qualification


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%'
    },
    title: {
        textAlign: 'center'
    },
    line: {
        borderWidth: 1,
        width: '10%',
        marginBottom: 5,
        marginTop: 5
    }
})