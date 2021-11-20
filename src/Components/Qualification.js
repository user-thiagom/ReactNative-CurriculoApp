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
            <Headline style={styles.title}>Formação</Headline>
            {isEmpty ? <></>: formacoes.map(
                formacao => <Card formacao={formacao} key={formacao.id}/>
            )}
        </View>
    )
}

export default Qualification


const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'blue',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: 5,
        borderRadius: 35,
        borderBottomWidth: 5,
        marginTop: 2
    },
    card: {
        // backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        borderRadius: 50,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        marginTop: 5
    },
    title: {
        textAlign: 'center',
        color: '#0d47a1',
        textTransform: 'uppercase',
        textShadowColor: '#0466c8',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 1
    },
    line: {
        borderWidth: 1,
        width: '10%',
        marginBottom: 5,
        marginTop: 5
    }
})