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
    else if (firstname == '') {
        document.getElementById('Efirstname').innerHTML = '*please enter your first name*';
    }
    else if (lastname == '') {
        document.getElementById('Elastname').innerHTML = '*Please enter your last name*';
    }
    else if (mail == '') {
        document.getElementById('Email').innerHTML = '*Please enter your e-mail address*';
    }
    else if (password == '') {
        document.getElementById('Epassword').innerHTML = '*Please enter the password*';
    }
    else if (password.length < 8) {
        document.getElementById('Epassword').innerHTML = '*Please enter the password*';
    }
    else if (cpassword == '') {
        document.getElementById('Ecpassword').innerHTML = '*Please re-enter the password *';
    }
    else if (cpassword.length < 8) {
        document.getElementById('Epassword').innerHTML = '*Please enter the password*';
    }
    else {
        document.getElementById('success').innerHTML = 'Thank You!'
    }
}