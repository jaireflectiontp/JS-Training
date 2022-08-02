$(document).ready(function(){

    $('.bronco, .mustang, .f150').click(function () {

        $('.img1, .img2, .img-3').hide()
        
        if ($(this).hasClass('bronco')) {

            $('.img1').slideToggle();
            $(this).toggleClass('active')
        }
        else if ($(this).hasClass('mustang')) {
            $('.img2').fadeToggle();
            $(this).toggleClass('active')
        }
        else {
            $('.img3').slideToggle();
            $(this).toggleClass('active')
        }
    })
})
