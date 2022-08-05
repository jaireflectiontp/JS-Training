$(document).ready(function () {
    $('button').click(function () {
        $.ajax({
            url: './article.txt',
            success: function (jay) {
                $('.open').html(jay)
            }

        })
    })
})