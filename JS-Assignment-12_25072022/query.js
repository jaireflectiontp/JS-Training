var numlist = document.querySelectorAll('.no li')

for(var i=0; i<numlist.length; i++){
    if(numlist[i].innerHTML=='six'){
    numlist[i].innerHTML='six--targeted'
}
else{
    numlist[i].innerHTML='nums'
}
}

var numlist = document.querySelectorAll('.divis div')

for(var i=0; i<numlist.length; i++){
    if(numlist[i].innerHTML=='six'){
    numlist[i].innerHTML='six--targeted' 
}
else{
    numlist[i].innerHTML='deleted'
}
}