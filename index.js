//just a little project I'm working on :)

$(window).resize(function(){
  var scenes = $('#scenes');
  var winW = $('body').innerWidth();
  var scale = winW / scenes.width();
  scenes.css('transform', 'scale('+scale+')');
});
$(window).resize();
