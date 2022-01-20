var compteurImage = 1;
var totalImage = 10;
function slider(x) {
  var image = document.getElementById("img");
  compteurImage = compteurImage + x;
  image.src = `./images/c${compteurImage}.jpeg`;
  if (compteurImage >= totalImage) {
    compteurImage = 2;
  }
  if (compteurImage <= 1) {
    compteurImage = totalImage;
  }
}

function sliderauto(x) {
  var image = document.getElementById("img");
  compteurImage = compteurImage + 1;
  image.src = `./images/c${compteurImage}.jpeg`;
  if (compteurImage >= totalImage) {
    compteurImage = 2;
  }
  if (compteurImage <= 1) {
    compteurImage = totalImage;
  }
}
window.setInterval(sliderauto, 3000);
