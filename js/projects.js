jQuery(document).ready(function($) {
  var url = $.url();
  var lang = 'all'

    if(url.param('lang') !== undefined && url.param('lang') !== '')
    {
      lang = url.param('lang')
    }
    $("#project-title").append(" - " + lang.toString());
  $.getJSON("assets/projects.json", function(json){
     $(json.projects).reverse().each(function(index) {
       if(lang == 'all') {
         $("#project-cards").append('<div id="'+this.id+'" class="card col"><a href="'+this.link+'"><img class="img-thumbnail" alt="Thumbnail" src="'+this.img+'"><h2 class="title card-ele" href="'+this.link+'">'+this.title+'</h2></a><h2 class="lang card-ele">'+this.client+'</h2><p class="description">'+this.description+'</p></div>');
       }
       else{
         if(this.language == lang) $("#project-cards").append('<div id="'+this.id+'" class="card col"><a href="'+this.link+'"><img class="img-thumbnail" alt="Thumbnail" src="'+this.img+'"><h2 class="title card-ele" href="'+this.link+'">'+this.title+'</h2></a><h2 class="lang card-ele">'+this.client+'</h2><p class="description">'+this.description+'</p></div>');
       }
     });
  });
});

jQuery.fn.reverse = [].reverse;
