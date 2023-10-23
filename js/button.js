
const applyDiscount = () => {
    const discountPrice = document.getElementById('discountPrice');
    const total = document.getElementById("totalPrice").innerText;
    const totalPrice = parseFloat(total);
    if (totalPrice >= 200) {
        const discount = totalPrice * (1 / 20)
        discountPrice.innerText = discount;
    }
    else {
        alert("please buy more than $200")
    }
}

const calcTotal = () => {
    const totalPrice = parseFloat(document.getElementById("totalPrice").innerText)
    const discountPrice = parseFloat(document.getElementById("discountPrice").innerText)

    const total = totalPrice - discountPrice;

    document.getElementById("netTotal").innerText = total;
}