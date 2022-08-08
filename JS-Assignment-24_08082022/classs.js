let classData = [
    {
        "rollno": 1,
        "name": "Amit",
        "FullName": "Amit Singh",
        "email": "Sincere@april.biz",
    }
];
let studentData = '';
classData.map((observe) => {
    studentData += '<tr><td>' + observe.rollno + '</td><td>' + observe.name + '</td></tr>';
    console.log(studentData)
})

class department {
    constructor(notation) {
        this.notation = notation;
    }

    studentId() {
        return document.getElementById('student').value;
    }
    change () {
        var output='';
        var typed=document.getElementById('student').value;
        let info = '';
        classData.map((observe) => {
            if (observe.id == typed) {
                info += '<tr><td>' + observe.rollno + '</td><td>' + observe.FullName + '</td><td>' + observe.email + '</td></tr>'
               return info=output; 
            }
        })
    }
    standup() {
        let output=info.change();
        if (this.notation == 'Amit') {
            console.log(output)
        }
        else {
            console.log('nope!')
        }
    }
}
function getout() {
    let getname = new department()
    var name = getname.studentId();
    let check = new department(name);
    check.standup()
}

