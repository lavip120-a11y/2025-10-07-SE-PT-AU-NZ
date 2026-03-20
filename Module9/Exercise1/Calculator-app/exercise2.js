console.log("here goes a calculator app");

const app = require('./app'); //importing the app module
const cors = require("cors"); //import cors
const swaggerUi = require('swagger-ui-express'); //import swagger-ui-express
const swaggerDocument = require('./swagger.json'); //import swagger.json file
const port = 3007 //set the port number

app.use(cors()); //tell express to use cors to resolve cors blocking policy

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument)); //serve the swagger documentation
app.listen(port, () => { //listen function activates the web server and if successful prints the message to console.
console.log(`Listening at http://localhost:${port}`)
});







