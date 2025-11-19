const products = [
{ id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts' },
{ id: 2, title: "Men's Hoodie", price: 54.95, category: 'Winter' },
{ id: 3, title: "Denim Jeans", price: 49.95, category: 'Pants' }, 
{ id: 4, title: "Women's Hoodie", price: 54.95, category: 'Winter' },
{ id: 5, title: "Kid's Hoodie", price: 54.95, category: 'Winter' },
];

products.sort( (product1, product2) => product1.price - product2.price ) //requires 2 parameters.  The - is just comparing, it is not subtracting
console.log(products) // original array is modified to new low-high price sorting order: 1,4,3,2. Sorted by price
products.sort( (p1, p2) => p1.title > p2.title ? 1 : -1 ) //sorting products by Title text
console.log(products) // original array is modified to new title sorting order: 3,4,2,1

//example using numbers
const numbers = [4,8,1,5,66,23,41]
console.log( numbers.sort() ) // [ 1, 23, 4, 41, 5, 66, 8 ] : string comparisons
console.log( numbers.sort((num1, num2) => num1 - num2) ) // [ 1, 4, 5, 8, 23, 41, 66 ]

// sorting strings
const stringNums = ["1", "81", "41", "102", "35", "1004"]
console.log( stringNums.sort() ) // [ '1', '1004', '102', '35', '41', '81' ] : string comparisons
console.log( stringNums.sort((a, b) => a - b) ) // [ '1', '35', '41', '81', '102', '1004' ]

//clone array first if you want it to be indenpendant of the original
const sortedNums = [...stringNums].sort()
console.log(stringNums) // [ '1', '81', '41', '102', '35', '1004' ]
console.log(sortedNums) // [ '1', '1004', '102', '35', '41', '81' ]


