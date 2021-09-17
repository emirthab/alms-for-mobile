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

export default function Home() {
    return (
        <ScrollView>
            <Layout style={styles.mainContanier}>
                <Text style={styles.heading1}>Duyurular</Text>
                <Announcement />
            </Layout>
        </ScrollView>
    )
}

const Announcement = () => {

    const Header = (props) => {
        return (
            <Layout {...props}>
                <Layout style={styles.headerContainer}>
                    <Text style={
                        {
                            flex: 1,
                            fontWeight: "500",
                            color: "grey"
                            // fontWeight: "700",
                            // color:"black"
                        }}>

                        Your Total Grades!
                    </Text>
                    <Icon name={"bullhorn"} size={20} color={"#fab614"} />
                </Layout>
            </Layout >
        )
    }

    return (
        <Layout style={styles.shadowLayout}>
            <Card style={{
                borderLeftColor: "#16a9a8",
                // 2ee2e1
                borderTopLeftRadius: 6,
                borderBottomLeftRadius: 6,
                borderLeftWidth: 6,
            }}

                header={Header}>
                <Layout style={styles.headerContainer}>
                    <Icon name={"user"} size={20} color={"grey"} />
                    <Text style={styles.mainText}>
                        {"Fatih Mehmet Coşkun" + " - "}

                        <Text style={styles.dateText}>
                            21.06.2021
                        </Text>

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
        fontSize: 21,
    },
    mainText: {
        marginTop: 2,
        marginLeft: 10,
        fontWeight: "400",
        color: "grey"
    },

    dateText: {
        fontSize: 14,
        fontWeight: "100",
        color: "black"
    },

    headerContainer: {
        backgroundColor: "transparent",
        flexDirection: "row",
    },
    card: {
        borderRadius: 4,
        borderColor: "white",
    }
})