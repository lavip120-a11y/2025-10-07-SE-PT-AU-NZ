// Simulate fetching external data, which can be slow
 function fetchExternalData(id) { // define a function with parameter id (fetching external soruce)
 console.log(`Fetching data for ID: ${id}`); // print in the console
 const data = `Data for ID: ${id}`; // Simulated data - creates a variable and stores that data
 return data; //then returns the data
 }
 // Create a Map for caching
 const cache = new Map(); //map is created called cache
 function getCachedData(id) { //create another function - call method getCachedData
 // Check if data is already in the cache
 if (cache.has(id)) { //checks whether cache has id
 return cache.get(id); // if it has that id it return cached value, no expensive lookup, 
 // if not it goes to fetch external data as below
 }
  // If not in cache, fetch "external" data and store in cache for next time
 const data = fetchExternalData(id); //calls fetchExternalData
 cache.set(id, data); //stores data in this map
 return data; //returns data back to caller
 }; // Example usage
 console.log('#1: ' + getCachedData(1)); // First time: fetches "external" data and caches result
 console.log('#2: ' + getCachedData(1)); // Other times: can fetch result from cache, much faster