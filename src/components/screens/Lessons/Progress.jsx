import React from 'react'
import { Layout } from "react-native-ui-kitten"
import { Text, StyleSheet, View } from "react-native"
import { Icon } from "react-native-vector-icons/dist/FontAwesome"

export default function Progress(props) {

    const styles = StyleSheet.create({
        progressContainer: {
            flexDirection:"row",
            flex: 1
        },

        container: {
            marginTop: 10,
            flex: 1,
            flexDirection: "row",
            alignItems: "center"
    
        },

        progressBox: {
            flex: (props.percentage/100) - 0.05,
            height: 5,
            backgroundColor: "#fab614",
            borderRadius: 10,
        },
    
        text: {
            color:"grey"
        },
    })

    return (
        <View style={styles.container}>
            <View style={styles.progressContainer}>
                <View style={styles.progressBox}>
                </View>
            </View>            
            <Text style={styles.text}>{props.percentage+"%"}</Text>
        </View>
    )
    
}


