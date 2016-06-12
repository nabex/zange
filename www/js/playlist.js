/* 最新のデータを取得する */
function showNewDatas() {
    var ncmb = new NCMB(window.APP_KEY, window.CLIENT_KEY);
    var AudioData = ncmb.DataStore("AudioData");
    AudioData.order("createDate", true)
             .fetchAll()
             .then(function(results) {
                console.debug("データ登録処理:" + results.length + " 個取得");
                for (var i = 0; i < 4; i++) {
                    var object = results[i];
                    window.document.getElementById("title" + i).firstChild.nodeValue = object.get("title");
                    window.document.getElementById("place" + i).firstChild.nodeValue = object.get("place");
                    window.document.getElementById("date" + i).firstChild.nodeValue = object.get("createDate");
                    window.document.getElementById("audio" + i).setAttribute("src", object.get("url"));
                    window.document.getElementById("yurusu" + i).firstChild.nodeValue = object.get("yurusu");
                }
             })
             .catch(function(err) {
                console.debug("データ取得失敗:" + err);
             });
}

function yurusu(num) {
    var ncmb = new NCMB(window.APP_KEY, window.CLIENT_KEY);
    var AudioData = ncmb.DataStore("AudioData");
    
    window.document.getElementById('yurusuPlay').play() ;
    
    
    AudioData.order("createDate", true)
             .fetchAll()
             .then(function(results) {
                 results[num].setIncrement("yurusu", 1);
                 results[num].update();
             })
             .catch(function(err) {
                 
             });
}

