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

import Card from '../../Card';

export default function Activities() {
    return (
        <ScrollView>
            <Layout style={styles.mainContanier}>
                <Text style={styles.heading1}>Yakında Başlayacak Aktivileterim</Text>
                <Card
                    headerIconName="video-camera"
                    borderColor="#fab614"
                    title="Calculus / Burhan Bektaş"
                    mainContent={[{
                        iconColor: "grey",
                        iconName: "play",
                        text: "Canlı - ",
                        subText: "12.03.2021"
                    }]}
                />
                <Card
                    headerIconName="video-camera"
                    mainContent={[{
                        iconColor: "grey",
                        iconName: "play",
                        text: "Canlı - ",
                        subText: "12.03.2021"
                    }]}
                    title="Calculus / Burhan Bektaş"
                />
            </Layout>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
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
})