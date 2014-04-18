// DOMを操作する場合はページの読み込みを待つ
window.onload = function() {
document.getElementById("keyword").onchange = function() {
var keyword = document.getElementById("keyword");
var url = 'http://api.flickr.com/services/feeds/photos_public.gne?tags=' + keyword.value + '&tagmode=any&format=json&jsoncallback=drawImg';
var script = $('<script/>').attr({src: url});
$('head').append(script);
}
}

function drawImg(result) {
  $('body').append('<img src="' + result['items'][0]['media']['m'] + '" />');

}
