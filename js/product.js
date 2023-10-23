

const product1 = document.getElementById('pro-1');
const product2 = document.getElementById('pro-2');
const product3 = document.getElementById('pro-3');
const product4 = document.getElementById('pro-4');
const product5 = document.getElementById('pro-5');
const product6 = document.getElementById('pro-6');

// Event listeners for adding products to the cart
product1.addEventListener('click', () => {
    addProduct(1);
});
product2.addEventListener('click', () => {
    addProduct(2);
});
product3.addEventListener('click', () => {
    addProduct(3);
});
product4.addEventListener('click', () => {
    addProduct(4);
});
product5.addEventListener('click', () => {
    addProduct(5);
});
product6.addEventListener('click', () => {
    addProduct(6);
});

function addProduct(productId) {
    const name = document.getElementById(`name-${productId}`).textContent;
    const price = parseFloat(document.getElementById(`price${productId}-total`).textContent);
    
    // You can do something with the selected product, like adding it to the order summary.
    // For this example, let's assume there's an order object where we store selected products.
    order.products.push({ name, price });

    // Update the order summary
    updateOrderSummary();
}