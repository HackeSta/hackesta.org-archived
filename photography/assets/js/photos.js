jQuery(document).ready(function($) {
  $.getJSON("assets/js/photos.json", function(json){
     $(json.photos).each(function(index) {
       $("#thumbnails").append("<article><a class=\"thumbnail\" href=\"" +this.image_url +"\"><img src=\""+this.image_url+"\" alt=\""+this.name+"\" /></a><h2>"+this.name+"</h2></article>");
     });
  });
});
