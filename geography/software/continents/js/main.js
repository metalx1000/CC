var game = new Phaser.Game(1280, 720, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update});
var centerx = game.width / 2;
var centery = game.height / 2;

function preload() {

  //  You can fill the preloader with as many assets as your game requires

  //  Here we are loading an image. The first parameter is the unique
  //  string by which we'll identify the image later in our code.

  //  The second parameter is the URL of the image (relative)
  game.load.image('map', 'res/map.png');

  //game.load.audio('music', ['res/music/music1.ogg', 'res/music/music1.mp3']);
}

function create() {
  game.scale.pageAlignHorizontally = true;
  game.scale.pageAlignVeritcally = true
  game.scale.refresh();
  game.stage.backgroundColor = "#4488AA";

  //  This creates a simple sprite that is using our loaded image and
  //  displays it on-screen

  map = game.add.sprite(0, 0, 'map');

  //  Play some music
  //music = game.add.audio('music');
  //music.play('',0,1,true);

  // start fullscreen on click
  game.input.onDown.add(go_fullscreen, this);
}

function update(){
  //this is where things are updated
}

function go_fullscreen(){
  game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
  game.scale.startFullScreen();
}

