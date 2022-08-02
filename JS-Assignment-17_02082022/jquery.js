$(document).ready(function () {

    $('.bronco, .mustang, .f150').click(function () {

        //$('.img1, .img2, .img-3').hide()

        if ($(this).hasClass('bronco')) {
            $('.img2').removeClass('active')
            $('.img3').removeClass('active')
            if ($('.img1').hasClass('active')) {
               $('.img1').removeClass('active')
            }
            else {
                $('.img1').fadeToggle();
            }
            
            $(this).toggleClass('active')
        }
        else if ($(this).hasClass('mustang')) {
            $('.img1').removeClass('active')
            $('.img3').removeClass('active')
            if ($('.img2').hasClass('active')) {
                $('.img2').removeClass('active')
            }
            else {
                $('.img2').fadeToggle();
            }
            
            $(this).toggleClass('active')
        }
        else {
            $('.img2').removeClass('active')
            $('.img1').removeClass('active')
            if ($('.img3').hasClass('active')) {
                $('.img3').removeClass('active')
            }
            else {
                $('.img3').fadeToggle();
            }
            
            $(this).toggleClass('active')
        }
    })
})
