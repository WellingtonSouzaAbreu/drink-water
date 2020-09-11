import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default props =>
    <View style={styles.card}>
        <Text style={styles.cardTitle}>{props.title}</Text>
        <Text style={styles.cardContent}>{props.value}</Text>
    </View>


const styles = StyleSheet.create({
    card: {
        marginTop: 70,
        paddingHorizontal: 30,
        alignItems: 'center',
    },

    cardTitle: {
        fontSize: 18,
        color: '#33d6ff'
    },

    cardContent: {
        
    },
})
