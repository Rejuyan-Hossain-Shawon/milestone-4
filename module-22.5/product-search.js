const products = [
    { name: 'leneovo laptop', price: 100 },
    { name: 'samsung watch', price: 100 },
    { name: 'leneovo landphone', price: 100 },
    { name: 'hp phone', price: 100 },
    { name: 'leneovo mobile', price: 100 },
    { name: 'lg tv', price: 1000 }

]

// function search(products, searchText) {
//     let matched = [];
//     for (const product of products) {
//         if (product.name.indexOf(searchText) != -1) {
//             matched.push(product);

//         }
//     }
//     return matched;
// }




// // in a string if there is any phone word that will be shown like as landphne,phone both will returned
// const result = search(products, 'phone');
// console.log(result);




// price range list set
function filter(products) {
    for (const product of products) {
        // by this condition price less than 100 will be skiped
        if (product.price <= 100) {
            continue;

        }
        return product;
    }
}

const result1 = filter(products);
console.log(result1);