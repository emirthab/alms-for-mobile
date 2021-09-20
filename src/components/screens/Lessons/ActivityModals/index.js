import React from 'react'
import Video from './Video'
import { Layout } from '@ui-kitten/components'
import { StyleSheet } from 'react-native'
import ModalHeader from '../../../ModalHeader'

export default function ActivirtModals({navigation}) {

    return (
        <Layout style={styles.upperContainer}>
        <ModalHeader
            title="Kütüphane Kaynaklarına Erişim Oryantasyonu" onPress={() => {
                navigation.navigate("lessonModal")
            }} />
        <Video></Video>
        </Layout>
    )
}

const styles = StyleSheet.create({
    upperContainer: {
        flex: 1
    },
})