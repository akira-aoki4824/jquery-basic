$(function() {
  // id属性がredの要素のcolorプロパティをredにする
  $('#red').on('click', function(){
    // id属性がtargerの要素のcolorプロパティをredにする
    $('#target').css('color', 'red');
  });

  // id属性がblueの要素をクリックされたら
  $('#blue').on('click', function(){
    // id属性がtargetの要素のcolorプロパティをblueにする
    $('#target').css('color', 'blue');
  });
});