var collect = '';
var image = ['0.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg'];

for (var i = 0; i <= image.length; i++) {
    collect += '<div class="images" id="pic' + i + '"><img src="' + image[i] + '" class="picsize"/></div>'
}
document.getElementById('photos').innerHTML = collect;
//debugger
function forward() {
   
    var activeimage = '';
    for (var i = 0; i <= image.length; i++) {
        if (document.getElementById('pic' + i).style.display == 'block') {
            activeimage = i;
        }
        document.getElementById('pic' + i).style.display = 'none'
    }
        document.getElementById('pic'+ parseInt(i + 1)).style.display = 'block'
}