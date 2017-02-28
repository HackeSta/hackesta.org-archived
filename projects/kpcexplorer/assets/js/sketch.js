var json;
var libraries = [];
var persons = [];
function preload()
{
json = loadJSON('assets/credits.json');
}
function setup()
{
  parseJS(json);
  makePersons();
  addBreaks(1);
  var hr = createElement('hr');
  hr.addClass('style14');
  makeLibs();
}

function makePersons(){
   var cards = createDiv('');
   cards.addClass('cards');
for(var i =0; i < persons.length; i++)
{
  //Generating Colors
  var paletteColors = ['Red', 'Pink', 'Purple', 'Deep Purple', 'Indigo', 'Blue', 'Light Blue', 'Cyan', 'Teal', 'Deep Orange'];
  var col = random(paletteColors);
  paletteColors.splice(paletteColors.indexOf(col), 1);
  var colRole = random(paletteColors);
  paletteColors.splice(paletteColors.indexOf(colRole), 1);
  var colName = random(paletteColors);

  var person = persons[i];
  //Creating HTML
  var card = createDiv('');
  card.addClass('card');
  card.addClass('col');
  card.style("background",palette.get(col));
  var cardB = createDiv('');
  cardB.addClass('card-block');
  cardB.attribute('align','middle')
  var name = createElement('h4', person.firstName + " " + person.lastName);
  name.addClass('card-name');
  name.addClass('card-ele');
  name.style("background", palette.get(colName));
  name.style("border", "1px solid " + palette.get(colName));
  var role = createElement('p', person.role);
  role.addClass('card-role');
  role.addClass('card-ele');
  role.style("background",palette.get(colRole));
  role.style("border", "1px solid " + palette.get(colRole));
  var image = createElement('img');

    var imgPath = 'assets/media/' + person.firstName.toLowerCase().replace(/\s/g,'')+person.lastName.toLowerCase().replace(/\s/g,'') + '.png';
    if(imageExists(imgPath)){
      image.attribute('src',imgPath);
      image.attribute('alt', person.firstName + " " + person.lastName);
    }
    else{
    image.attribute('src','/media/def_user.svg');
    image.attribute('alt', 'blank_user');
}

  image.addClass('profile-image');
  cards.child(card);
  card.child(cardB);
  cardB.child(image);
  cardB.child(name);
  cardB.child(role);
  if(person.facebook != null){
    var fb = createDiv('');
    fb.addClass('social-bubble');
    var fbBubble = createElement('i');
    fbBubble.addClass("fa fa-facebook");
    var fbLink = createA("https://www.facebook.com/"+person.facebook,'');
    fbLink.attribute('target','_blank');
    cardB.child(fbLink);
    fbLink.child(fb);
    fb.child(fbBubble);
  }
  if(person.instagram != null){
    var ins = createDiv('');
    ins.addClass('social-bubble');
    var insBubble = createElement('i');
    insBubble.addClass("fa fa-instagram");
    var insLink = createA("https://www.instagram.com/"+person.instagram,'');
    insLink.attribute('target','_blank');
    cardB.child(insLink);
    insLink.child(ins);
    ins.child(insBubble);
  }
  if(person.twitter != null){
    var tw = createDiv('');
    tw.addClass('social-bubble');
    var twBubble = createElement('i');
    twBubble.addClass("fa fa-twitter");
    var twLink = createA("https://www.twitter.com/"+person.twitter,'');
    twLink.attribute('target','_blank');
    cardB.child(twLink);
    twLink.child(tw);
    tw.child(twBubble);
  }
  if(person.github != null){
    var gh = createDiv('');
    gh.addClass('social-bubble');
    var ghBubble = createElement('i');
    ghBubble.addClass("fa fa-github");
    var ghLink = createA("https://www.github.com/"+person.github,'');
    ghLink.attribute('target','_blank');
    cardB.child(ghLink);
    ghLink.child(gh);
    gh.child(ghBubble);
  }
  if(person.website != null){
    var web = createDiv('');
    web.addClass('social-bubble');
    var webBubble = createElement('i');
    webBubble.addClass("fa fa-globe");
    var webLink = createA(person.website,'');
    cardB.child(webLink);
    webLink.child(web);
    web.child(webBubble);
  }
}
}
function makeLibs(){
  var libs = createDiv('');
  libs.addClass('libs');
  for(var i=0;i<libraries.length;i++){
    var link = createA(libraries[i].link,libraries[i].title);
    libs.child(link);
    libs.child(createElement('br'));
    console.log(libraries[i].title);
  }
}

function parseJS(json){
  for(var i =0; i < json.persons.length; i++)
  {
      var jsPer = json.persons[i];
      var person = new Person(jsPer.firstName,jsPer.lastName,jsPer.role);
      person.facebook = jsPer.facebook;
      person.twitter = jsPer.twitter;
      person.instagram = jsPer.instagram;
      person.github = jsPer.github;
      person.website = jsPer.website;
      persons.push(person);
  }
  for(var i =0; i < json.libraries.length; i++)
  {
      var jsLib = json.libraries[i];
      var lib = new Library(jsLib.title, jsLib.link);
      libraries.push(lib);
  }
}

function addBreaks(number){
  for(var i = 0; i<number; i++)
  {
  var br = createElement('br');
  br.style('clear','both');
  }
}
function imageExists(image_url){

    var http = new XMLHttpRequest();

    http.open('HEAD', image_url, false);
    http.send();

    return http.status != 404;

}
function Person(firstName,lastName,role){
this.firstName = firstName;
this.lastName = lastName;
this.role = role;

this.facebook;
this.twitter;
this.instagram;
this.github;
this.website;
}

function Library(title, link){
  this.title = title;
  this.link = link;
}
