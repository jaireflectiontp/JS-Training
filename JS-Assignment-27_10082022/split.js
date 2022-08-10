//Split Method
exp='one, two, three, four';
var arr=exp.split(',');
console.log(arr)
//Replace Method
//Example-1
examp="HTML is the standard markup language for Online pages HTML is the standard markup language for Online pagesHTML is the standard markup language for Online pages";
var show = examp.replaceAll('Online','Web');
console.log(show)

//For
add=['one, two, five, four'];
for(var i of add){
    if(i=='five'){
        console.log(i)
    }

}