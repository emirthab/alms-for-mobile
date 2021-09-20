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
            title="Makeup Exam Announcement"/>
            
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

const demoHtml = '\
<html><head><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>\
<div class="inbox-view">\
    Dear students,<br>\
<br>\
According to the University Exam regulations, If you have the letter grades <span style="color:#e74c3c;"><strong>FF-FD-DD-DC</strong></span>, you may take the makeup exams without telling me any excuse or sending me a petition. The&nbsp;Eng102&nbsp;makeup exam will be activated&nbsp;on <span style="color:#e74c3c;"><strong>28th June, Monday between&nbsp;11.00-14.00&nbsp;in LMS</strong></span> and you can take the exams whenever you want within this period. If you have the letter grades <strong>CC and above</strong>, you&nbsp;don’t&nbsp;have a chance to take the makeup exams. You can also see the makeup exam dates via the links below.<br>\
<br>\
In English:&nbsp;https://uskudar.edu.tr/mdbf/en/announcement/3194/2020-2021-spring-term-makeup-exams-of-rectorate-compulsory-courses-english-ii-eng102-spanish-ii-russian-ii-arabic-ii<br>\
<br>\
In Turkish:&nbsp;https://uskudar.edu.tr/mdbf/tr/duyuru/3193/rektorluk-ortak-zorunlu-derslerin-butunleme-sinavlari-duyurusu-online-2020-2021-bahar-donemi<br>\
<br>\
Best,\
</div>\
<div class="inbox-attached">\
        <div class="margin-bottom-15">\
            <span>1 ek </span>\
        </div>\
                <div class="margin-bottom-25">\
                    <a class="iframe" href="/Home/AttachmentDetail?srcid=37F82EB4E3B4A1247F0884E30BDD836E">\
                        <img src="https://s3.cloud.ngn.com.tr/clu10-alms1/announcement/1739/bil__muh_2021_bahar.xlsx?AWSAccessKeyId=ALMS%3aalms-storage%40advancity.com.tr&amp;Expires=1631966892&amp;Signature=PWDJpSSQ0Rh4LEGLHYXLFAfPnLY%3d" onerror="$(this).hide();" style="display: none;">\
                    </a>\
                    <div>\
                        <strong>bil__muh_2021_bahar.xlsx</strong>\
                        <span>18 kB</span>\
                        <a href="https://s3.cloud.ngn.com.tr/clu10-alms1/announcement/1739/bil__muh_2021_bahar.xlsx?AWSAccessKeyId=ALMS%3aalms-storage%40advancity.com.tr&amp;Expires=1631966892&amp;Signature=PWDJpSSQ0Rh4LEGLHYXLFAfPnLY%3d">İndir</a>\
                    </div>\
                </div>\
    </div>\
</html>\
'