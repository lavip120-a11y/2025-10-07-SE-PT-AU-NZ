let customer = { //1 object, multiple variables becomes {} are used to indicate where the object begins and ends
    name : "Mirza",
    location : "Australia",
    City : "Sydney",
    DOB : "4 November",
};

const tv = { // object starts here
brand: "Sony Bravia", // key-value pair. brand is the key, "Sony Bravia" is the value
size: "55-inch", // values can be any data type
model: 2023, // multiple key-value pairs are separated by commas
resolution: "4K" // the comma on the last key-value pair can be omitted
} // object ends here. All data is stored in tv variable.

console.log(tv.brand); //access data like this or with the []brackets
console.log(tv["model"]);
delete tv.model; //delete keyword
tv.manufacturedate = "2025"; // add new value to the object

console.log(tv);


