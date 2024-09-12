import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
    return (
        <View>
            <Text style={styles.headingText}>FlatCards</Text>
            <View style={styles.container}>
                <View style = {[styles.card,styles.cardOne]}>
                    <Text>Red</Text>
                </View>
                <View style = {[styles.card,styles.cardTwo]}>
                    <Text>Green</Text>
                </View>
                <View style = {[styles.card,styles.cardThree]}>
                    <Text>Blue</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 28,
        fontWeight: 'bold',
        marginVertical:10,
    },
    container: {
        flex:1,
        flexDirection: 'row',
        flexGrow: 1,
    },
    card : {
        flex : 1,
        alignItems: 'center',
        justifyContent : 'center',
        height: 100,
        borderRadius: 10,
        margin:8
    },
    cardOne : {
        backgroundColor: '#E44236',
        marginLeft:0,
    },
    cardTwo : {
        backgroundColor: '#45CE30'
    },
    cardThree : {
        backgroundColor: '#01CBC6'
    },
})