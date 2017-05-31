jQuery(document).ready(function($) {
    if(getUrlParameter('id') !== '' & getUrlParameter('id') !== undefined)
    {
      $.ajax({
      url: 'http://hackesta.pythonanywhere.com/projects/?format=json&id='+getUrlParameter('id').toString(),
      type: 'GET',
      crossDomain: true,
      dataType: 'json',
      success: function(json){
        if(json.external_link !== '' && json.external_link !== undefined){
          window.location.replace(json.external_link);
        } 
        $("#project_name").html(json.name);
        $("title").html(json.name + " - Hack-e-Sta");
        $("#development_environment_icon").attr('src', json.development_environment.icon);
        $("#language_icon").attr('src', json.language.icon);
        $("#development_details").html(json.development_environment.name + ' - '+ json.language.name);
        $("#target_icon").attr('src', json.target.icon);
        $("#target").html(json.target.name);
        $("#release_url").attr('href', json.release_url);
        $("#release_type_icon").attr('src', json.release_type.icon);
        $("#release_type").html(json.release_type.name);
        $("#markdown").load(convertToGithubRaw(json.github_url, "master", "README.md"), function(){
          markdown(function(){
            findAndPlaceYoutube();  
            $("#loader").css("display", "none");
            Prism.highlightAll();
          
          });
        });
      },
      error: function(){
        $("#loader").html("<h2>An error occured, please try again later</h2>");
      }
    });  
    }
    else{
      window.location.replace('/projects.html');
    }
    
});


var findAndPlaceYoutube = function(){
  text = $($("#content")[0]).html();
  edit = text.substring("{youtube}", text.length);
  edit = text.substring(text.indexOf("(")+1, text.indexOf(")"));
  text =text.replace("{youtube}("+edit+")", '<iframe src="https://www.youtube.com/embed/'+edit+'" allowfullscreen="" width="560" height="315" frameborder="0"></iframe> ');
  $($("#content")[0]).html(text);
};
var convertToGithubRaw = function(string, branch, filename){
  if(string.charAt(string.length -1) !== '/') string = string + '/'; 
  string = string.replace('github.com', 'raw.githubusercontent.com');
  string = string + branch + '/' + filename;
  return string;
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
