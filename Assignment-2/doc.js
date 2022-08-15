$(document).ready(function(){
  
    $('.nav-drop').click(function(){
        if($('.employers, .providers, .producers, .company').hasClass('active')){
            $('.employers, .providers, .producers, .company').removeClass('active')
        }
        else{
            $('.employers, .providers, .producers, .company').addClass('active')
        }
    })
    $('.menubar').click(function(){
        if($('.Shop').hasClass('active')){
            $('.Shop').removeClass('active')
        }
        else{
            $('.Shop').addClass('active')
        }
    })
    
})