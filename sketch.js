let svgimg;
let shards = [];
let color;
let poly;
let polys = [];
let polyCount = 7805;
function preload() {
 svgimg = loadJSON('svg/image.json');
}

function setup() {
  createCanvas(2000, 2000);
  noStroke();
  for (var p = 0; p < svgimg.children.length-1000; p++) {
    polys.push(getPoly(p+1000));
  }
}

function draw() {
  scale(0.5);
  background(255);
  spawnPoly();
  for (var i = 0; i < shards.length; i++) {
    shards[i].show();
    shards[i].move();
    shards[i].checkPos();
  }
}

function getPoly(n) {
  let points = svgimg.children[n].attributes.points;
  color = svgimg.children[n].attributes.fill;
  points = points.replace(/\s/g, ',');
  points = points.split(",");
  points = points.map(Number);
  points.push(color);
  return points;
}

function spawnPoly() {
  if (polyCount > 500) {
    for (var p = 0; p < 5; p++) {
      shards.push(new Shard(polys[p][6], polys[p][0], polys[p][1],
      polys[p][2], polys[p][3], polys[p][4], polys[p][5]));
      polys.shift();
    }
  }
  polyCount -= 5;
}
