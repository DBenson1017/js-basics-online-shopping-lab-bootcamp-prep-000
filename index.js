var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}

var musicians = [];
var instruments = [];
var music = []; // the function should add / creat this 

 function theBeatlesPlay(musicians, instruments) {
  for ( let i = 0; musicians.length < 5; i++) {
    var string = musicians[i] + " plays " + instruments[i] + ".";
    music.push(string);}
    return music;
}
