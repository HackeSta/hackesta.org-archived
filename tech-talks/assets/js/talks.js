
$(document).ready(function(){
  loadTalk(getUrlParameter('talk'));
});


var loadTalk = function loadTalk(talk){
  console.log(talk);
  getText("/tech-talks/talks/" +talk.toString()+'.md', function(data){
  $(".markdown").html(data);
  });
  //$(".markdown").html(getText("/tech-talks/talks/" +talk.toString()+'.md'));
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
