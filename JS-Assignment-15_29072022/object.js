var table1 = [
    {
        'Sr.No.': '1',
        Course: 'HTML',
        Status: 'Done',
        Comment: 'Revised'
    },
    {
        'Sr.No.': '2',
        Course: 'CSS',
        Status: 'Done',
        Comment: 'Revised'
    },
    {
        'Sr.No.': '3',
        Course: 'JS',
        Status: 'Ongoing',
        Comment: 'Practicing'
    },
    {
        'Sr.No.': '4',
        Course: 'SQL',
        Status: 'NYS',
        Comment: 'NYS'
    }
]

var show ='';
for (i=0; i<table1.length; i++){
    show+='<tr><td>'+table1[i]["Sr.No."]+'</td><td>'+table1[i].Course+'</td><td>'+table1[i].Status+'</td><td>'+table1[i].Comment+'</td></tr>'
}
document.getElementById('tabledata').innerHTML=show

