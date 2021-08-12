const phones = [
    { name: "Iphone", camera: "12px", price: 120000 },
    { name: "Samsung", camera: "32px", price: 100000 },
    { name: "Xiaomi", camera: "22px", price: 12000 },
    { name: "Walton", camera: "90px", price: 22000 }
];

function cheapestPhone(phoneList) {
    let cheap = phoneList[0];
    for (let item of phoneList) {
        if (item.price < cheap.price) {
            cheap = item;
        }
    }
    return cheap;
}


const result = cheapestPhone(phones);
console.log(result);