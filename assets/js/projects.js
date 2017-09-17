  var langs = [];
  var availableLanguages = [];
  // jQuery(document).ready(function($) {
  //   var url = $.url();
  //   var all = true;
  //   var query = '';
  //   if (url.param('langs') !== undefined && url.param('langs') !== '') {
  //     query = url.param('langs');
  //     $(query.split(',')).each(function(index) {
  //       langs.push(this.toString().toLowerCase());
  //     });
  //     all = false;
  //   }
  //   $("#project-title").append(" - " + query.toString());
  // 
  //   if (all) {
  //     
  //   
  //     $.ajax({
  //       url: 'https://hackesta.org/api/websites/?format=json',
  //       type: 'GET',
  //       crossDomain: true,
  //       dataType: 'json',
  //       success: function(json) {
  //         $(json).reverse().each(function(index) {
  //           $("#websites").append('<div id="website-' + this.id + '" class="col-md-3 col-xs-12 col-sm-12"><a href="' + this.url + '"><img style="" alt="Thumbnail" src="' + this.icon + '"><h2 class="title">' + this.name + '</h2></a>');
  //         });
  //         $("#websites-loader").css('display', 'none');
  // 
  //       },
  //       error: function() {
  //         $("#websites-loader").html('<h2>There was an error in contacting the server. Please try again later</h2>');
  //       }
  //     });
  //   } else {
  //     $("#websites-container").css('display', 'none');
  //     $("#websites-loader").css('display', 'none');
  //   }
  // });
  
  function loadProjects(){
    $.ajax({
      url: 'http://localhost:8000/projects/?format=json',
      type: 'GET',
      crossDomain: true,
      dataType: 'json',
      success: function(json) {

        $(json).reverse().each(function(index) {
            link = '/projects/?id=' + this.id.toString();
            if (this.external_link !== '' && this.external_link !== undefined) link = this.external_link;
            navbar_string = '<li class="tab"><a href="'+link+'">'+this.name+'</a></li>';
            card_string = '<div class="col s12 m6 l4">' + 
            '<div class="card">'+
            '<div class="card-content">'+
            '<span class="card-title">'+this.name+'</span>'+
            '<div class="chip">'+
            '<img src="'+this.target.icon+'">'+this.target.name+
            '</div>'+
            '<p class="flow-text">'+this.short_description+'</p>'+
            '</div>'+
            '</div>'+
            '</div>';
            $("#project-tabs, #mobile-projects").append(navbar_string);
            $("#project-cards").append(card_string);
        });
        // if(all){
        //   $(availableLanguages).each(function(index){
        //     domElem = $("#project-tags")[0];
        //     link = availableLanguages[index]; 
        //     if(availableLanguages[index] === 'c#') link = 'csharp';
        //     $(domElem).append('<div class="col-md-1 col-xs-1" ><a href="?langs='+link+'" >'+availableLanguages[index]+'</a></div>');
        //   });
        // }
        // $("#projects-loader").css('display', 'none');
      },
      error: function() {
        $("#projects-loader").html('<h2>There was an error in contacting the server. Please try again later</h2>');
      }
    });
  }
  function isinLangs(lang) {
    if (lang === 'C#') {
      lang = "CSharp";
    }
    var retVar = false;
    $(lang.split(',')).each(function(index) {
      if (langs.indexOf(this.toString().toLowerCase()) >= 0) {
        retVar = true;
      }
    });
    return retVar;
  }

  function getIcon(client) {
    switch (client) {
      case "C#":

        return
      case "Android":
        return "fa fa-android";
      case "Python":
        return "fae fae-python";
      default:
        return "fa fa-code";
    }
  }
  jQuery.fn.reverse = [].reverse;
