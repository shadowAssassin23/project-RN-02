import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from 'react-native'

export default function ElevatedCards(){
    return (
        <View>
            <Text style = {styles.headingText}>Elevate Cards</Text>
            <ScrollView horizontal = {true}>
                <View style={[styles.card,{backgroundColor:'#a29bfe'}]}>
                    <Text >Hello</Text>
                </View>
                <View style={[styles.card,{backgroundColor:'#a29bfe'}]}>
                    <Text >Hello</Text>
                </View>
                <View style={[styles.card,{backgroundColor:'#a29bfe'}]}>
                    <Text >Hello</Text>
                </View>
                <View style={[styles.card,{backgroundColor:'#a29bfe'}]}>
                    <Text >Hello</Text>
                </View>
                <View style={[styles.card,{backgroundColor:'#a29bfe'}]}>
                    <Text >Hello</Text>
                </View>
                <View style={[styles.card,{backgroundColor:'#a29bfe'}]}>
                    <Text >🤔</Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 28,
        fontWeight: 'bold',
        marginVertical:8
    },
    container: {
        flex:1,
        flexDirection: 'row'
    },
    card : {
        width: 100,
        height: 100,
        margin:8,
        borderRadius: 6,
        flex : 1,
        alignItems :'center',
        justifyContent:'center',
        elevation:7,
        shadowOffset:{
            width:5,
            height:5,
        },
        shadowColor:'red',
    },
})