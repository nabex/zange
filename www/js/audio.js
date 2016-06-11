/* 録音成功時の処理 */
function captureSuccess(mediaFiles) {
    var i, len;
    for (i = 0, len = mediaFiles.length; i < len; i += 1) {
        uploadFile(mediaFiles[i]);
    }
}

/* 録音失敗時の処理 */
function captureError(error) {
    var msg = 'An error occurred during capture: ' + error.code;
    navigator.notification.alert(msg, null, 'Uh oh!');
}

/* Cordovaで音声を録音する */
function onCaptureAudio() {
    navigator.device.capture.captureAudio(captureSuccess, captureError, {limit:1});
}

/* ファイルのアップロード処理 */
function uploadFile(mediaFile) {
    var ncmb = new NCMB(window.APP_KEY, window.CLIENT_KEY);
    ncmb.File.upload(mediaFile.name, mediaFile)
        .then(function(data) {
            console.log(data);
        })
        .catch(function(err) {
            console.log(err);
        });
}

/* データストアにデータを登録する */
function regData() {
    var ncmb = new NCMB(window.APP_KEY, window.CLIENT_KEY);
    var AudioData = ncmb.DataStore("AudioData");
}

/* 音声ファイルを取得する */
function getAudio() {
    var ncmb = new NCMB(window.APP_KEY, window.CLIENT_KEY);
    ncmb.File.download("audio_006.wav")
        .then(function(data) {
            console.log(data);
            return data;
        })
        .catch(function(err) {
            console.log(err);
            return null;
        });
}