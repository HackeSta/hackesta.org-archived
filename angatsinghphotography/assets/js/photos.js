
var loadPhotos = function(){
  console.log('called');
  $.ajax({
    url: 'http://hackesta.pythonanywhere.com/photographs/?format=json&user_id=8734325',
    type: 'GET',
    crossDomain: true,
    dataType: 'json',
    success: function(json) {
      $(json.photos).each(function(index) {
        console.log(index);
        console.log(this.images);
        $("#thumbnails").append("<article><a class=\"thumbnail\" href=\"" +this.images[1].url +"\"500url=\"https://500px.com"+this.url +"\" exif_height=\""+this.height+"\" exif_width=\""+this.width+"\" exif_camera=\""+this.camera+"\" exif_lens=\""+this.lens+"\" exif_focal_length=\""+this.focal_length+"\" exif_shutter_speed=\""+this.shutter_speed+"\" exif_iso=\""+this.iso+"\" exif_aperture=\""+this.aperture+"\"><img src=\""+this.images[0].url+"\" alt=\""+this.name+"\" /></a><h2>"+this.name+"</h2></article>");
      });
    }
  });
  $.getJSON("assets/js/photos.json", function(json){

  });
}

jQuery.fn.reverse = [].reverse;
