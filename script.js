'use strict'
var sizeButtons = document.querySelectorAll('.size-btn');

 sizeButtons.forEach(function(button){

  button.addEventListener('click' , function(){

   sizeButtons.forEach(function(item){
    item.classList.remove('active');
   });
   button.classList.add('active');
});
});
  
var colorButtons = document.querySelectorAll('.color-buttons button'); 

colorButtons.forEach(function(button){

   button.addEventListener('click' , function(){

      colorButtons.forEach(function(item){
         item.classList.remove('active');
      });

      button.classList.add('active');

      if (button.classList.contains('white')){
         productImage.src = './tshirt_white.png';
      }
         else if (button.classList.contains('black')){
         productImage.src = './tshirt_black.png';
      }
            else if (button.classList.contains('blue')){
         productImage.src = './tshirt_blue.png';
      }
            else if (button.classList.contains('Cream')){
         productImage.src = './tshirt_Cream.png';
      }
   });
});

var increaseButton = document.querySelector('#increase');
var decreaseButton = document.querySelector('#decrease');
var quantityDisplay = document.querySelector('#quantity');
var quantity = 1;

increaseButton.addEventListener('click',function(){

   quantity++;

   quantityDisplay.textContent = quantity;

});

decreaseButton.addEventListener('click' , function(){
    if (quantity > 1 ) {
      quantity--;
      quantityDisplay.textContent = quantity; 
    }
});

var textTitles = document.querySelectorAll('.text-title');

textTitles.forEach(function(title) {

    title.addEventListener('click', function() {

        var section = title.parentElement;

        section.classList.toggle('active');

    });

});

var colorButtons = document.querySelectorAll('.color-buttons button');
var productImage = document.querySelector('#product-image');


// 

var addToCartButton = document.querySelector('.add-to-cart');
var cart = JSON.parse(localStorage.getItem('cart')) || [];
var cartCount = document.querySelector('#cart-count');
addToCartButton.addEventListener('click', function() {

    var selectedSize = document.querySelector('.size-btn.active');
    var selectedColor = document.querySelector('.color-buttons button.active');

    if (!selectedSize || !selectedColor){
      alert('select size and color');
      return;
    }

    var product = {
        name: 'Minimal T-shirt',
        size: selectedSize.textContent,
        color: selectedColor.classList[0],
        quantity: quantity,
        price: 19.99
       
    };
      cart.push(product);
      localStorage.setItem('cart',JSON.stringify(cart));
     
       cartCount.textContent = cart.length;
        window.location.href = 'cart.html';


});
