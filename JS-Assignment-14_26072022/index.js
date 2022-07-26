var img = ['0.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg']

document.getElementById('photos').innerHTML = '<img id="jpg0" data-index="0" src="' + img[0] + '" class="picsize"/>'

function forward() {
    var activeimg = parseInt(document.querySelectorAll('#photos img')[0].dataset.index);
    document.getElementById('photos').innerHTML = '<img id="jpg' + (activeimg + 1) + '" data-index="' + (activeimg + 1) + '" src="' + img[activeimg] + '"  class="picsize"/>'
} 

function backward() {
    var activeimg = parseInt(document.querySelectorAll('#photos img')[0].dataset.index);
    document.getElementById('photos').innerHTML = '<img id="jpg' + (activeimg - 1) + '" data-index="' + (activeimg - 1) + '" src="' + img[activeimg] + '"  class="picsize"/>'
} 
