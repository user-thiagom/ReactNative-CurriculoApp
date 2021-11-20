import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Headline, Paragraph } from 'react-native-paper'

const Resumo = ({texto}) => {
    return (
        <View style={styles.container}>
            <Headline style={styles.title}>Resumo</Headline>
            <Paragraph style={styles.paragraph}>{texto || "Não Informado"}</Paragraph>
        </View>
    )
}

export default Resumo

const styles = StyleSheet.create({
    container: {
        
        justifyContent: 'flex-start',
        alignItems: 'center',
        // borderWidth: 5,
        borderTopWidth: 5,
        borderRadius: 35,
        borderBottomWidth: 5,
    },
    paragraph: {
        textAlign:'center',
        
    },
    title: {
        color: '#0d47a1',
        textTransform: 'uppercase',
        textShadowColor: '#0466c8',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 1
    }
})