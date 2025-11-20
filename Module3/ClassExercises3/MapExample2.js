let customer = { custName: "Smith", location: "Sydney" }; //customer object

let order = { orderdescription: "Iphone 17", orderDate: "2025-05-17" }; //customer order
//define a map
let customerOrderMap = new Map(); // the 2 seperate objects above can be combined in 1 place by using map

customerOrderMap.set(customer, order); //joining together in 1 place
customerOrderMap.get(customer); //what has customer ordered
console.log(customerOrderMap.get(customer));
