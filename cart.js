
var cart = JSON.parse(localStorage.getItem('cart')) || [];
var cartItems = document.querySelector('#cart-items');
var cartTotal = document.querySelector('#cart-total');
var total = 0;

var cancelButton = document.querySelector('#cancel-order');
var placeOrderButton = document.querySelector('#place-order');

var orders = JSON.parse(localStorage.getItem('orders')) || [];

cancelButton.addEventListener('click', function() {
    localStorage.removeItem('cart');
    window.location.reload();
});

cart.forEach(function(product) {
    var item = document.createElement('div');

    item.textContent = product.name + ' | Size: ' + product.size + ' | Color: ' + product.color + ' | Quantity: ' + product.quantity;

    cartItems.appendChild(item);

    total += product.price * product.quantity;
});

cartTotal.textContent = total.toFixed(2);

placeOrderButton.addEventListener('click', function() {
    if (cart.length === 0) {
        alert('Cart is empty');
        return;
    }

    orders.push(cart);

    localStorage.setItem('orders', JSON.stringify(orders));

    localStorage.removeItem('cart');

    alert('Order has been placed successfully');

    window.location.reload();
});
