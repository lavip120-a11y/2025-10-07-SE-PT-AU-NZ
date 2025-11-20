//Json format looks like key value pairs, but does to include method as part of the object like javaScript object
const student = { 
 name: 'Sita',
 age: 28,
 courses: ['HTML', 'CSS', 'JS'],
 occupation: null
 }
 //JSON.stringify method is used to convert objects to JSON
 console.log( JSON.stringify(student) ) //let jsonstring = JSON.stringify(student); console.log(jsonstring);
 //{"name":"Sita","age":28,"courses":["HTML","CSS","JS"],"occupation":null - returns double quoted strings

 //JSON is data only language - so some object properties are skipped.
const book = {
 title: "Gone With The Wind",
 printTitle() { // ignored
 console.log(this.title)
 },
 releaseDate: undefined // ignored
 }
 console.log(JSON.stringify(book)) // {"title":"Gone With The Wind"

 