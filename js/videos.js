var getVideos = function getVideos(){
  $.ajax({
    url: 'http://hackesta.pythonanywhere.com/youtube/videos/?format=json&channel_id=UCF-qoE_8k_aum76Rk7EWMIg',
    type: 'GET',
    crossDomain: true,
    dataType: 'json',
    success: function(json){

      $(json.videos).each(function(index){
        $("#videos_container").append('<iframe id="ytplayer" type="text/html" class="col-lg-6 col-md-6 col-sm-12 col-xs-12" width="640" height="360" src="https://www.youtube.com/embed/'+this.video_id+'?autoplay=0&origin=http://hackesta.org" frameborder="0"></iframe>');
        $("#loading").css('display', 'none');
      });
    }
  });
};
