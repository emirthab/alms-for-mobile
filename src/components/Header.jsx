import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import Icon from "react-native-vector-icons/dist/FontAwesome"

export default function Header() {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.back}>
            </View>
            <View style={styles.logoBorder}>
                <Image source={require("../static/img/uskudar-logo.png")} style={styles.logo} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    back:{        
        backgroundColor: "#16a9a8",
        top:0,
        height:"50%",
        paddingVertical:25,
        width:"100%",
        position:"absolute",        
        
    },
    mainContainer: {        
        paddingTop:19,
        //will be change *--> clock override this        
        flex: 0.105,
        flexDirection: "row",
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        marginBottom:-5
    },

    logo: {
        height: 52,
        width: 52,
    },
    
    logoBorder: {
        width: 64,
        height: 64,
        borderColor: "white",
        borderRadius: 70,
        overflow: "hidden",
        borderWidth: 6,
    },
})