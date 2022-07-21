function show(id) {

    switch (id) {

        case 'why':
            if (document.getElementById(id).style.display == 'none')
                document.getElementById(id).style.display = 'block';
            else {
                document.getElementById(id).style.display = 'none';
            }
            break;

        case 'p&s':
            if (document.getElementById(id).style.display == 'none')
                document.getElementById(id).style.display = 'block';
            else {
                document.getElementById(id).style.display = 'none';
            }
            break;

        case 'learn':
            if (document.getElementById(id).style.display == 'none')
                document.getElementById(id).style.display = 'block';
            else {
                document.getElementById(id).style.display = 'none';
            }
            break;
    }
}
