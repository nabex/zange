
function mediaError(error) {
    alert("new Media Error: " + error);
}

function mediaSuccess() {
    console.log("new Media Success");
}

/* 音声ファイルの再生 */
function audioPlay(fileName) {
    var url = "https://mb.api.cloud.nifty.com/2013-09-01/applications/LTdY7YyBQ7wZwNIU/publicFiles/" + fileName;
    alert(url);
    var media = new Media(url, mediaSuccess, mediaError);
    media.play();
}

/* 音声を録音する */
function onCaptureAudio(place, title) {
    navigator.device.capture.captureAudio(
        /* 成功時の処理 */
        function(mediaFiles) {
            for (var i = 0; i < mediaFiles.length; i += 1) {
                regData(mediaFiles[i], place, title);
            }
        },
        /* 失敗時の処理 */
        function(err) {
            
        }, {limit:1});
}

/************************* Private Methods *************************/

/* ファイルのアップロード処理 */
function uploadFile(mediaFile) {
    var ncmb = new NCMB(window.APP_KEY, window.CLIENT_KEY);
    var name = mediaFile.lastModifiedDate + "_" + mediaFile.name
    
    ncmb.File.upload(name, mediaFile)
        .then(function(data) {
            alert("uploadFile(" + mediaFile.name + ") OK: " + data);
            console.log("uploadFile(" + mediaFile.name + ") OK: " + data)
        })
        .catch(function(err) {
            alert("uploadFile(" + mediaFile.name + ") NG: " + err);
            console.log("uploadFile(" + mediaFile.name + ") NG: " + err)
        });
}

/* データストアにデータを登録する */
function regData(file, place, title) {
    var ncmb = new NCMB(window.APP_KEY, window.CLIENT_KEY);
    var AudioData = ncmb.DataStore("AudioData");
    var audioData = new AudioData();
    
    audioData.set("url", file.fullPath)
             .set("yurusu", 0)
             .set("place", place)
             .set("title", title)
             .save()
             .then(function(audioData) {
                 console.debug("データ登録成功:" + audioData);
             })
             .catch(function(err) {
                 console.debug("データ登録失敗:" + err);
             });
}

/* 音声ファイルを取得する */
// function getAudio(fileName) {
//     alert("getAudio(" + fileName + ")");
//     var ncmb = new NCMB(window.APP_KEY, window.CLIENT_KEY);
//     ncmb.File.download(fileName)
//         .then(function(data) {
//             alert("getAudio(" + fileName + ") OK: ");
//             // var file = new File(data, fileName);
//             // var json_text = JSON.stringify(data);
//             // console.debug(json_text);
//             // var session_storage = window.sessionStorage;
//             console.debug(data);
//         })
//         .catch(function(err) {
//             alert("getAudio(" + fileName + ") NG: " + err);
//         });
// }

/* ファイルへのアクセスを可能にする */
// function setACL(fileName) {
//     var ncmb = new NCMB(window.APP_KEY, window.CLIENT_KEY);
//     var acl = new ncmb.Acl();
//     acl.setPublicReadAccess(true);
//     ncmb.File.updateACL(fileName, acl)
//         .then(function(data){
//             alert("setACL OK");
//          })
//         .catch(function(err){
//             alert("setACL NG :" + err);
//         });
// }

/* 録音失敗時の処理 */
// function captureError(error) {
//     var msg = 'An error occurred during capture: ' + error.code;
//     navigator.notification.alert(msg, null, 'Uh oh!');
// }

/* 録音成功時の処理 */
// function captureSuccess(mediaFiles) {
//     var i, len;
//     for (i = 0, len = mediaFiles.length; i < len; i += 1) {
//         uploadFile(mediaFiles[i]);
//         setACL(mediaFiles[i].lastModifiedDate + "_" + mediaFiles[i].name);
//         alert("capture success " + mediaFiles[i].name);
//         console.debug(reader.result);
//     }
// }