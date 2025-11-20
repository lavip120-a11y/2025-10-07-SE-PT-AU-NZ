//Displaying Dates properly

const christmas = new Date('2023-12-25') // assumes UTC timezone if time not included
 console.log( christmas.toLocaleDateString() ) // 25/12/2023 - dd/mm/yyyy if in Australia/NZ
 console.log( christmas.toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' }) ) 
// 2023. 12. 25. 오전 9:00:00 - both timezone and language are converted to Korean
 const nyeLocal = new Date('2023-12-31 23:59:59') // assumes local timezone if time is included
 console.log( nyeLocal.toLocaleString() ) // 31/12/2023, 11:59:59 pm - default to local Time