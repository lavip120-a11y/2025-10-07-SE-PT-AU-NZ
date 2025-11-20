//Circular reference is not supported by JSON stringify
const room = { //room object
    number: 23,
 }
 const meetup = { //meetup object
    title: "Strategy Conference",
    participants: ['Chris', 'Tina'],
 };

 meetup.place = room; // meetup references room
 room.occupiedBy = meetup; // room references meetup
 console.log(JSON.stringify(meetup, ["title", "participants"])); //specify the properties that you want in include to avoide the error
 // TypeError: Converting circular structure to JSON it will not convert.
 
 // Use replacer to exclude and transform

console.log( JSON.stringify(meetup, function(key, value) {
 if (key != '' && value == meetup) return undefined // skip references to current object (check if the value is equal to meetup)
 else if (typeof value == 'function') return value.toString() // stringify functions
 return value // otherwise return original value unchanged
 }, 2) ); // use 2 spaces for nicer formatting

//third was to work around it is toJSON