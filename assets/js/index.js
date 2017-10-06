let avalColors = ['red', 'pink', 'purple', 'deep-purple', 'indigo', 'blue', 'light-blue', 'cyan', 'teal', 'green', 'light-green', 'lime', 'yellow', 'amber', 'orange'];

jQuery(document).ready(function($) {
  $("#header").load("/header.html", function() {
        $(".button-collapse").sideNav();
  });
  $("#footer").load("/footer.html");
  
  $("#github_projects").loadprojects();
  $("#closedprojects").loadclosedprojects();
  $("#todo-list").loadtodolist();
});

jQuery.fn.extend({
  loadprojects: function(){
    var $container = $(this);
    
    $.ajax({
      url:"https://hackesta.org/api/github/users/haideralipunjabi/repos?format=json",
      crossDomain: true,
      dataType: 'json',
      success: function(data){
        
        data = shuffle(data);
        
        $.each(data, function(index, repo){
            
            if(!repo.fork && $container.children().length <= 3){
              $card = $(
                '<div class="col s12 m6 l4 ">'+
                '<div class="card hoverable project-card '+ avalColors.random() +' darken-2">'+
                '<div class="card-content white-text">'+
                '<span class="card-title">'+generateA(repo.name, repo.svn_url, true)+'</span>'+
                '<div class="repo-data">'+
                generateA("<i class='fa fa-random'>"+repo.forks_count+"</i>", repo.svn_url + "/fork", true)+
                generateA("<i class='fa fa-star'>"+repo.stargazers_count+"</i>", repo.svn_url + "/stargazers", true)+
                generateA("<i class='fa fa-eye'>"+repo.watchers_count+"</i>", repo.svn_url + "/watchers", true)+
                '</div>'+
                '<p>'+((repo.description === null) ? ""  :repo.description)+'</p>'+
                '</div>'+
                '<div class="card-action">'+
                '<span> Updated At '+(new Date(repo.updated_at)).toLocaleString()+'</span>'+
                '</div>'+
                '</div>'+
                '</div>'
              );
              $container.append($card);
            }
        });
        $container.hideloader();

      },
      
    });
},
loadclosedprojects : function() {
  let $container = $(this);
  
  $.ajax({
    url: "https://hackesta.org/api/projects/?format=json",
    crossDomain: true,
    dataType: 'json',
    success: function(data) {

      $.each(data, function(index, repo) {
        if($container.children().length <= 3){
          
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
        }

      });
      $container.hideloader();
    },

  });
},
loadtodolist: function(){
  let $container = $(this);
  $.ajax({
    url: 'https://hackesta.org/api/wunderlist/todo?format=json',
    type: 'GET',
    crossDomain: true,
    dataType: 'json',
    success: function(json){
      
      $.each(json,function(key,value){
        console.log(key,value);
        $regex = /\[.+]\((http:\/\/|https:\/\/).+\)/;
        // Key: Name of List
        title = key;
        if($regex.test(key)){
          name = key.substring(1, key.indexOf(']'));
          link = key.substring(key.indexOf('(')+1, key.indexOf(')'));
          title='<a href="'+link+'" target=_blank>'+name+'</a>';
        }
        list = [];
        $list = $('<ul></ul>');
        $(value.not_completed).each(function(index){
            $listitem = $('<li></li>');
            $listitem.append('<input id="notcheck'+index.toString()+'" disabled="" type="checkbox">');
            // Code to check for MD Links
            content = value.not_completed[index].title;
            if($regex.test(content)){
              name = content.substring(content.indexOf('['), content.indexOf(']'));
              link = content.substring(content.indexOf('(')+1, content.indexOf(')'));
              content ='<a href="'+link+'" target=_blank>'+name+'</a>';
            }
            $listitem.append("<label for='notcheck"+index.toString()+"'>"+jsmd(value.not_completed[index].title)+"</label>");
            $list.append($listitem);  
          });
        toShow = 5;
        if(value.completed.length < 5) toShow = value.completed.length;
        for(i =0; i < toShow; i++){
              $listitem = $('<li></li>');
              $listitem.append('<input id="check'+i.toString()+'" disabled="" checked="" type="checkbox">');
              // Code to check for MD Links
              
              $listitem.append("<label for='check"+i.toString()+"'>"+jsmd(value.completed[i].title)+"</label>");
              $list.append($listitem);  
        }
        console.log($list[0]);
        $card = $(
          "<div class='card hoverable col s12'>"+
          "<h4>"+title+"</h4>"+
          "</div>"
        );
        $card.append($list);
        $container.append($card)
        
      });
    $container.removeClass("center-align");  
    $container.hideloader();  
    }
  });
},
loadinstagram: function(){
  $container = $(this);
  $.ajax({
    url: 'https://hackesta.org/api/instagram/haideralipunjabi/?__a=1',
    type: 'GET',
    crossDomain: true,
    dataType: 'json',
    success: function(json){
      $.each(json.user.media.nodes,function(post){
        if(post.__typename==="GraphImage"){
          $card = $(
            '<div class="card hoverable s2">'+
              '<div class="card-image>"'+
                '<img src="'+post.thumbnail_src+'" dis_url="'+post.display_url+'"></img>'+
              '</div>'+
            '</div>'
          );
        }
        $container.append($card);
      });
    $container.removeClass("center-align");  
    $container.hideloader();  
    }
  });
},

hideloader: function() {
  $($(this).children(".preloader-wrapper")).hide();
}
});

Array.prototype.random = function(){
  return this[Math.floor(Math.random()*this.length)];
};
function generateA(text, link, blank){
  return '<a href="'+link+'"'+((blank)? 'target="_blank"':"" ) +'>'+text+'</a>';
}
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

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
