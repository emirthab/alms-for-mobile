import React from 'react'
import { WebView } from "react-native-webview"
import { StyleSheet, ScrollView } from 'react-native'
import Icon from "react-native-vector-icons/dist/FontAwesome"
import {
    Layout,
    Text,
    TopNavigation
} from '@ui-kitten/components'
import ModalHeader from "../../ModalHeader"
import Card from "../../Card"

export default function AnnouncementModal({ navigation }) {
    return (
        <Layout style={styles.upperContainer}>
            <ModalHeader
                onPress={() => navigation.navigate("mainModal")}
                title="Kütüphane ve Akademik Araştırma Eğitimleri" />
            <ScrollView>
                <Layout style={styles.mainContainer}>
                    <Card
                        headerIconName={"check"}
                        headerIconColor={"green"}
                        borderColor="green"
                        title="Calculus week 2"
                        mainContent={[{
                            iconName: "hourglass-start",
                            subText: "06.02.2021",
                            text: "23.59  -  ",
                            iconColor: "green"
                        },
                        {
                            iconName: "clock-o",
                            subText: "06.02.2021",
                            text: "21.00  -  ",
                            iconColor: "green"
                        },
                        {
                            iconName: "video-camera",
                            text: "Sanal Sınıf",
                            iconColor:"green"
                        }]}
                        onPress={() => {
                            navigation.navigate("activityModal")
                        }} />

                    <Card
                        headerIconName={"clock-o"}
                        borderColor="orange"
                        title="Calculus week 1 Homework"
                        mainContent={[{
                            iconName: "clock-o",
                            subText: "06.02.2021",
                            text: "21.00  -  ",
                            iconColor: "orange"
                        },
                        {
                            iconName: "pencil",
                            text: "Ödev",                            
                        }
                        ]}
                        onPress={() => {
                            navigation.navigate("activityModal")
                        }} />
                    <Card
                        headerIconColor={"green"}
                        headerIconName={"clock-o"}
                        borderColor="green"
                        title="Kütüphane Kaynaklarına Erişim Oryantasyonu"
                        mainContent={[{
                            iconName: "play",
                            text: "Video",
                            iconColor:"green"
                        }]}
                        onPress={() => {
                            navigation.navigate("activityModal")
                        }} />
                    <Card
                        headerIconName={"clock-o"}
                        borderColor="orange"
                        title="Elektronik Kaynaklara Erişim Rehber Videosu"
                        mainContent={[{
                            iconName: "play",
                            text: "Video"
                        }]}
                        onPress={() => {
                            navigation.navigate("lessonModal")
                        }} />
                </Layout>
            </ScrollView>
        </Layout >
    )
}

const styles = StyleSheet.create({
    upperContainer: {
        flex: 1,
        backgroundColor: "transparent",
    },

    mainContainer: {
        margin: 25,
        backgroundColor: "transparent",
        flex: 1,
    },
})
