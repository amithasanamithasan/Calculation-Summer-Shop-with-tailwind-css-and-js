let cart = [];
let totalPrice = 0;

function addItem() {
    const item = document.getElementById("item").value;
    const price = parseFloat(document.getElementById("price").value);

    if (!item || isNaN(price)) {
        alert("Please enter a valid item and price.");
        return;
    }

    cart.push({ item, price });
    displayCart();
    updateTotalPrice();
    document.getElementById("item").value = "";
    document.getElementById("price").value = "";
}

function displayCart() {
    const cartList = document.getElementById("cart");
    cartList.innerHTML = "";

    // cart.forEach((cartItem) => {
    //     const listItem = document.createElement("li");
    //     listItem.textContent = `${cartItem.item} - $${cartItem.price.toFixed(2)}`;
    //     cartList.appendChild(listItem);
    // });
}

function updateTotalPrice() {
    totalPrice = cart.reduce((total, cartItem) => total + cartItem.price, 0);
    document.getElementById("totalPrice").textContent = totalPrice.toFixed(2);
}