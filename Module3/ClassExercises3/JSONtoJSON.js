const room = {
 number: 23, toJSON() { return this.number }, //what ever you write in the return code it will return i.e return "Mirza";
 };
 const meetup = {
 title: "Strategy Conference", participants: ['Chris', 'Tina'],
 };
 meetup.place = room; // meetup references room
 room.occupiedBy = meetup; // room references meetup
 console.log( JSON.stringify(meetup) ); // no more circular references as room stringifies to 23
 // {"title":"Strategy Conference","participants":["Chris","Tina"],"place":23}


 //converts a string back into a object by parsing it
const meetup2 = {
 title: "Strategy Conference", participants: ['Chris', 'Tina'], date: '2023-06-01'
 }
 const meetupString = JSON.stringify(meetup2) // convert object to string
 
 const meetupParsed = JSON.parse(meetupString, (key, value) => { // convert string to object
//reviver function starts at (key, value) above
 if ( !isNaN(Date.parse(value)) ) return new Date(value) // if valid date, create Date object
 return value; //dont convert to date, it will return whatever is there.
 })
 console.log(meetupParsed) // { title, participants: (as above), date: 2023-06-01T00:00:00.000Z 