$(document).ready(function () {
    $('button').click(function () {
        $.ajax({
            url: './article.txt',
            success: function (result) {
                $('.open').html(result)
            }

        })
    })
})