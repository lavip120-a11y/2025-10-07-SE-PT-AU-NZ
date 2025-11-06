console.log( Boolean("") ) // false - empty string
console.log( Boolean(0) ) // false - zero value
console.log( Boolean(null) ) // false - no value
console.log( Boolean(undefined) ) // false - unknown value
console.log( Boolean(NaN) ) // false - not a number
console.log( Boolean("false") ) // true - non-empty string
console.log( Boolean(-1) ) // true - non-zero number

// these all become false, if(""),  if(null),  if(0)

if ("") console.log('empty string is true') // implicit "" conversion to false - won't print msg
if (undefined) console.log('undefined is true') // implicit conversion to false - won't print msg


    