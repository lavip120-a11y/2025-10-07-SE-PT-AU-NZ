const products = [
{ id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts' }, //list of objects
{ id: 2, title: "Men's Hoodie", price: 54.95, category: 'Winter' },
{ id: 3, title: "Denim Jeans", price: 49.95, category: 'Pants' }, 
{ id: 4, title: "Women's Hoodie", price: 54.95, category: 'Winter' },
{ id: 5, title: "Kid's Hoodie", price: 54.95, category: 'Winter' },
];

let categories = products.map((product) => product.category);//declare a variable and use a method map , dont need a condition
let prices = products.map((product) => product.price); //transforms the array and extracts only the categories


//transforming or changing the array and extracts only the categories

console.log(categories);
console.log(prices);

let titles = products.map(product => product.title)
let h2titles = products.map(product => '<h2>'+product.title+'</h2>')
let raisedPrices = products.map(product => ({...product, price: product.price + 5}) ) // find the price of the product and increase it by 5

console.log(titles) // [ 'Sleeveless Tee', "Men's Hoodie", 'Denim Jeans', 'Ladies Tee' ]
console.log(h2titles) // [ '<h2>Sleeveless Tee</h2>', "<h2>Men's Hoodie</h2>", '<h2>Denim Jeans</h2>', '<h2>Ladies Tee</h2>' ]
console.log(raisedPrices) // all prices increased by $5