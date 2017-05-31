  var langs = [];
  jQuery(document).ready(function($) {
    var url = $.url();
    var all = true;
    var query = '';
    if (url.param('langs') !== undefined && url.param('langs') !== '') {
      query = url.param('langs');
      $(query.split(',')).each(function(index) {
        langs.push(this.toString().toLowerCase());
      });
      all = false;
    }
    $("#project-title").append(" - " + query.toString());
    $.ajax({
      url: 'http://hackesta.pythonanywhere.com/projects/?format=json',
      type: 'GET',
      crossDomain: true,
      dataType: 'json',
      success: function(json) {

        $(json).reverse().each(function(index) {
          if (isinLangs(this.language.name)) {
            link = '/projects/?id=' + this.id.toString();
            if (this.external_link !== '' && this.external_link !== undefined) link = this.external_link;
            $("#project-cards").append('<div id="project-' + this.id + '" class="col-md-4 col-xs-6 col-sm-6"><a href="' + link + '"><img class="img-thumbnail" alt="Thumbnail" src="' + this.icon + '"></a><a href="' + link + '" class="button"><span class="fa fae ' + this.fa_icon + '"></span><h2 href="' + link + '">' + this.name + '</h2></a><p>' + this.short_description + '</p></div>');
          }
        });
        $("#projects-loader").css('display', 'none');
      },
      error: function() {
        $("#projects-loader").html('<h2>There was an error in contacting the server. Please try again later</h2>');
      }
    });
    if (all) {
      $.ajax({
        url: 'http://hackesta.pythonanywhere.com/websites/?format=json',
        type: 'GET',
        crossDomain: true,
        dataType: 'json',
        success: function(json) {
          $(json).reverse().each(function(index) {
            $("#websites").append('<div id="website-' + this.id + '" class="col-md-3 col-xs-6 col-sm-6"><a href="' + this.url + '"><img style="" alt="Thumbnail" src="' + this.icon + '"><h2 class="title">' + this.name + '</h2></a>');
          });
          $("#websites-loader").css('display', 'none');

        },
        error: function() {
          $("#websites-loader").html('<h2>There was an error in contacting the server. Please try again later</h2>');
        }
      });
    } else {
      $("#websites-container").css('display', 'none');
      $("#websites-loader").css('display', 'none');
    }
  });

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
