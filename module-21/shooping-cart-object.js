const productsList = [
    { name: "Iphone", camera: "12px", price: 120, quantity: 2 },
    { name: "Shirt", camera: "32px", price: 100, quantity: 1 },
    { name: "Watch", camera: "22px", price: 1200, quantity: 4 },
    { name: "Laptoop", camera: "90px", price: 200, quantity: 1 }
];

function cartTotalCalculation(products) {
    let cartTotal = 0;
    for (let product of products) {
        const productTotal = product.price * product.quantity;
        cartTotal += productTotal;

    }
    return cartTotal;

}

const result = cartTotalCalculation(productsList);
console.log(result);