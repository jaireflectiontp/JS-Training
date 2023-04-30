function create() {

    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var mail = document.getElementById('mail').value;
    var password = document.getElementById('password').value;
    var cpassword = document.getElementById('cpassword').value;


    document.getElementById('ErrorAll').innerHTML = '';
    document.getElementById('Efirstname').innerHTML = '';
    document.getElementById('Elastname').innerHTML = '';
    document.getElementById('Email').innerHTML = '';
    document.getElementById('Epassword').innerHTML = '';
    document.getElementById('Ecpassword').innerHTML = '';

    if (firstname == '' && lastname == '' && mail == '' && password == '' && cpassword == '') {
        document.getElementById('ErrorAll').innerHTML = '*Please fill the details to proceed*';
    }
    if (firstname == '') {
        document.getElementById('Efirstname').innerHTML = '*please enter your first name*';
        document.getElementById('firstname').style.border = '1px solid red';
    }
    if (firstname != '') {
        document.getElementById('Efirstname').innerHTML = '';
        document.getElementById('firstname').style.border = '1px solid green';
    }
    if (lastname == '') {
        document.getElementById('Elastname').innerHTML = '*Please enter your last name*';
        document.getElementById('lastname').style.border = '1px solid red';
    }
    if (lastname != '') {
        document.getElementById('Elastname').innerHTML = '';
        document.getElementById('lastname').style.border = '1px solid green';
    }
    if (mail == '') {
        document.getElementById('Email').innerHTML = '*Please enter your e-mail address*';
        document.getElementById('mail').style.border = '1px solid red';
    }

    if (password == '') {
        document.getElementById('Epassword').innerHTML = '*Please enter the password*';
        document.getElementById('password').style.border = '1px solid red';
    }
    else if (password.length < 8) {
        document.getElementById('Epassword').innerHTML = '*Password should contain min 8 character*';
    }
    else {
        document.getElementById('Epassword').innerHTML = '';
        document.getElementById('password').style.border = '1px solid green';
    }
    if (cpassword == '') {
        document.getElementById('Ecpassword').innerHTML = '*Please re-enter the password *';
        document.getElementById('cpassword').style.border = '1px solid red';
    }
   else if (password != cpassword) {
        document.getElementById('Ecpassword').innerHTML = '*Please enter the password correctly*';
    }
    else {
        document.getElementById('Ecpassword').innerHTML = '';
        document.getElementById('cpassword').style.border = '1px solid green';
    }
}