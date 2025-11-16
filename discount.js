const discountCalc = (arr) => {
    let totalPrice = 0
    products.map(product => {
        let { price, quantity } = product

        totalPrice = totalPrice + (price * quantity) - (price * quantity / product.discount)
    })
    console.log(totalPrice);
    return totalPrice
}
const products = [
    // { name: 'Pen', price: 10, quantity: 2 },
    { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
    { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];
const res = discountCalc(products)
