function register() {
    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var mail = document.getElementById('mail').value;
    var phone = document.getElementById('phone').value;
    var city = document.getElementById('city').value;
    var state = document.getElementById('state').value;
    var address = document.getElementById('address').value;
    var country = document.getElementById('country').value;
    var zipcode = document.getElementById('zipcode').value;

    document.getElementById('Efirstname').innerHTML = '';
    document.getElementById('Elastname').innerHTML = '';
    document.getElementById('Email').innerHTML = '';
    document.getElementById('Ephone').innerHTML = '';
    document.getElementById('Ecity').innerHTML = '';
    document.getElementById('Eaddress').innerHTML = '';
    document.getElementById('Estate').innerHTML = '';
    document.getElementById('Ecountry').innerHTML = '';
    document.getElementById('Ezipcode').innerHTML = '';
    document.getElementById('success').innerHTML = ''

    if (firstname == '' && lastname == '' && mail == '' && phone == '' && address == '' && state == '' && city == '' && country == '' && zipcode == '') {
        document.getElementById('Efirstname').innerHTML = 'Please Enter firstname';
        document.getElementById('Elastname').innerHTML = 'Please Enter lastname';
        document.getElementById('Email').innerHTML = 'Please Enter mail';
        document.getElementById('Ephone').innerHTML = 'Please Enter phone';
        document.getElementById('Ecity').innerHTML = 'Please Enter city';
        document.getElementById('Eaddress').innerHTML = 'Please Enter address';
        document.getElementById('Estate').innerHTML = 'Please Enter state';
        document.getElementById('Ecountry').innerHTML = 'Please Enter country';
        document.getElementById('Ezipcode').innerHTML = 'Please Enter zipcode';
        document.getElementById('firstname').style.borderColor = 'red'
        document.getElementById('lastname').style.borderColor = 'red'
        document.getElementById('mail').style.borderColor = 'red'
        document.getElementById('phone').style.borderColor = 'red'
        document.getElementById('address').style.borderColor = 'red'
        document.getElementById('city').style.borderColor = 'red'
        document.getElementById('zipcode').style.borderColor = 'red'
        document.getElementById('state').style.borderColor = 'red'
        document.getElementById('country').style.borderColor = 'red'
    }
    if (firstname == '') {
        document.getElementById('Efirstname').innerHTML = '*Required firstname*';
        document.getElementById('firstname').style.borderColor = 'red'
    }
    if (lastname == '') {
        document.getElementById('Elastname').innerHTML = '*Required lastname*';
        document.getElementById('lastname').style.borderColor = 'red'
    }
    if (mail == '') {
        document.getElementById('Email').innerHTML = '*Required mail*';
        document.getElementById('mail').style.borderColor = 'red'
    }
    if (phone == '') {
        document.getElementById('Ephone').innerHTML = '*Required phone*';
        document.getElementById('phone').style.borderColor = 'red'
    }
    if (address == '') {
        document.getElementById('Eaddress').innerHTML = '*Required address*';
        document.getElementById('address').style.borderColor = 'red'
    }
    if (city == '') {
        document.getElementById('Ecity').innerHTML = '*Required city*';
        document.getElementById('city').style.borderColor = 'red'
    }
    if (state == '') {
        document.getElementById('Estate').innerHTML = '*Required state*';
        document.getElementById('state').style.borderColor = 'red'
    }
    if (country == '') {
        document.getElementById('Ecountry').innerHTML = '*Required country*';
        document.getElementById('country').style.borderColor = 'red'
    }
    if (zipcode == '') {
        document.getElementById('Ezipcode').innerHTML = '*Required zipcode*';
        document.getElementById('zipcode').style.borderColor = 'red'
    }
    else {
        document.getElementById('success').innerHTML = 'Registered Successfully..'
    }
}

const getFirstname = (fname) => {
    var username = document.getElementById('firstname').value;
    document.getElementById('firstname').value = fname

    if (username.length == 1) {
        document.getElementById('Efirstname').innerHTML = 'Please Enter firstname';
        document.getElementById('firstname').style.borderColor = "red";
    }
    else {
        document.getElementById('Efirstname').innerHTML = '';
        document.getElementById('firstname').style.borderColor = "green";
    }
}

const getLastname = (lname) => {
    var username = document.getElementById('lastname').value;
    document.getElementById('lastname').value = lname

    if (username.length == 1) {
        document.getElementById('Elastname').innerHTML = 'Please Enter lastname';
        document.getElementById('lastname').style.borderColor = "red";
    }
    else {
        document.getElementById('Elastname').innerHTML = '';
        document.getElementById('lastname').style.borderColor = "green";
    }
}

const getEmail = (email) => {
    let regx = /^[a-zA-Z0-9\._]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var mailaddress = document.getElementById('mail').value;
    document.getElementById('mail').value = email

    if (mailaddress.match(regx)) {
        document.getElementById('Email').innerHTML = '';
        document.getElementById('mail').style.borderColor = "green";

    }
    else {
        document.getElementById('Email').innerHTML = '*Please Enter Valid Email Address*';
        document.getElementById('mail').style.borderColor = "red";
    }
}

const getPhone = (mobile) => {
    var username = document.getElementById('phone').value;
    document.getElementById('phone').value = mobile

    if (username.length == 1) {
        document.getElementById('Ephone').innerHTML = 'Please Enter phone';
        document.getElementById('phone').style.borderColor = "red";
    }
    else {
        document.getElementById('Ephone').innerHTML = '';
        document.getElementById('phone').style.borderColor = "green";
    }
}

const getAddress = (add) => {
    var username = document.getElementById('address').value;
    document.getElementById('address').value = add

    if (username.length == 1) {
        document.getElementById('Eaddress').innerHTML = 'Please Enter address';
        document.getElementById('address').style.borderColor = "red";
    }
    else {
        document.getElementById('Eaddress').innerHTML = '';
        document.getElementById('address').style.borderColor = "green";
    }
}

const getCity = (town) => {
    var username = document.getElementById('city').value;
    document.getElementById('city').value = town

    if (username.length == 1) {
        document.getElementById('Ecity').innerHTML = 'Please Enter city';
        document.getElementById('city').style.borderColor = "red";
    }
    else {
        document.getElementById('Ecity').innerHTML = '';
        document.getElementById('city').style.borderColor = "green";
    }
}

const getZipcode = (pin) => {
    var username = document.getElementById('zipcode').value;
    document.getElementById('zipcode').value = pin

    if (username.length == 1) {
        document.getElementById('Ezipcode').innerHTML = 'Please Enter zipcode';
        document.getElementById('zipcode').style.borderColor = "red";
    }
    else {
        document.getElementById('Ezipcode').innerHTML = '';
        document.getElementById('zipcode').style.borderColor = "green";
    }
}

const getState = (states) => {
    var username = document.getElementById('state').value;
    document.getElementById('state').value = states

    if (username.length == 1) {
        document.getElementById('Estate').innerHTML = 'Please Enter state';
        document.getElementById('state').style.borderColor = "red";
    }
    else {
        document.getElementById('Estate').innerHTML = '';
        document.getElementById('state').style.borderColor = "green";
    }
}

const getCountry = (country) => {
    var username = document.getElementById('country').value;
    document.getElementById('country').value = country

    if (username.length == 1) {
        document.getElementById('Ecountry').innerHTML = 'Please Enter country';
        document.getElementById('country').style.borderColor = "red";
    }
    else {
        document.getElementById('Ecountry').innerHTML = '';
        document.getElementById('country').style.borderColor = "green";
    }
} 