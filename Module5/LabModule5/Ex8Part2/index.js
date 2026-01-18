const express = require('express');
const cors = require("cors");
const swaggerUi = require('swagger-ui-express');

const routes = require('./routes/ex8routes');
const swaggerDocument = require('./swagger.json');

const app = express();
const port = 3008;

// Enable CORS for all routes in this router
app.use(cors());
app.use(express.json());
app.use('/api', routes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/', express.static('public'));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});