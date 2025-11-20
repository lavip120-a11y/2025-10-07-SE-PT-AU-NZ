const [jcFirst, jcLast, ...jcTitles] = ['Julius', 'Caesar', 'Consul', 'of the', 'Roman', 'Republic']
 console.log( jcTitles ) // [ 'Consul', 'of the', 'Roman', 'Republic' ]
 console.log( jcTitles.length ) // 4


 //object
 let component = { title: "My Component" };

 function processTitle({ title, width = 100, height = 50 }) {} //default will only be used if no value assigned
 processTitle(component);
 processTitle({ title: "Second Component", height: 450, width: 460 }); //you can also pass like this,

// assign default values to missing property
 let { width = 200, height = 200, title } = { title: "My Component" };
 console.log(width, height, title); // 200 100 My Component

 let student = 'James', teacher = 'Andrew';
[student, teacher] = [teacher, student]

console.log(student) // Andrew
console.log(teacher) // James


//smart function parameters
function displayComponent({height = 200, width = 100, title}) {
console.log(`<div style="width:${width}px; height:${height}px"><h2>${title}</h2></div>`)
}

displayComponent({width:200, title:'My Awesome Component'})
displayComponent({title:'My Amazing Component'})
displayComponent({width:300, height:300, title:'My Average Component'})

//Destructuring Object using rest pattern
let options = { width: 200, height: 100, title1: 'My Component' }
let { title1, ...rest } = options
console.log(title1) // My Component
console.log(rest) // { width: 200, height: 100 }