function Login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    document.getElementById('ErrorLogin').innerHTML = '';
    document.getElementById('ErrorUsername').innerHTML = '';
    document.getElementById('ErrorPassword').innerHTML = '';
    if (username == '' && password == '') {
        document.getElementById('ErrorLogin').innerHTML = ' Username & Password are not entered';
    }
    else if (username == '') {
        document.getElementById('ErrorUsername').innerHTML = ' Please Enter Username';
    }
    else if (password == '') {
        document.getElementById('ErrorPassword').innerHTML = ' Please Enter Password';
    }
    else if ( password.length < 8){
        document.getElementById('ErrorPassword').innerHTML = ' Password should be of min 8 digits';
    }
    else{
        document.getElementById('Success').innerHTML='Login Successful!'
    }
}