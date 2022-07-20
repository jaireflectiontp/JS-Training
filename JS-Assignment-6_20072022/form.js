function start() {
    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var mail = document.getElementById('mail').value;
    var phone = document.getElementById('phone').value;
    var city = document.getElementById('city').value;
    var country = document.getElementById('country').value;
    var zipcode = document.getElementById('zipcode').value;

    document.getElementById('ErrorAll').innerHTML = '';
    document.getElementById('Efirstname').innerHTML = '';
    document.getElementById('Elastname').innerHTML = '';
    document.getElementById('Email').innerHTML = '';
    document.getElementById('Ephone').innerHTML = '';
    document.getElementById('Ecity').innerHTML = '';
    document.getElementById('Ecountry').innerHTML = '';
    document.getElementById('Ezipcode').innerHTML = '';
    document.getElementById('success').innerHTML = ''

    if (firstname == '' && lastname == '' && mail == '' && phone == '' && city == '' && country == '' && zipcode == '') {
        document.getElementById('ErrorAll').innerHTML = '*Please fill the above details to proceed*';
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
    else if (phone == '') {
        document.getElementById('Ephone').innerHTML = '*Please enter your phone number*';
    }
    else if (city == '') {
        document.getElementById('Ecity').innerHTML = '*Please enter city name*';
    }
    else if (country == '') {
        document.getElementById('Ecountry').innerHTML = '*Please enter the country*';
    }
    else if (zipcode == '') {
        document.getElementById('Ezipcode').innerHTML = '*Please enter area code*';
    }
    else {
        document.getElementById('success').innerHTML = 'Login Successful!'
    }
}