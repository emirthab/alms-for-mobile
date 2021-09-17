import React from 'react'
import * as eva from '@eva-design/eva';
import Icon from "react-native-vector-icons/dist/FontAwesome"
import {
    StyleSheet,
    View,
    Image,
    ImageBackground,
    Dimensions,
} from "react-native"

import {
    ApplicationProvider,
    Input,
    Button,
    Layout,
    Text
} from '@ui-kitten/components';

export default function Login() {
    return (
        <ImageBackground resizeMode="cover" source={require("../static/img/kiz-kulesi.jpg")} style={styles.backgroundImage}>
            <Layout style={styles.labelWhite} />
            <Image source={require("../static/img/login-header.png")} style={styles.headerImage} />
            <Layout style={styles.mainContainer}>
                <Text style={styles.alms}>ALMS</Text>
                <Layout style={styles.inputContainer}>
                    <Text style={styles.inputText}>
                        Öğrenci Numarası
                    </Text>
                    <Input accessoryLeft={iconUser} status="warning" style={styles.input}>
                    </Input>
                </Layout>

                <Layout style={styles.inputContainer}>
                    <Text style={styles.inputText}>
                        Şifre
                    </Text>
                    <Input accessoryLeft={iconPass} status="warning" style={styles.input}>
                    </Input>
                </Layout>
                <Button status="warning" style={styles.button}>
                    Giriş Yap
                </Button>
                <Text style={styles.footerInfo}> www.uskudar.edu.tr</Text>
            </Layout>
        </ImageBackground>
    )
}

const iconUser = <Icon name="user" size={22} color="#fab614"/>
const iconPass = <Icon name="lock" size={24} color="#fab614"/>

const styles = StyleSheet.create({
    alms:{
        fontSize:40,
        bottom:20,     
        fontWeight:"800"
    },

    footerInfo:{
        color:"#1c978b",
        position:"absolute",
        bottom:60,
    },

    button: {
        top:20,
        backgroundColor: "#fab614",
        borderRadius: 100
        // #1c978b

    },

    inputText: {
        color:"#1c978b",
        top: -5,
        left: 5
    },
    input: {
        backgroundColor: "white",
        width: 250,
        borderRadius: 100
    },

    inputContainer: {
        padding: 15,
        alignItems: "flex-start",
        backgroundColor: "transparent"
    },

    headerImage: {
        resizeMode: "contain",
        width: null,
        height: null,
        flex: 2,
        top: -4
    },

    mainContainer: {
        top: 40,
        flex: 4,
        backgroundColor: "transparent",
        alignItems: "center"
    },

    labelWhite: {
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        opacity: 0.85,
        position: "absolute"
    },

    backgroundImage: {
        flex: 1
    },
})