var table2 = [
    {
        'Sr.No.': '1',
        'Name': 'Kritesh',
        'Training': 'Fullstack-Development',
        'Training-Status': 'In-progress',
        'Attendence': '100%',
        'Performance': 'Good',
        'Current-Status': 'NYC'
    },
    {
        'Sr.No.': '2',
        'Name': 'Pooja',
        'Training': 'Fullstack-Development',
        'Training-Status': 'In-progress',
        'Attendence': '100%',
        'Performance': 'Good',
        'Current-Status': 'NYC'
    },
    {
        'Sr.No.': '3',
        'Name': 'Guru',
        'Training': 'Fullstack-Development',
        'Training-Status': 'In-progress',
        'Attendence': '100%',
        'Performance': 'Good',
        'Current-Status': 'NYC'
    },
    {
        'Sr.No.': '4',
        'Name': 'Diksha',
        'Training': 'Fullstack-Development',
        'Training-Status': 'In-progress',
        'Attendence': '100%',
        'Performance': 'Good',
        'Current-Status': 'NYC'
    },
    {
        'Sr.No.': '5',
        'Name': 'Mayur',
        'Training': 'Fullstack-Development',
        'Training-Status': 'In-progress',
        'Attendence': '100%',
        'Performance': 'Good',
        'Current-Status': 'NYC'
    },
    {
        'Sr.No.': '6',
        'Name': 'Nitesh',
        'Training': 'Fullstack-Development',
        'Training-Status': 'In-progress',
        'Attendence': '100%',
        'Performance': 'Good',
        'Current-Status': 'NYC'
    },
    {
        'Sr.No.': '7',
        'Name': 'Sonam',
        'Training': 'Fullstack-Development',
        'Training-Status': 'In-progress',
        'Attendence': '100%',
        'Performance': 'Good',
        'Current-Status': 'NYC'
    },
    {
        'Sr.No.': '8',
        'Name': 'Abhi',
        'Training': 'Fullstack-Development',
        'Training-Status': 'In-progress',
        'Attendence': '100%',
        'Performance': 'Good',
        'Current-Status': 'NYC'
    },
    {
        'Sr.No.': '9',
        'Name': 'Amit',
        'Training': 'Fullstack-Development',
        'Training-Status': 'In-progress',
        'Attendence': '100%',
        'Performance': 'Good',
        'Current-Status': 'NYC'
    },
]

var show = '';
for (i = 0; i < table2.length; i++) {
    show += '<tr><td>' + table2[i]["Sr.No."] + '</td><td>' + table2[i].Name + '</td><td>' + table2[i].Training + '</td><td>' + table2[i]["Training-Status"] + '</td><td>' + table2[i].Attendence + '</td><td>' + table2[i].Performance + '</td><td>' + table2[i]["Current-Status"] + '</td></tr>'
}
document.getElementById('tabledata').innerHTML = show

