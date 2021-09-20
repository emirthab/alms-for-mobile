import React from 'react'
import { StyleSheet } from "react-native"
import {
    Layout,
    Text,    
} from '@ui-kitten/components';
import { Card as Cardd}  from "@ui-kitten/components"
import Icon from "react-native-vector-icons/dist/FontAwesome"

const StylizedIcon = (props) => {
    return (
        <Icon
            name={props.name}
            size={props.size ? props.size : 20}
            color={props.color ? props.color : "#fab614"} />
    )
}

export default function Card(props) {

    const Header = (props) => {
        return (
            <Layout {...props}>
                <Layout style={styles.headerContainer}>
                    <Text style={styles.headerText}>
                        {props.title}
                    </Text>
                    {props.headerIconName &&
                        <StylizedIcon
                            name={props.headerIconName}
                            size={props.headerIconSize}
                            color={props.headerIconColor}
                        />
                    }
                </Layout>
            </Layout>
        )
    }

    return (
        <Layout style={styles.shadowLayout}>
            <Cardd onPress={() => props.onPress()}
                style={{
                    borderRadius: 4,
                    borderColor: "white",
                    borderTopLeftRadius: 6,
                    borderBottomLeftRadius: 6,
                    borderLeftWidth: 7,
                    borderLeftColor: props.borderColor ? props.borderColor : "#16a9a8"
                }}
                header={Header(props = props)}>
                <Layout style={styles.headerContainer}>
                    {props.contentIconName &&
                        <StylizedIcon
                            name={props.contentIconName}
                            size={props.contentIconSize}
                            color={props.contentIconColor}
                        />}

                    {props.Text &&
                        <Text style={styles.mainText}>
                            {props.Text}
                            {props.subText &&
                                <Text style={styles.subText}>
                                    {props.subText}
                                </Text>}
                        </Text>}
                </Layout>
                {props.content}
            </Cardd>
        </Layout >
    )
}

const styles = StyleSheet.create(
    {
        shadowLayout: {
            shadowOffset: { width: 3, height: 3 },
            shadowColor: "grey",
            shadowOpacity: 0.30,
            marginTop: 20,
        },
        mainText: {
            marginTop: 2,
            marginLeft: 10,
            fontWeight: "400",
            color: "grey"
        },

        headerContainer: {
            backgroundColor: "transparent",
            flexDirection: "row",
        },
        headerText: {
            flex: 1,
            fontWeight: "500",
            color: "grey"
        },

        subText: {
            fontSize: 14,
            fontWeight: "100",
            color: "black"
        },
    }
)