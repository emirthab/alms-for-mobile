import React from 'react'
import { StyleSheet, ScrollView } from "react-native"
import {
    ApplicationProvider,
    Input,
    Button,
    Layout,
    Text,
} from '@ui-kitten/components';
import { createStackNavigator } from "@react-navigation/stack"
import MessageModal from "./MessageModal"
import Card from "../../Card"

const Nav = createStackNavigator();

export default function Inbox() {
    return (
        <Nav.Navigator screenOptions={{ headerShown: false }}>
            <Nav.Group>
                <Nav.Screen name="mainModal" component={mainModal} />
            </Nav.Group>

            <Nav.Group>
                <Nav.Screen name="messageModal" component={MessageModal} />
            </Nav.Group>
        </Nav.Navigator>
    )
}

function mainModal({ navigation }) {
    return (
        <ScrollView>
            <Layout style={styles.mainContainer}>
                <Text style={styles.heading1}>Gelen Kutusu</Text>
                <Card
                    title="Mazeret Sınavı hk."
                    headerIconName="envelope"
                    borderColor="#fab614"
                    mainContent={[{
                        iconName: "user",
                        iconColor: "",
                        text: "Uğur Çini"
                    },
                    {
                        iconName: "calendar-o",
                        iconColor: "",
                        iconSize: 18,
                        text: "07.05.2021  -  ",
                        subText: "17.10"
                    }]}
                    onPress={() => {
                        navigation.navigate("messageModal")
                    }}
                />
                <Card
                    title="Physic Exp 3."
                    headerIconName="envelope"
                    headerIconColor="grey"
                    borderColor="grey"
                    mainContent={[{
                        iconName: "user",
                        iconColor: "grey",
                        text: "Fatih Mehmet Coşkun"
                    },
                    {
                        iconName: "calendar-o",
                        iconColor: "grey",
                        iconSize: 18,
                        text: "02.05.2021  -  ",
                        subText: "09.06"
                    }]}
                    onPress={() => {
                        navigation.navigate("messageModal")
                    }}
                />
            </Layout>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        margin: 25,
        backgroundColor: "transparent",
        flex: 1,
    },
    heading1: {
        color: "#1c978b",
        fontWeight: "400",
        fontSize: 21,
    },
})