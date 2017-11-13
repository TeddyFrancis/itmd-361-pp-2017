//  function ringDoorbell() {
//   var doorbell = new Audio('media/doorbell.mp3');
//   doorbell.play();
//  }

//  Release the dollar-sign from jquery
$.noConflict();

//  Re-introduce dollar-sign scoped to self-ex function
(function($) {
  var doorbell = new Audio('media/doorbell.mp3');

  $('html').removeClass('nojs').addClass('js');
  $("audio").remove();

})(jQuery);
