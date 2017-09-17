


$(document).ready(function() {
  

  $("#sidebar").load("/sidebar.html", function(){
    $.ajax({
      url: 'https://hackesta.org/api/projects/list/?format=json',
      type: 'GET',
      crossDomain: true,
      dataType: 'json',
      success: function(json){
        if(parseInt($.getUrlParameter('id')) > json.length){
          window.location.replace('/projects.html');
        }
        console.log(json);
        $(json).reverse().each(function(value){
          link = '/projects/?id='+this.id.toString();
          classToAdd = "class=''";
          if(this.external_link !== '' & this.external_link !== undefined) link = this.external_link;
          if($.getUrlParameter('id') === this.id.toString()){
          
          classToAdd = "class='focus'";
            
          }
          $("#projects-sidebar").append('<li id="project-sidebar-'+this.id+'" ' +classToAdd+'><a href="'+link+'">'+this.name+'</a></li>');
        });
        $("#sidebar-loader").css('display','none');
      },
      error: function(){
        $("#sidebar-loader").html("Refresh the page!");
      }
    });  
  });
  


});
