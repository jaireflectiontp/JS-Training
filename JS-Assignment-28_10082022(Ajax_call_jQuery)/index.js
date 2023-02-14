$(document).ready(function () {
    $('.button-1').click(function () {
         $('.show').show();
        $.ajax({
            url: 'essay.txt',
            success: (function (transfer) {
                $('.show').html(transfer)
            })
        })

    })
    $('.button-2').click(function () {
        $('.show').hide();
    })
    
})