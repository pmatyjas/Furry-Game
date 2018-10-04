var Game = require("./game.js");

var gra = new Game;
gra.showFurry();
gra.showCoin();
document.addEventListener('keydown', function (event) {
    gra.turnFurry(event)
});


