$(document).ready(function () {
    $('#filterthis').click(function () {
        $.ajax({
            url: './index.txt',
            success: function (emp) {
               $('.open').html(emp)
            }

        })
        let emp = $('.open').value
         
        const change = () => {

            let output = $('#filterthis').value;

            let text = '';

            emp.map((store) => {
                if (store.id == output) {
                    text += '<tr><td>' + store.id+ '</td></tr>'
                }

            })
            $('#option').html(text)
        }
        
    })

})