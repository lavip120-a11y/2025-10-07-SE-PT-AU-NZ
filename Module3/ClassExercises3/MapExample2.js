let customer = { custName: "Smith", location: "Sydney" };

let order = { orderdescription: "Iphone 17", orderDate: "2025-05-17" };

let customerOrderMap = new Map();

customerOrderMap.set(customer, order);
customerOrderMap.get(customer);
console.log(customerOrderMap.get(customer));
