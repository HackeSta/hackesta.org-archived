  var langs = [];
jQuery(document).ready(function($) {
  var url = $.url();

  var all = true;
  var query = '';
    if(url.param('langs') !== undefined && url.param('langs') !== '')
    {
      query = url.param('langs');
      $(query.split(',')).each(function(index) {
        langs.push(this.toString());
      });
      all = false;
    }
    $("#project-title").append(" - " + query.toString());
  $.getJSON("assets/projects.json", function(json){
     $(json.projects).reverse().each(function(index) {
       if(all) {
         $("#project-cards").append('<div id="'+this.id+'" class="card col"><a href="'+this.link+'"><img class="img-thumbnail" alt="Thumbnail" src="'+this.img+'"><h2 class="title card-ele" href="'+this.link+'">'+this.title+'</h2></a><h2 class="lang card-ele">'+this.client+'</h2><p class="description">'+this.description+'</p></div>');
       }
       else{
         //console.log(isinLangs(this.languages));
         if(isinLangs(this.languages) === true){
           $("#project-cards").append('<div id="'+this.id+'" class="card col"><a href="'+this.link+'"><img class="img-thumbnail" alt="Thumbnail" src="'+this.img+'"><h2 class="title card-ele" href="'+this.link+'">'+this.title+'</h2></a><h2 class="lang card-ele">'+this.client+'</h2><p class="description">'+this.description+'</p></div>');
       }
     }
     });
  });


});

function isinLangs(lang){
  var retVar = false;
  $(lang.split(',')).each(function(index){
    if(langs.indexOf(this.toString()) >= 0) {
      retVar = true;
    }
  });
  return retVar;
}
jQuery.fn.reverse = [].reverse;
