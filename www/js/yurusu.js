//DOM構築後に速攻で活動開始する関数
window.onload = function () {
  document.getElementById( "sampleButtonA" ).onclick = function(){
      countUp1();
  };
   document.getElementById( "sampleButtonB" ).onclick = function(){
      countUp2();
  };
   document.getElementById( "sampleButtonC" ).onclick = function(){
      countUp3();
  };
   document.getElementById( "sampleButtonD" ).onclick = function(){
      countUp4();
  };
  }
  //配列とかもう無理だから頑張って分身させた
  var count1 = 0;
  function countUp1() {
  document.getElementById( "sampleOutputA" ).innerHTML = ++count1;
 // 対象となるID名
  var id = 'yurusu' ;
  // 初回以外だったら音声ファイルを巻き戻す
  if( typeof( document.getElementById( id ).currentTime ) != 'undefined' )
  {
       document.getElementById( id ).currentTime = 0;
   }
   // [ID:sound-file]の音声ファイルを再生[play()]する
   document.getElementById( id ).play() ;
  }

  var count2 = 0;
  function countUp2() {
  document.getElementById( "sampleOutputB" ).innerHTML = ++count2;
 // 対象となるID名
  var id = 'yurusu' ;
  // 初回以外だったら音声ファイルを巻き戻す
  if( typeof( document.getElementById( id ).currentTime ) != 'undefined' )
  {
       document.getElementById( id ).currentTime = 0;
   }
   // [ID:sound-file]の音声ファイルを再生[play()]する
   document.getElementById( id ).play() ;
  }

  var count3 = 0;
  function countUp3() {
  document.getElementById( "sampleOutputC" ).innerHTML = ++count3;
 // 対象となるID名
  var id = 'yurusu' ;
  // 初回以外だったら音声ファイルを巻き戻す
  if( typeof( document.getElementById( id ).currentTime ) != 'undefined' )
  {
       document.getElementById( id ).currentTime = 0;
   }
   // [ID:sound-file]の音声ファイルを再生[play()]する
   document.getElementById( id ).play() ;
  }

  var count4 = 0;
 function countUp4() {
 document.getElementById( "sampleOutputD" ).innerHTML = ++count4;
// 対象となるID名
 var id = 'yurusu' ;
 // 初回以外だったら音声ファイルを巻き戻す
 if( typeof( document.getElementById( id ).currentTime ) != 'undefined' )
 {
      document.getElementById( id ).currentTime = 0;
  }
  // [ID:sound-file]の音声ファイルを再生[play()]する
  document.getElementById( id ).play() ;
 }

 
