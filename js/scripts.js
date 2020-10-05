$(document).ready(function(){
if ($(window).width() < 768) {
	$('#accordionExample').on('shown.bs.collapse', function () {
    $('html, body').animate({
        scrollTop: $('.collapse.show').offset().top
    },
    500,
    'linear'
  )
});
}


jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="images/num-up.png" alt=""></div><div class="quantity-button quantity-down"><img src="images/num-down.png" alt=""></div></div>').insertAfter('.quantity input');
    jQuery('.quantity').each(function() {
      var spinner = jQuery(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

      btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

      btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

    });
    if ( $('.date').length){
$('.date input').datepicker({
	isRTL: false,
    format: 'dd.mm.yyyy',
    autoclose:true,
	todayHighlight: true,
	orientation: 'bottom',
    language: 'ru'
});
}
$('.sidebar .navbar-toggler').click(function(){
  $('.sidebar-inner').slideToggle();
});

if($('.photo-zoom').length){
  $('.photo-zoom').magnificPopup({type:'image'});
}

$('#extra1').change(function(){
    if($(this).is(":checked")) {
        $('#par-modal').attr('data-target', '#filterModal1');
        
    }else {
      $('#par-modal').attr('data-target', '#filterModal');
    }
});
$('#det1').change(function(){
    if($(this).is(":checked")) {
        $('#par-modal').attr('data-target', '#filterModal');
        
    }
});
$('#tx-df').click(function(){
  $('#tx-df_open').slideToggle();
});
$('#tx-88').click(function(){
  $('#tx-88_open').slideToggle();
});
$('.btn-ads-del').click(function(){
  $('#tx-88_open').hide();
  $('#tx-df_open').hide();
});
});