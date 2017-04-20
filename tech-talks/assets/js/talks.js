
// $(document).ready(function(){
//   loadTalk(getUrlParameter('talk'));
// });


var loadTalk = function loadTalk(talk, callback){
  if(talk === undefined){
    $('.container').html('<div id="content"></div>');
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
    url: 'http://hackesta.pythonanywhere.com/github/talks/?format=json',
    type: 'GET',
    crossDomain: true,
    dataType: 'json',
    success: function(json){

      $(json).each(function(index){
        $("#content").append('<a href="?talk='+index.toString()+'">'+this.name.replace(".md", "")+'</a>');
      });
    }
  });
};
var getTalkUrl = function getTalkUrl(id, callback){
  $.ajax({
    url: 'http://hackesta.pythonanywhere.com/github/talk/?format=json&talk_id=' + id.toString(),
    type: 'GET',
    crossDomain: true,
    dataType: 'json',
    success: function(json){
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
