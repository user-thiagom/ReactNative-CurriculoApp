import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Headline, Paragraph } from 'react-native-paper'

const Resumo = ({texto}) => {
    return (
        <View style={styles.container}>
            <Headline>Resumo</Headline>
            <Paragraph style={styles.paragraph}>{texto || "Não Informado"}</Paragraph>
        </View>
    )
}

export default Resumo

const styles = StyleSheet.create({
    container: {
        
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderWidth: 5
    },
    paragraph: {
        textAlign:'center',
    }
})