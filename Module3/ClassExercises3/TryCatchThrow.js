function checkJson(json) { // checks json argument for validity and ensures a name property
try {
const user = JSON.parse(json); // parse string into object
if (!user.name) {
throw new SyntaxError("Incomplete data: no name"); // we can throw our own custom errors
}
return true; // returns true (valid json) if no error was thrown above
} catch (err) {
if (err instanceof SyntaxError) { // once caught, we can do specific things based on error type
console.log( "JSON Error: " + err.message );
} else {
throw err; // rethrow other non-syntax errors; invalid json will still cause a crash
}
finally {
console.log('at the end'); // always prints, even if returning true or throwing an error
// used to complete operations and perform cleanup regardless if we hit errors or not,
// eg. closing db connections, removing interval timers, cancelling event listeners, etc
}
return false; // returns false if any error occurred
}

// let jsonToCheck = { //define an object first
// location: "Australia",
// university: "XYZ university"
// }

// checkJson(JSON.stringify(jsonToCheck));

}