$(document).keydown(function(event) {
  var keycode = (event.keyCode ? event.keyCode : event.which);
  if (keycode === 38) {
    pic1Y -= 50;
    initialize();
  }
  if (keycode === 37) {
    pic1X -= 50;
    initialize();
  }
  if (keycode === 39) {
    pic1X += 50;
    initialize();
  }
  if (keycode === 40) {
    pic1Y += 50;
    initialize();
  }
  if (keycode === 65) {
    pic2X -= 38;
    initialize();
  }
  if (keycode === 68) {
    pic2X += 38;
    initialize();
  }
  if (keycode === 87) {
    pic2Y -= 38;
    initialize();
  }
  if (keycode === 83) {
    pic2Y += 38;
    initialize();
  }
});

function initialize() {
  drawBackground();
  var context = document.getElementById('myCanvas').getContext("2d");
  context.drawImage(pic2, pic2X, pic2Y, 70,70);
  context.drawImage(pic3, pic3X, pic3Y, 200, 100);
  context.drawImage(pic1, pic1X, pic1Y, 70, 70);
  checkPlayerCollision();
  checkHouseCollision();
}

function drawBackground() {
  var context = document.getElementById("myCanvas").getContext("2d");
  context.fillStyle = "#559955";
  context.fillRect(0, 0, window.innerWidth, window.innerHeight);
}

function animate() {
  a = requestAnimationFrame(animate);
  drawBackground();
    var context = document.getElementById('myCanvas').getContext("2d");
    context.drawImage(pic2, pic2X, pic2Y, 70, 70);
    context.drawImage(pic1, pic1X, pic1Y, 70, 70);
    context.drawImage(pic3, pic3X, pic3Y, 200, 100);
}

var a;
function startAnimation() {
  animate();
}

function stopAnimation() {
  cancelAnimationFrame(a);
}

var playerCollisionCheck;
var houseCollisionCheck;

function checkPlayerCollision() {
  console.log('yeet');
  var context = document.getElementById('myCanvas').getContext("2d");
  if (pic1X + 70 > pic2X && pic1X < pic2X + 70 && pic1Y + 70 > pic2Y && pic1Y < pic2Y + 70) {
    playerCollisionCheck = true;
  }
  if (playerCollisionCheck === true) {
    alert("Trump wins the presidency!");
  }
}

function checkHouseCollision() {
  var context = document.getElementById('myCanvas').getContext("2d");
  if (pic1X + 70 > pic3X && pic1X < pic3X + 200 && pic1Y + 70 > pic3Y && pic1Y < pic3Y + 100) {
    houseCollisionCheck = true;
  }
  if (houseCollisionCheck === true) {
    alert("Hillary wins the presidency!");
  }
}

  var pic1 = new Image();
  pic1.src = "https://upload.wikimedia.org/wikipedia/commons/2/27/Hillary_Clinton_official_Secretary_of_State_portrait_crop.jpg";
    var pic1X = 800;
    var pic1Y = 600;

  var pic2 = new Image();
  pic2.src = "https://pbs.twimg.com/profile_images/1706110925/fbi_logo_twitter.jpg";
    var pic2X = 100;
    var pic2Y = 600;

  var pic3 = new Image();
  pic3.src = "http://cdn.history.com/sites/2/2015/03/hungry-history-cooking-for-the-commander-in-chief-20th-century-white-house-chefs-iStock_000004638435Medium-E.jpeg";
    var pic3X = 150;
    var pic3Y = 50;

var bround = new Image();
  bround.src = "";
