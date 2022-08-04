$(document).ready(function () {


  $('input').keyup(function () {
      var store = $(this).val();
      $('#store').html(store);

      localStorage.setItem('store', store);
      $('store').html = localStorage.getItem('store')

    })
  $('input').click(function () {
    $(this).animate({ 'width': '250px' }, 600)
    $(this).css({ 'box-shadow': '0 0 7px 2px grey' })
    $('.store').css({'display':'block'})
  })
  $('input').blur(function () {
    $(this).animate({ 'width': '162.4px' }, 0)
    $(this).css({ 'box-shadow': 'none' }, { 'outline': 'none' })
    $('.store').css({'display':'none'})
  })

})