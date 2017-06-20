
// $(document).ready(function(){
//   loadTalk(getUrlParameter('talk'));
// });


var loadTalk = function loadTalk(talk, callback){
  if(!talk){
    $('#one .container').html('<div id="content"></div>');
    $('#content').html('<h1>Tech Talks</h1>')
    getTalks();
    callback();
  }
  else{
    url = getTalkUrl(talk, function(url){
      $('#markdown').load(url, function (data){
        callback();
    });
  });
}

};

var getTalks = function getTalks(){
  $.ajax({
    url: 'https://hackesta.pythonanywhere.com/github/talks/?format=json',
    type: 'GET',
    crossDomain: true,
    dataType: 'json',
    success: function(json){

      $(json).each(function(index){
        $("#content").append('<h3><a href="?talk='+index.toString()+'">'+this.name.replace(".md", "")+'</a></h3>');
      });
    }
  });
};
var getTalkUrl = function getTalkUrl(id, callback){
  $.ajax({
    url: 'https://hackesta.pythonanywhere.com/github/talk/?format=json&talk_id=' + id.toString(),
    type: 'GET',
    crossDomain: true,
    dataType: 'json',
    success: function(json){
      $("#date-time").html( (new Date(json.date)).toLocaleString());
      $("title").html(json.name.replace(".md", "") + " | Hack-e-Sta");
      $('meta[property="og:title"]').attr('content', json.name.replace(".md", "") + " | Hack-e-Sta");
      $('meta[property="og:url"]').attr('content', "https://hackesta.org/tech-talks/?talk=" + id.toString());
      
      callback(json.url);
    }
  });
};
var getText = function getText(myUrl, doneRes){
           var result = null;
           $.ajax( { url: myUrl,
                     type: 'get',
                     dataType: 'html',
                     async: false,
                     success: function(data) { doneRes(data);}
                   }
           );
           FileReady = true;
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
