$(document).ready(function(){
  $('input').keyup(function(){
    var store = $(this).val();
    $('#store').html(store);
    localStorage.setItem('store', store);
    $('store').html=localStorage.getItem('store')
    $('store').addClass(active);
    if($('store').hasClass('active')){
    $('store').removeClass('active')
    }
    else{
        ('store').addClass('active')
    }
  })
    $('input').click(function(){
        $(this).animate({'width':'250px'},600,)
    })
    $('input').blur(function(){
        $(this).animate({'width':'162.4px'},0)
    })
   
})