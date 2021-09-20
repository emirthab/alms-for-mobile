import React from 'react'
import { Button, Layout } from '@ui-kitten/components'
import { Text, StyleSheet, ScrollView } from "react-native"
import Icon from "react-native-vector-icons/dist/FontAwesome"

export default function General() {
    return (
        <ScrollView>
            <Layout style={styles.mainContainer}>
                <Layout style={styles.topContainer}>
                    <Text style={styles.heading1}>Genel Bakış</Text>
                    <Button
                        accessoryLeft={<Icon name="power-off" size={17} color="white" />}
                        size="small"
                        status="danger"
                        style={styles.logOut}>
                        Çıkış
                    </Button>
                </Layout>
                <Text style={styles.name}>EMİR TAHA BAHÇECİ</Text>
                {content("user", " 190201040")}
                {content("user", " 21052284262")}
                {content("book", "Bilgisayar Mühendisliği (İngilizce)")}
                {content("lock", " Öğrenci", 24, "   ")}
                {content("envelope", "emirtaha.bahceci@st.uskudar.edu.tr")}
                {content("info-circle", " 14.04.2020 10:27:30")}
                <Layout style={styles.seperator} />
                {altContent("Toplam Giriş", "414")}
                {altContent("Toplam Ders", "1")}
                {altContent("Toplam Aktivite", "555")}
                {altContent("Son Ay Sisteme Toplam Giriş", "128")}
            </Layout>
        </ScrollView>
    )
}
function content(iconName, text, iconSize) {
    return (
        <Text style={styles.contentText}>
            <Icon name={iconName} size={iconSize ? iconSize : 20} color="#16a9a8" />{"   " + text}
        </Text>
    )
}
function altContent(variable, value) {
    return (
        <Layout style={styles.altContent}>
            <Text style={styles.altContentVariable}> {variable} </Text>
            <Text style={styles.altContentValue}> {value} </Text>
        </Layout>
    )
}
const styles = StyleSheet.create({
    logOut:{
        marginTop:-1
    },

    topContainer: {
        backgroundColor: "transparent",
        flex: 1,
        flexDirection: "row"
    },

    altContentVariable: {
        flex: 1,
        fontSize: 16,
        fontWeight: "300"
    },
    altContentValue: {
        color: "#1c978b",
        fontSize: 19,
        fontWeight: "400"
    },

    altContent: {
        paddingBottom: 15,
        backgroundColor: "transparent",
        flex: 1,
        flexDirection: "row"
    },

    seperator: {
        marginTop: 20,
        marginBottom: 20,
        borderColor: "#c0c0c0",
        borderRadius: 10,
        borderWidth: 1
    },

    contentText: {
        fontSize: 16,
        paddingTop: 15,
        fontWeight: "200"
    },

    name: {
        marginTop: 20,
        fontSize: 19,
        color: "grey",
        fontWeight: "500"
    },

    mainContainer: {
        margin: 25,
        backgroundColor: "transparent",
        flex: 1,
    },

    heading1: {
        color: "#1c978b",
        fontWeight: "400",
        fontSize: 21,
        flex: 1
    },

})