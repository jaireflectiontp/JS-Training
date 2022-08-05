$(document).ready(function () {
    $('button').click(function () {
        $('table').show()
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/users',
            success: function (result) {
                
                var info = '';
                for (i = 0; i < result.length; i++) {
                    info += '<tr><td>' + result[i].id + '</td><td>' + result[i].name + '</td><td>' + result[i].username + '</td><td>' + result[i].email + '</td><td>' + result[i].address.city + '</td><td>' + result[i].address.zipcode + '</td></tr>'
                }
                //print
         $('.show').html(info)
                $('td').mouseover(function(){
                    $(this).css({'background-color':'pink'})
                })
            }

        })
    })
    
})