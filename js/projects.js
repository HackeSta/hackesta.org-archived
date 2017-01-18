var fileExt = {};
    fileExt[0]=".html";
var filenames = [];
$.ajax({
    //This will retrieve the contents of the folder if the folder is configured as 'browsable'
    url: 'projects/',
    success: function (data) {
       $(data).find("a:contains(" + fileExt[0] + ")").each(function () {
           var filename = this.href.replace(window.location.host, "").replace("http:///", "");
          filenames.push(filename)

       });
       filter();
       parsePages();
     }
  });

function filter(){
filenames.forEach(function(item, index){
  if(item == "index.html"){
    filenames.splice(index,1);
  }
});

}

function parsePages()
{
  filenames.forEach(function(item, index){
    parsePage(item);
  });
}

function parsePage(page)
{
  var pageURL = "projects/" + page;
  var contextText;
/*  jQuery(function($){
  	$().load(pageURL + ' #project-background', function(result){console.log($().text())});
  });*/
  var content;
$.get('pageURL' +  " #project-background", function(data){
    content= data;
});
// Do something with content:
alert(content);
console.log(content);
}
