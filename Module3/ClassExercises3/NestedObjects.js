let sales = { //another object
    numberofitems: 10,
    years: 2,
};

let person = { //object
    name : "Bruce", //values
    location: "New Zealand",
    address: {  //this is a string stored like seperate objects (nested), this makes it easier to access
        //nested item copies by reference not by value.  individual items copy by value.
        street: "21 Elliot",
        city: "Auckland", 
        postcode: "0600",
    },
    totalSales: sales,  //created a property which 
};

console.log(person); //print above

//let anotherPerson = { ...person};  //shallow clone syntax
let anotherPerson = JSON.parse(JSON.stringify(person)); //using JSON allows the nested object to be printed by value rather than reference this is deep cloning
person.totalSales.years = 10;
anotherPerson.address.city = "Wellington"; //changes the city 
console.log(anotherPerson);
console.log(person);

