//debugger
var img = ['0.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg']

document.getElementById('photos').innerHTML = '<img id="jpg0" img-index="0"  src="' + img[0] + '" class="picsize"/>'

var dots = '';
for (var i = 0 ; i < images.length; i++) {
    dots += '<span onclick=" showslide('+i+')" class=" divslide" > '+i+' </span>'
}
document.getElementById('dots').innerHTML=dots;

function showslide(guru){
    document.getElementById('result').innerHTML = '<img id="image' +(guru)+'"  data-photo="' +(guru)+ '" src="' + images[(guru)] + '" />'
}

function next() {
    var currentimg = parseInt(document.querySelectorAll('#result img ')[0].dataset.photo);
    document.getElementById('result').innerHTML = '<img id="image' +(currentimg + 1)+'"  data-photo="' +(currentimg + 1)+ '" src="' + images[(currentimg + 1)] + '" />'

}
function prev() {
    var currentimg = parseInt(document.querySelectorAll('#result img ')[0].dataset.photo);
    document.getElementById('result').innerHTML = '<img id="image' +(currentimg - 1)+ '"  data-photo="' +(currentimg - 1)+ '" src="' + images[(currentimg - 1)] + '" />'

}

function forward() {
    var activeimg = (document.querySelectorAll('#photos img')[0].img-index);
    document.getElementById('photos').innerHTML = '<img id="jpg' + parseInt(activeimg + 1) + '" data-index="' + parseInt(activeimg + 1) + '" src="' + img[parseInt(activeimg+1)] + '"  class="picsize"/>'

} 

function backward() {
    var activeimg = (document.querySelectorAll('#photos img')[0].img-index);
    document.getElementById('photos').innerHTML = '<img id="jpg' + parseInt(activeimg - 1) + '" data-index="' + parseInt(activeimg - 1) + '" src="' + img[parseInt(activeimg-1)] + '"  class="picsize"/>'
} 
