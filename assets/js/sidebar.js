$(function() {
  $("#sidebar").load("/sidebar.html", function(){
    $.ajax({
      url: 'http://hackesta.pythonanywhere.com/projects/list/?format=json',
      type: 'GET',
      crossDomain: true,
      dataType: 'json',
      success: function(json){
        if(parseInt(getUrlParameter('id')) > json.length){
          window.location.replace('/projects.html');
        }
        $(json).reverse().each(function(value){
          link = '/projects/?id='+this.id.toString();
          if(this.external_link !== '' & this.external_link !== undefined) link = this.external_link;
          $("#projects-sidebar").append('<li id="project-sidebar-'+this.id+'"><a href="'+link+'">'+this.name+'</a></li>');
        });
        $("#sidebar-loader").css('display','none');
      },
      error: function(){
        $("#sidebar-loader").html("Refresh the page!")
      }
    });  
  });
  
});

var toggle = function(state) {
  $navicon = $("#sidebar-icon");
  $wrapper = $("#wrapper");
  if(state === undefined){
    if($($wrapper).hasClass("toggled")){
      state = 0;
    }
    else{
      state = 1;
    }
  }
  console.log(state);
    if (state === 1) {
      $navicon.removeClass("fa-bars");
      $navicon.addClass("fa-times");
      $wrapper.addClass("toggled");
      } 
    else {
      $navicon.removeClass("fa-times");
      $navicon.addClass('fa-bars');
      $wrapper.removeClass("toggled");
    }
};
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};
jQuery.fn.reverse = [].reverse;
