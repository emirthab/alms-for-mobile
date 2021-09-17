import React from 'react'
import { StyleSheet, ScrollView } from "react-native"
import {
    ApplicationProvider,
    Input,
    Button,
    Layout,
    Text,
    Card,
} from '@ui-kitten/components';
import Icon from "react-native-vector-icons/dist/FontAwesome"

export default function Activities() {
    return (
        <ScrollView>
            <Layout style={styles.mainContanier}>
                <Text style={styles.heading1}>Yakında Başlayacak Aktivileterim</Text>
                <Activity />
                <Activity />
                <Activity />
                <Activity />
            </Layout>
        </ScrollView>

    )
}

const Activity = () => {

    const Header = (props) => {
        return (
            <Layout {...props}>
                <Layout style={styles.headerContainer}>
                    <Text style={styles.headerText}>
                        Calculus / Burhan Bektaş
                    </Text>
                    <Icon name={"video-camera"} size={20} color={"#fab614"} />
                </Layout>
            </Layout>
        )
    }

    return (
        <Layout style={styles.shadowLayout}>
            <Card style={styles.card} header={Header}>
                <Layout style={styles.headerContainer}>
                    <Icon name={"play"} size={20} color={"grey"} />
                    <Text style={styles.mainText}>
                        Canlı 21 Mart 13:54
                    </Text>
                </Layout>
            </Card>
        </Layout>
    )
}

const styles = StyleSheet.create({
    shadowLayout: {
        shadowOffset: { width: 3, height: 3 },
        shadowColor: "grey",
        shadowOpacity: 0.30,
        marginTop: 20,
    },

    mainContanier: {
        margin: 25,
        backgroundColor: "transparent",
        flex: 1,
    },

    heading1: {
        color: "#1c978b",
        fontWeight: "400",
        fontSize:21,
    },
    mainText: {
        marginTop: 2,
        marginLeft: 10,
        fontWeight: "400",
        color:"grey"
    },

    headerContainer: {
        backgroundColor: "transparent",
        flexDirection: "row",
    },
    headerText: {
        flex: 1,        
        fontWeight: "400",
    },

    card: {        
        borderRadius: 4,
        borderColor: "white",
        borderTopLeftRadius: 6,
        borderBottomLeftRadius: 6,
        borderLeftWidth: 6,
        borderLeftColor: "#16a9a8",

    }
})