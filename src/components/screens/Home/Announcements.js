import React from 'react'
import { StyleSheet, ScrollView } from "react-native"
import {
    ApplicationProvider,
    Input,
    Button,
    Layout,
    Text,
} from '@ui-kitten/components';
import Icon from "react-native-vector-icons/dist/FontAwesome"
import { createStackNavigator } from "@react-navigation/stack"

import Card from '../../Card';
import AnnouncementModal from "./AnnouncementModal";

const Nav = createStackNavigator();

export default function Announcements() {
    return (
        <Nav.Navigator screenOptions={{ headerShown: false }}>
            <Nav.Group>
                <Nav.Screen name="mainModal" component={mainModal} />
            </Nav.Group>

            <Nav.Group>
                <Nav.Screen name="annoModal" component={AnnouncementModal} />
            </Nav.Group>
        </Nav.Navigator>
    )
}

function mainModal({ navigation }) {
    return (
        <ScrollView>
            <Layout style={styles.mainContainer}>
                <Text style={styles.heading1}>Duyurular</Text>
                <Card
                headerIconName="bullhorn"
                contentIconName="user"
                contentIconColor="grey"
                title="Makeup Exam Announcement"
                Text="Fatih Mehmet Coşkun - "
                subText="13.09.2021"
                onPress={() => {
                    navigation.navigate("annoModal")
                }} />
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