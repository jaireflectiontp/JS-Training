document.getElementById('firstname').innerHTML=sessionStorage.getItem('firstname')
document.getElementById('lastname').innerHTML=sessionStorage.getItem('lastname')
document.getElementById('mail').innerHTML=sessionStorage.getItem('mail')

function logout(){
    location.href='login.html'
}