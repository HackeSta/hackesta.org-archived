window.onload = function(){
  window.setTimeout(animOnLoad, 1000);

}
function animOnLoad(){
   $('#header').addClass('zoomout');
   $('#container').css('animation-delay', '1s');
   $('#container').addClass('animated lightSpeedIn');
   $('#container').css('display', 'inherit');
   $('#topbar').css('display', 'inherit');

}
$(function(){
  $("#topbar").load("topbar.html");

});
$(function(){
    var stickyHeaderTop = $('#topbar').offset().top;

    $(window).scroll(function(){
            if( $(window).scrollTop() > stickyHeaderTop ) {
                    $('#topbar').css({position: 'fixed', top: '0px'});
                    $('#sticky').css('display', 'block');
                $('#header').css('display', 'none');
            } else {
                    $('#topbar').css({position: 'static', top: '0px'});
                    $('#sticky').css('display', 'none');
                    $('#header').css('display', 'inherit');
            }
    });
});
