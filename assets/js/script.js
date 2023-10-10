(function ($) {
  'use strict';

  // Preloader
  $(window).on('load', function () {
    $('#preloader').fadeOut('slow', function () {
      $(this).remove();
    });
  });

  // e-commerce touchspin
  $("input[name='product-quantity']").TouchSpin();

})(jQuery);
