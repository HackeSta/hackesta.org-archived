var data;
function preload(){
data=  loadJSON("/photos.json");
}
function setup()
{
noCanvas();
noLoop();
for(var i in data.photos)
{
  console.log(data.photos[i].image_url);
}

}

function draw()
{
}
