require("dotenv").config();
const mainRouter = require("../starter/routes/main.js");
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

const express = require('express');
const app = express();


//Middleware
app.use(express.static('./public'));
app.use(express.json());

//Main Route
app.use("/api/v1", mainRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

//Port 
const port = process.env.PORT || 3000;

//StartApplication ...
const StartApplication = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

//Invoking it ...
StartApplication();
