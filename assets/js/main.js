jQuery(document).ready(function($) {


  /*======= Skillset *=======*/

  $('.level-bar-inner').css('width', '0');

  $(document).ready(function() {

    $("#github-langs").append('<canvas id ="lang-chart"></canvas>');
    var ctx = document.getElementById("lang-chart");
    var labels = [],
      data = [],
      bgColor = [],
      bWidth = [];
    var myData;
    $.ajax({
      url: 'http://hackesta.pythonanywhere.com/github/languages/?format=json',
      type: 'GET',
      crossDomain: true,
      dataType: 'json',
      success: function(myData) {
        $.each(myData, function(key, val) {
          labels.push(key);
          data.push(val);
          bgColor.push(palette.random());
          bWidth.push(0);
        });
        var myChart = new Chart(ctx, {
          type: 'pie',
          data: {
            labels: labels,
            datasets: [{
              //label: '# of Votes',
              data: data,
              backgroundColor: bgColor
            }]
          },
          borderWidth: bWidth
        });
      }
    });
    $.ajax({
      url: 'http://hackesta.pythonanywhere.com/youtube/videos/?format=json&channel_id=UCF-qoE_8k_aum76Rk7EWMIg',
      type: 'GET',
      crossDomain: true,
      dataType: 'json',
      success: function(myData) {
        video = myData.videos[0];
        $("#latest_video").append('<iframe id="ytplayer" type="text/html" width="640" height="360" src="https://www.youtube.com/embed/' + video.video_id + '?autoplay=0&origin=http://hackesta.org" frameborder="0"></iframe>');
      }
    });

  });


$(window).on('load', function() {

  $('.level-bar-inner').each(function() {

    var itemWidth = $(this).data('level');

    $(this).animate({
      width: itemWidth
    }, 800);

  });

});

/* Bootstrap Tooltip for Skillset */
$('.level-label').tooltip();


/* jQuery RSS - https://github.com/sdepold/jquery-rss */

$("#rss-feeds").rss(

  //Change this to your own rss feeds
  "http://feeds.feedburner.com/TechCrunch/startups",

  {
    // how many entries do you want?
    // default: 4
    // valid values: any integer
    limit: 3,

    // the effect, which is used to let the entries appear
    // default: 'show'
    // valid values: 'show', 'slide', 'slideFast', 'slideSynced', 'slideFastSynced'
    effect: 'slideFastSynced',

    // outer template for the html transformation
    // default: "<ul>{entries}</ul>"
    // valid values: any string
    layoutTemplate: "<div class='item'>{entries}</div>",

    // inner template for each entry
    // default: '<li><a href="{url}">[{author}@{date}] {title}</a><br/>{shortBodyPlain}</li>'
    // valid values: any string
    entryTemplate: '<h3 class="title"><a href="{url}" target="_blank">{title}</a></h3><div><p>{shortBodyPlain}</p><a class="more-link" href="{url}" target="_blank"><i class="fa fa-external-link"></i>Read more</a></div>'

  }
);

/* Github Calendar - https://github.com/IonicaBizau/github-calendar */
GitHubCalendar(".calendar", "haideralipunjabi");


/* Github Activity Feed - https://github.com/caseyscarborough/github-activity */
GitHubActivity.feed({
username: "haideralipunjabi",
selector: "#ghfeed"
});



});
