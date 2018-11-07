var inventory = [" iPhone Xs ", " iPhone 8s ", "iPhone 7s", " iPhone 7 plus " , "iPhone 6s" , "iPhone 6" ];

var price = [899, 799, 699, 650,600, 450];

var cart = [];

var total = 0;

function addToCart(inventory) {
  cart.push(inventory);
  printCart(cart);
}

function printCart(cart) {
  for (var i = 0; i < cart.length; i++) {
    document.getElementById("cartbox").innerHTML = cart;
  }
}

function addToTotal(price) {
  total = total + price;
  updateTotalBox(total);
}

function updateTotalBox(total) {
  var taxTotal = (total + (total * .06));
  var grandTotal = "$" + parseFloat(taxTotal).toFixed(2);
 
  document.getElementById("totalbox").innerHTML = grandTotal;
}