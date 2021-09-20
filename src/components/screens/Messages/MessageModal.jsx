import React from 'react'
import { WebView } from "react-native-webview"
import { StyleSheet } from 'react-native'
import Icon from "react-native-vector-icons/dist/FontAwesome"
import {
    Layout,
    Text,
    TopNavigation
} from '@ui-kitten/components'
import ModalHeader from "../../ModalHeader"

export default function AnnouncementModal({ navigation }) {
    return (
        <Layout style={styles.upperContainer}>
            <ModalHeader 
            onPress={() => navigation.navigate("mainModal")} 
            title="Mazeret Sınavı hk."/>
            
            <Layout style={styles.mainContainer}>
                <Layout style={styles.announcementHeader}>
                    <Icon style={styles.icon} name={"user"} size={26} color={"#fab614"}>
                        <Text style={styles.heading1} >{"    " + "Fatih Mehmet Coşkun"}</Text>
                    </Icon>
                    <Icon style={styles.icon} name={"calendar-o"} size={21} color={"#fab614"}>
                        <Text style={styles.heading1} >{"    " + "21.06.2021"}</Text>
                    </Icon>
                </Layout>
                <WebView source={{ html: demoHtml }} />
            </Layout>
        </Layout>
    )
}

const styles = StyleSheet.create({
    announcementHeader: {
        borderColor:"#16a9a8",
        borderRadius: 6,
        borderRadius: 6,
        borderLeftWidth: 6,

        borderTopWidth:1,
        borderBottomWidth:1,

        paddingBottom:15,
        paddingTop:5,
        paddingLeft:8,
        marginBottom:10,
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

const demoHtml = '<html><head><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>\
<div class="inbox-view">\
Hocam tekrardan merhaba rahatsız ediyorum kusura bakmayın, daha önceden form göndermiştim duyuruda öğretmenlerle iletişime geçmemiz yazıyor aynı şekilde fakülteden Nuray hanım da öğretmenimle iletişime geçmemi söylemişti. İnternet ile ilgili sürekli sorunlar yaşadım, hizmet aldığım firmayı değiştirdim ve sınavlarıma giremedim çevremde başka internet erişimim olmadığı için. Diğer dersler için hocalarımla görüştüm sizin sınavınıza girebilmem için ne yapmam gerekiyor. Tekrardan saygılarımla...\
<blockquote>FATİH MEHMET ÇOŞKUN - 25.04.2021:<br>\
mazeret sınavı için mail atıldığını söyledi fakülte yönetimi. bunun için form doldurman gerekiyor..\
<blockquote>EMİR TAHA BAHÇECİ - 24.04.2021:<br>\
Hocam merhaba mazeret sınavına katılabilmek için ne yapmam gerek. İnternetim kesildi ve rapor almak için firmayla iletişimdeyim günlerdir ve&nbsp;ısrarla göndereceğiz deyip göndermiyorlar.&nbsp;Aynı şekilde 2&nbsp;sınavımda&nbsp;da madur oldum bu sebepten ötürü. Ben yine de belgeleri almak için leimden geleni yapacağım.<br>\
Saygılarımla...\
<hr>\
<p><br>\
EMİR TAHA BAHÇECİ<br>\
Program: Bilgisayar Mühendisliği (İngilizce)<br>\
Ders: Physics II<br>\
Sınıf: Physics II</p>\
</blockquote>\
</blockquote>\
</div>\
</html>'