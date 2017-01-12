var fileExt = {};
    fileExt[0]=".html";
    fileExt[1]=".jpg";
    fileExt[2]=".gif";
$.ajax({
    //This will retrieve the contents of the folder if the folder is configured as 'browsable'
    url: 'projects/',
    success: function (data) {
       $("#fileNames").html('<ul>');
       //List all png or jpg or gif file names in the page
       $(data).find("a:contains(" + fileExt[0] + "),a:contains(" + fileExt[1] + "),a:contains(" + fileExt[2] + ")").each(function () {
           var filename = this.href.replace(window.location.host, "").replace("file:///", "");
           $("#fileNames").append( "<li>" + filename + "</li>");
       });
       $("#fileNames").append('</ul>');
     }
  });
