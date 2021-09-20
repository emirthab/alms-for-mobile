import { NavigationContainer } from '@react-navigation/native'
import { Layout } from '@ui-kitten/components'
import React from 'react'
import { StyleSheet, Text } from 'react-native'
import WebView from 'react-native-webview'
import Icon from "react-native-vector-icons/dist/FontAwesome"
import Card from '../../../Card'
import { ScrollView } from 'react-native-gesture-handler'

var url = "https://s3.cloud.ngn.com.tr/clu10-alms1/course/122852/activity/123371/kutuphane_kaynaklarina_erisim_oryantasyonu.mp4?AWSAccessKeyId=ALMS%3aalms-storage%40advancity.com.tr&Expires=1632172654&Signature=CbDs5c2ZK9yIW3JrCibPgkJhLe8%3d"

export default function Video() {
    return (
        <ScrollView>
            <Layout style={styles.mainContainer}>
                <Text style={styles.heading1}>Video</Text>
                <Layout style={styles.webviewContainer}>
                    <WebView scrollEnabled={false} style={{ marginTop: 10 }} source={{ html: videoHtml(url) }} />
                </Layout>
                <Text style={styles.userText}><Icon name="user" size={20} color="#fab614" /> {"  Gamze Nilsu Çolak - 02.09.2021"}</Text>
                <Card
                    onPress={() => { }}
                    headerIconName="pie-chart"
                    title="İstatistikler"
                    mainContent={[{
                        iconName: "eye",
                        text: "Görüntülenme Oranı         2,00%"
                    },
                    {
                        iconName: "clock-o",
                        text: "Ortalama Süre                    215sn."
                    },
                    {
                        iconName: "user",
                        text: "Kişi Başı Görüntülenme      1,17"
                    },
                    {
                        iconName: "hourglass",
                        text: "Toplam Süre                        51998sn."
                    }
                    ]} />
            </Layout>
        </ScrollView>
    )
}

const videoHtml = (videoUrl) => {
    return (
        `<html>
    <body>
       <video width="100%" height="550px" style="display:flex;margin:0 auto;background-image:url('https://i.hizliresim.com/bj2k0qe.png');border: 4px ridge grey;" controls>
           <source src="`+ videoUrl + `" type="video/mp4">
            Your browser does not support the video 
       </video>
    </body>
</html>`
    )
}

const styles = StyleSheet.create({
    userText:{
        fontWeight:"400",
        color:"grey"
    },

    heading1: {
        color: "#1c978b",
        fontWeight: "400",
        fontSize: 21,
    },

    webviewContainer: {
        height: 220
    },

    mainContainer: {
        margin: 25,
        flex: 1
    },
})