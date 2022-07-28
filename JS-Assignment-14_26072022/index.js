//debugger
var img = ['0.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg']

document.getElementById('photos').innerHTML = '<img id="jpg0" data-image="0"  src="' + img[0] + '" class="picsize"/>'

 var count = '';
for (var i = 0 ; i < img.length; i++) {
    count += '<span onclick=" showslide('+i+')" class=" tabs" > '+i+' </span>'
}
document.getElementById('count').innerHTML=count;

function showslide(show){
    document.getElementById('photos').innerHTML = '<img id="img' +(show)+'"  data-image="' +(show)+ '" src="' + img[(show)] + '" class="picsize"/>'
}

/*function ahead() {
    var activeimg = parseInt(document.querySelectorAll('#photos img ')[0].dataset.image);
    document.getElementById('photos').innerHTML = '<img id="jpg' +(activeimg + 1)+'"  data-image="' +(activeimg + 1)+ '" src="' + img[(activeimg + 1)] + '"  class="picsize"/>'

}
function back() {
    var activeimg = parseInt(document.querySelectorAll('#photos img ')[0].dataset.image);
    document.getElementById('photos').innerHTML = '<img id="jpg' +(activeimg - 1)+ '"  data-image="' +(activeimg - 1)+ '" src="' + img[(activeimg - 1)] + '" class="picsize"/>'

}
 */
