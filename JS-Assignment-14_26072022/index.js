//debugger
var img = ['0.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg']

document.getElementById('photos').innerHTML = '<img id="jpg0" data-image="0"  src="' + img[0] + '" class="picsize"/>'

 var dots = '';
for (var i = 0 ; i < img.length; i++) {
    dots += '<span onclick=" showslide('+i+')" class=" divslide" > '+i+' </span>'
}
document.getElementById('dots').innerHTML=dots;

function showslide(0){
    document.getElementById('photos').innerHTML = '<img id="img' +(0)+'"  data-image="' +(0)+ '" src="' + img[(0)] + '" />'
}

function ahead() {
    var activeimg = parseInt(document.querySelectorAll('#photos img ')[0].dataset.image);
    document.getElementById('photos').innerHTML = '<img id="jpg' +(activeimg + 1)+'"  data-image="' +(activeimg + 1)+ '" src="' + img[(activeimg + 1)] + '"  class="picsize"/>'

}
function back() {
    var activeimg = parseInt(document.querySelectorAll('#photos img ')[0].dataset.image);
    document.getElementById('photos').innerHTML = '<img id="jpg' +(activeimg - 1)+ '"  data-image="' +(activeimg - 1)+ '" src="' + img[(activeimg - 1)] + '" class="picsize"/>'

}

/*function forward() {
    var activeimg = (document.querySelectorAll('#photos img')[0].img-index);
    document.getElementById('photos').innerHTML = '<img id="jpg' + parseInt(activeimg + 1) + '" data-index="' + parseInt(activeimg + 1) + '" src="' + img[parseInt(activeimg+1)] + '"  class="picsize"/>'

} 

function backward() {
    var activeimg = (document.querySelectorAll('#photos img')[0].img-index);
    document.getElementById('photos').innerHTML = '<img id="jpg' + parseInt(activeimg - 1) + '" data-index="' + parseInt(activeimg - 1) + '" src="' + img[parseInt(activeimg-1)] + '"  class="picsize"/>'
} */
