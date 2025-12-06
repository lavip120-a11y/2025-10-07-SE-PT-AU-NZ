function Product(name, price) {
this.name = name;
this.price = price;
this.salePrice = price * .9; // 10% off
}

function Food(name, price) {
Product.call(this, name, price); // inherits from Product with custom context
this.category = 'food';
}

function Electronics(name, price) {
    Product.call(this, name, price);
    this.toaster = "toaster";
}
const cheese = new Food('cheese', 5);
console.log(`${cheese.name} is a ${cheese.category} and costs $${cheese.price} ($${cheese.salePrice} on sale)`);
const toaster1 = new Electronics("New Toaster", 50)
console.log(`${toaster1.name} is a ${toaster1.toaster} and costs $${toaster1.price} ($${toaster1.salePrice} on sale)`);