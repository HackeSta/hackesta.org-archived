
$(document).ready(function(){
  if(getUrlParameter('talk') == undefined){
    loadData('gallery.json')
  }
  else{
    loadTalk(getUrlParameter('talk'))
  }

});


var loadTalk = function loadTalk(talk){
  console.log(talk);
  console.log(getText("/tech-talks/talks/" +talk.toString()+'.md'));
  $(".markdown").html(getText("/tech-talks/talks/" +talk.toString()+'.md'));
}

function getText(myUrl){
           var result = null;
           $.ajax( { url: myUrl,
                     type: 'get',
                     dataType: 'html',
                     async: false,
                     success: function(data) { result = data; }
                   }
           );
           FileReady = true;
           return result;
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
