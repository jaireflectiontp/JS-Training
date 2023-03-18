
function Login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    document.getElementById('ErrorUsername').innerHTML = '';
    document.getElementById('ErrorPassword').innerHTML = '';
    if (username == '' && password == '') {
        document.getElementById('ErrorUsername').innerHTML = 'Please Enter Username';
        document.getElementById('ErrorPassword').innerHTML = 'Please Enter Password';
        document.getElementById('username').style.borderColor = "red";
        document.getElementById('password').style.borderColor = "red";
    }
    else if (username == '') {
        document.getElementById('ErrorUsername').innerHTML = 'Please Enter Username';
        document.getElementById('username').style.borderColor = "red";
    }
    else if (password == '') {
        document.getElementById('ErrorPassword').innerHTML = 'Please Enter Password';
        document.getElementById('password').style.borderColor = "red";
    }
   else if (password.length < 8) {
        document.getElementById('ErrorPassword').innerHTML = 'Password should be of min 8 digits';
        document.getElementById('password').style.borderColor = "red";
    }
    else {
        document.getElementById('Success').innerHTML = 'Login Successful!'
    }
}
const getUsername = (name) => {
    var username = document.getElementById('username').value;
    document.getElementById('username').value = name

    if (username.length == 1) {
        document.getElementById('ErrorUsername').innerHTML = 'Please Enter Username';
        document.getElementById('username').style.borderColor = "red";
    }
    else {
        document.getElementById('ErrorUsername').innerHTML = '';
        document.getElementById('username').style.borderColor = "green";
    }
}

const getPass = (pass) => {
    var password = document.getElementById('password').value;
    document.getElementById('password').value = pass

    if (password.length < 8) {
        document.getElementById('ErrorPassword').innerHTML = ' Password should be of min 8 digits';
        document.getElementById('password').style.borderColor = "red";
    }
    else {
        document.getElementById('ErrorPassword').innerHTML = ' ';
        document.getElementById('password').style.borderColor = "green";
    }
}  