const order = {
    products: [],
};

// Function to update the order summary and calculate the total price
function updateOrderSummary() {
    const totalPriceElement = document.getElementById('totalPrice');
    const pIdElements = document.querySelectorAll('[id^="p-id"]');
    let total = 0;

    // Update product details in the order summary
    order.products.forEach((product, index) => {
        const nameElement = document.getElementById(`name${index + 1}-product`);
        const pIdElement = pIdElements[index];

        nameElement.textContent = product.name;
        pIdElement.textContent = `${product.price.toFixed(2)}`;
        total += product.price;
    });

    // Calculate and display the total price
    totalPriceElement.textContent = `${total.toFixed(2)}`;
}

// Listen for the coupon code submission, if needed
const submitButton = document.getElementById('submit');
const userInput = document.getElementById('user-input');

submitButton.addEventListener('click', () => {
    
    const couponCode = userInput.value;
    // You can implement coupon code logic here, if required.
    // Update the total price based on the coupon code.

    
    updateOrderSummary();

    
});