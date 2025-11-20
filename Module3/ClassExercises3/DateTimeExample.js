let today = new Date();
console.log(today);
console.log(+ today);

const now = new Date()
 console.log( now ) // 2023-03-26T11:45:59.096Z
 console.log( +now ) // 1679832116638 - number of milliseconds since epoc

const epoch = new Date(0) // 0 milliseconds since Jan 1 1970
 const jan2_1970 = new Date(1000 * 60 * 60 * 24) // a full day in milliseconds after Jan 1
 console.log(epoch) // 1970-01-01T00:00:00.000Z
 console.log(jan2_1970) // 1970-01-02T00:00:00.000Z

 const xmas = new Date("2023-12-25");
 console.log(xmas.getMonth());

 // new Date string
const christmas = new Date('2023-12-25') // assumes UTC timezone if time not included
 console.log(christmas) // 2023-12-25T00:00:00.000Z - Z indicates UTC timezone, GMT+0
 const nyeLocal = new Date('2023-12-31 23:59:59') // assumes local timezone if time is included
 const nyeUTC = new Date('2023-12-31 23:59:59+00:00') // specific timezone specified (UTC)
 console.log(nyeLocal) // 2023-12-31T13:59:59.000Z - stored internally as UTC so now hours are different
 console.log(nyeUTC) // 2023-12-31T23:59:59.000Z - UTC before midnight, no longer local timezon


 //Date and Time Creation.  The month count starts with 0(Jan)
 const boxingDay = new Date(2023, 11, 26) // month 11 is December, assumes local timezone
 console.log(boxingDay) // 2023-12-25T14:00:00.000Z - so hours are different in UTC
 const remembranceDay = new Date( 2023, 10, 11, 11, 11 ) // month 10 is November, assumes local timezone
 console.log(remembranceDay) // 2023-11-11T01:11:00.000Z - so hours are different in UT

 