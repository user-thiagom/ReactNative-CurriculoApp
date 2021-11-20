import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Avatar, Divider, Headline, Subheading } from 'react-native-paper'

const BasicsInformations = ({nome, profissao, pais, uf, cidade}) => {
    return (
        <View style={styles.container}>
            <Avatar.Image source={require('../Assets/Thorfinn.png')} size={100}/>
            <View style={styles.text}>
                <Headline>{nome}</Headline>
                <Subheading>{profissao}</Subheading>
                <Subheading>{pais}, {uf}, {cidade}</Subheading>
                
            </View>
        </View>
    )
}

export default BasicsInformations

const styles = StyleSheet.create({
    container: {
        // flex:1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        // backgroundColor: '#bbdefb',
        width: '100%',
        // borderBottomWidth:10,
        // borderRadius: 200,
        // borderTopWidth:10,
        // borderColor: '#1d3557',
        padding: 10,
        // borderWidth: 5,
        // margin: 10,
    },
    text: {
        alignItems: 'center'
    }
})
