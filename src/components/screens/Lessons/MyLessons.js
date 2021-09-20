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

import Card from '../../Card';
import LessonModal from "./LessonModal";
import Progress from './Progress';

const Nav = createStackNavigator();

export default function MyLessons() {
    return (

        <Nav.Navigator screenOptions={{ headerShown: false }}>
            <Nav.Group>
                <Nav.Screen name="mainModal" component={mainModal} />
            </Nav.Group>

            <Nav.Group>
                <Nav.Screen name="lessonModal" component={LessonModal} />
            </Nav.Group>
        </Nav.Navigator>
    )
}

function mainModal({ navigation }) {
    return (
        <ScrollView>
            <Layout style={styles.mainContainer}>
                <Text style={styles.heading1}>Derslerim</Text>
                <Card
                    headerIconName={"book"}
                    contentIconName={"user"}
                    contentIconColor={"grey"}
                    borderColor="#fab614"
                    title="Basic Linear Algebra"
                    Text="Emine Elif Tülay"
                    content={<Progress percentage={40} />}
                    onPress={() => {
                        navigation.navigate("lessonModal")
                    }} />

                <Card
                    headerIconName={"book"}
                    contentIconName={"user"}
                    contentIconColor={"grey"}
                    title="Calculus"
                    Text="Burhan Bektaş"
                    content={<Progress percentage={70} />}
                    onPress={() => {
                        navigation.navigate("lessonModal")
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