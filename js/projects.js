var col;
var colTitle;
var colLang;
var cards = [];
function setup(){
  noLoop();
  cards = selectAll('.card');
}

function draw(){

  for(var i =0; i<cards.length;i++)
  {
    randColors();
    console.log(col + '--'+ colTitle + '--' + colLang);
    card = cards[i];
    card.style("background",palette.get(col));
    var title = select('.title', card);
    var lang = select('.lang', card);
    title.style("background", palette.get(colTitle));
    lang.style("background", palette.get(colLang));

  }
}

function randColors(){
  //Generating Colors
  var paletteColors = ['Red', 'Pink', 'Purple', 'Deep Purple', 'Indigo', 'Blue', 'Light Blue', 'Cyan', 'Teal', 'Deep Orange'];
  col = random(paletteColors);
  paletteColors.splice(paletteColors.indexOf(col), 1);
  colTitle = random(paletteColors);
  paletteColors.splice(paletteColors.indexOf(colTitle), 1);
  colLang = random(paletteColors)
}
