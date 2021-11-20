import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Card, Headline, Paragraph, Subheading, Title } from 'react-native-paper'

const Experience = ({experiences = []}) => {
    const isEmpty = !experiences.length

    const Card = ({experiencia}) =>{
        
        return(
            <View style={styles.card}>
                <View style={styles.line}/>
                <Subheading>{experiencia.empresa}</Subheading>
                <Subheading>{experiencia.cargo}</Subheading>
                <Subheading>{experiencia.periodo}</Subheading>
                <Paragraph style={{textAlign: 'center'}}>{experiencia.descricao}</Paragraph>
                
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Headline style={styles.title}>Experiências</Headline>
            {isEmpty ? <></> : experiences.map(
                    experiencia => (<Card key={experiencia.id} experiencia={experiencia}/>)
                )}
        </View>
    )
}

export default Experience

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
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        borderRadius: 50,
        borderLeftWidth: 2,
        borderRightWidth: 2,
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