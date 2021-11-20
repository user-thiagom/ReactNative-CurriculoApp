import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Headline, Subheading } from 'react-native-paper'
import { Icon } from 'react-native-vector-icons/icon'

const ExtraInformation = ({contents, title}) => {
    const comp = contents.cont.split(", ")
    
    return (
        <View style={styles.container}>
            <Headline>{title}</Headline>
            <View style={styles.card}>
                {comp.map(content=>(
                    <Subheading>{content}</Subheading>
                ))}
            </View>
        </View>
    )
}

export default ExtraInformation

const styles = StyleSheet.create({
    container: {
        flex:1,
        // backgroundColor: 'green',
        // flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
        borderTopWidth: 5,
        borderRadius: 50
    },
    card: {
        alignItems: 'center',
        // backgroundColor: 'red',
        
    }
})
