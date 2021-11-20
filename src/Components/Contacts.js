import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Headline, Paragraph, Subheading } from 'react-native-paper'

const Contacts = ({contatos}) => {

    return (
        <View style={styles.container}>
                <Headline children='Contatos' style={styles.title}/>
                <View style={styles.infos}>
                    <Subheading>{contatos.telefone}</Subheading>
                    <Subheading>{contatos.email}</Subheading>
                    <Subheading>{contatos.linkedin}</Subheading>
                    <Subheading>{contatos.github}</Subheading>
                </View>
                
        </View>
    )
}

export default Contacts

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'red',
        flexDirection: 'column',
        // flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        // borderBottomWidth: 5,
        // borderRadius:35,
        // borderTopWidth: 5,
        // borderRadius: 35,
        // borderBottomWidth: 5,
        marginTop: 2
    },
    infos: {
        // justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        // backgroundColor: 'purple'
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