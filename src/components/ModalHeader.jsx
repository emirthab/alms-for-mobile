import React from 'react'
import { WebView } from "react-native-webview"
import { StyleSheet } from 'react-native'
import Icon from "react-native-vector-icons/dist/FontAwesome"
import {
    Layout,
    Text,
    TopNavigation
} from '@ui-kitten/components'
import { TouchableWithoutFeedback } from '@ui-kitten/components/devsupport'

export default function ModalHeader(props) {
    return (
        <TopNavigation
            style={styles.topNav}
            accessoryLeft={
                <TouchableWithoutFeedback onPress={() => props.onPress()}>
                    <Icon name={"chevron-left"} size={20} color={"white"} />
                </TouchableWithoutFeedback>}
            alignment="center"
            title={evaProps => <Text style={styles.headerTitle}>
                {((props.title).length > 32) ?
                    (((props.title).substring(0, 32 - 3)) + '...') :
                    props.title}
            </Text>}
        />
    )
}

const styles = StyleSheet.create({
    announcementHeader: {
        borderColor: "#16a9a8",
        borderRadius: 6,
        borderRadius: 6,
        borderLeftWidth: 6,

        borderTopWidth: 1,
        borderBottomWidth: 1,

        paddingBottom: 15,
        paddingTop: 5,
        paddingLeft: 8,
        marginBottom: 10,
    },

    upperContainer: {
        flex: 1
    },

    topNav: {
        backgroundColor: "#16a9a8",
    },

    headerTitle: {
        color: "white",
        fontWeight: "600",
        fontSize: 16

    },

    mainContainer: {
        margin: 25,
        flex: 1
    },
    icon: {
        padding: 7
    },
    heading1: {
        fontSize: 17,
        fontWeight: "300",
    }
})