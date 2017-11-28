let avalColors = ['red', 'pink', 'purple', 'deep-purple', 'indigo', 'blue', 'light-blue', 'cyan', 'teal', 'green', 'light-green', 'lime', 'yellow', 'amber', 'orange'];
let availableLanguages = [];
jQuery(document).ready(function($) {
  $("#header").load("/header.html", function() {
    $(".button-collapse").sideNav();
  });
  $("#footer").load("/footer.html");
  if(getUrlParameter('lang') !== undefined){
    $(".nonlang").each(function(index) {
      $(this).hide();
    });
  }
  loadprojects();
  loadhackestaprojects();
  loadwebsites();
  loadclosedprojects();
});
jQuery.fn.extend({
  hideloader: function() {
    $($(this).children(".preloader-wrapper")).hide();
  }
});
let loadprojects = function() {
  var $opencontainer = $("#openprojects");
  var $contribcontainer = $("#contribprojects");
  var language = getUrlParameter('lang');
  if(language === "Other") language = null;
  
  $.ajax({
    url: "https://hackesta.org/api/github/users/haideralipunjabi/repos?format=json",
    crossDomain: true,
    dataType: 'json',
    success: function(data) {

      data = shuffle(data);

      $.each(data, function(index, repo) {
        if (language === repo.language || language === undefined) {
          $card = $(
            '<div class="col s12 m6 l4 ">' +
            '<div class="card hoverable project-card ' + avalColors.random() + ' darken-2">' +
            '<div class="card-content white-text">' +
            '<span class="card-title">' + generateA(repo.name, repo.svn_url, true) + '</span>' +
            '<div class="repo-data">' +
            generateA("<i class='fa fa-random'>" + repo.forks_count + "</i>", repo.svn_url + "/fork", true) +
            generateA("<i class='fa fa-star'>" + repo.stargazers_count + "</i>", repo.svn_url + "/stargazers", true) +
            generateA("<i class='fa fa-eye'>" + repo.watchers_count + "</i>", repo.svn_url + "/watchers", true) +
            '</div>' +
            '<p>' + ((repo.description === null) ? "" : repo.description) + '</p>' +
            '</div>' +
            '<div class="card-action">' +
            '<span> Updated At ' + (new Date(repo.updated_at)).toLocaleString() + '</span>' +
            '</div>' +
            '</div>' +
            '</div>'
          );
          if (repo.fork) {
            $contribcontainer.append($card);
          } else {
            $opencontainer.append($card);
          }
          addLanguage(repo.language);
        }
        


      });
      $opencontainer.hideloader();
      $contribcontainer.hideloader();
      
    },

  });
};
let loadhackestaprojects = function() {
  let $container = $("#hackestaprojects")
  let language = getUrlParameter('lang');
  if(language === "Other") language = null;
  $.ajax({
    url: "https://hackesta.org/api/github/orgs/hackesta/repos?format=json",
    crossDomain: true,
    dataType: 'json',
    success: function(data) {

      data = shuffle(data);

      $.each(data, function(index, repo) {
        if (language === repo.language || language === undefined) {
          $card = $(
            '<div class="col s12 m6 l4 ">' +
            '<div class="card hoverable project-card ' + avalColors.random() + ' darken-2">' +
            '<div class="card-content white-text">' +
            '<span class="card-title">' + generateA(repo.name, repo.svn_url, true) + '</span>' +
            '<div class="repo-data">' +
            generateA("<i class='fa fa-random'>" + repo.forks_count + "</i>", repo.svn_url + "/fork", true) +
            generateA("<i class='fa fa-star'>" + repo.stargazers_count + "</i>", repo.svn_url + "/stargazers", true) +
            generateA("<i class='fa fa-eye'>" + repo.watchers_count + "</i>", repo.svn_url + "/watchers", true) +
            '</div>' +
            '<p>' + ((repo.description === null) ? "" : repo.description) + '</p>' +
            '</div>' +
            '<div class="card-action">' +
            '<span> Updated At ' + (new Date(repo.updated_at)).toLocaleString() + '</span>' +
            '</div>' +
            '</div>' +
            '</div>'
          );
          $container.append($card);
          addLanguage(repo.language);
        
        }


      });
      $container.hideloader();
    },

  });
};

let loadwebsites = function() {
  let $container = $("#websites")
  
  $.ajax({
    url: "https://hackesta.org/api/websites/?format=json",
    crossDomain: true,
    dataType: 'json',
    success: function(data) {

      $.each(data, function(index, repo) {
          $card = $(
            '<div class="col s12 m6 l4 ">' +
            '<div class="card hoverable project-card ' + avalColors.random() + ' darken-2">' +
            '<div class="card-image">'+
            '<img class="responsive-img circle" style="border-radius: 50%; width:50%; margin-left: auto; margin-right:auto;"  src="'+repo.icon+'" alt="'+repo.name+'"></img>'+
            '</div>'+
            '<div class="card-content white-text">' +
            '<span class="card-title">' + generateA(repo.name, repo.url, true) + '</span>' +            
            '</div>' +
            '</div>' +
            '</div>'
          );
          $container.append($card);

      });
      $container.hideloader();
    },

  });
};
let loadclosedprojects = function() {
  let $container = $("#closedprojects");
  
  $.ajax({
    url: "https://hackesta.org/api/projects/?format=json",
    crossDomain: true,
    dataType: 'json',
    success: function(data) {

      $.each(data, function(index, repo) {
          $card = $(
            '<div class="col s12 m6 l4 ">' +
            '<div class="card hoverable project-card ' + avalColors.random() + ' darken-2">' +
            '<div class="card-content white-text">' +
            '<span class="card-title">' + generateA(repo.name, repo.release_url, true) + '</span>' +
            '<p>' + ((repo.short_description === null) ? "" : repo.short_description) + '</p>' +
            '</div>' +
            '</div>' +
            '</div>'
          );
          $container.append($card);

      });
      $container.hideloader();
    },

  });
};
Array.prototype.random = function() {
  return this[Math.floor(Math.random() * this.length)];
};

function generateA(text, link, blank) {
  return '<a href="' + link + '"' + ((blank) ? 'target="_blank"' : "") + '>' + text + '</a>';
}

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
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
function addLanguage(language){
  if(language === null) language = "Other";

  if(!availableLanguages.includes(language)){
    $("#languages").append('<a class="waves-effect waves-light btn col s2 lang-button" href="?lang='+language+'">'+language+'</a>');
    availableLanguages.push(language);
  }
}
