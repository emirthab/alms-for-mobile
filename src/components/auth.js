import React from "react";

export function getAuthCookies(callback) {
    var url = "https://lms.uskudar.edu.tr/"
    var Form = new FormData()
    Form.append("Password", "e7f75502")

    var options = {
        method: 'POST',
        body: Form,
        redirect: 'follow',
        credentials: 'same-origin',
        Headers: {
            Cookie: "CookuserName=190201040",
        },
    }
    fetch(url, options)        
        .then(data => {
            console.log(data)
            // callback(response)
        })
}






// const request = require("request")

// export function getAuthCookies(userName,pass,callback) {
//     var url = "https://lms.uskudar.edu.tr/"
//     var FormData = {
//         Password: pass
//     }
//     var Jar = request.jar()
//     var cookieText = 'CookUserName='+userName;
//     var cookie = request.cookie(cookieText);

//     Jar.setCookie(cookie, url)


//     var auth = null
//     var sessionId = null
//     request.post({ followAllRedirects: true, url: url, formData: FormData, jar: Jar }, function (error, response, body) {
//         var cook = response.request.headers.cookie
//         cook = String(cook).split(" ")
//         cook.forEach(element => {
//             if (element.startsWith(".ASPXAUTH=")) {
//                 auth = element
//             } else if (element.startsWith("ASP.NET_SessionId=")) {
//                 sessionId = element
//             }
//         });
//         callback(
//             { "ASP.NET_SessionId": sessionId, ".ASPXAUTH": auth }
//         )
//     });
// }

// function getAuth(){
//     getAuthCookies(function(callback){
//         console.log(callback)
//     })
// }