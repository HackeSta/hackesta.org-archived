var xml;
var roles = [];
var persons = [];
function preload()
{
  xml = loadXML("assets/credits.xml");

}
function setup()
{
  var children = xml.getChildren("person");

  for (var i = 0; i < children.length; i++) {
    var name = children[i].getContent();
    var role = children[i].getString("role");
    if(roles.indexOf(role) == -1) roles.push(role);
    persons.push(new Person(name, role));
  }
  makeHTML();
}

function makeHTML()
{
  for(var i =0; i < roles.length; i++)
  {
    createElement('h2', roles[i]);
    for(var j =0; j< persons.length; j++)
    {
      if(persons[j].role == roles[i]) {
      var ele = createElement('h4', persons[j].name);
      ele.addClass('margined');
      }
    }
  }
}

function Person(name, role){
this.name = name;
this.role = role;
}
