const express = require('express');
const app = express();
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

/* Settings */
app.set('port', process.env.PORT || 3000);

// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: "1.0.0",
      title: "Clients API",
      description: "Clients age API",
      contact: {
        name: "Sharon H."
      },
      servers: ["http://localhost:3000"]
    }
  },
  apis: ["./src/routes/clients.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/* Middlewares */
app.use(express.json());

/* Routes */
app.use(require('./routes/clients'));

/* Starting the server */
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});