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
                    borderColor="#fab614"
                    headerIconName="video-camera"
                    contentIconName="play"
                    contentIconColor="grey"
                    title="Calculus / Burhan Bektaş"
                    Text="Canlı 21.09.2021"
                />

                <Card                    
                    headerIconName="video-camera"
                    contentIconName="play"
                    contentIconColor="grey"
                    title="Calculus / Burhan Bektaş"
                    Text="Canlı 21.09.2021"
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