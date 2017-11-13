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

  //  Removes the audio controls from the HTML code if
  //  JavaScript is present.
  $("audio").remove();

  //  Getting doorbell to play on click
  $('#doorbell').on('click', function(){
    doorbell.play();
  });
})(jQuery);
