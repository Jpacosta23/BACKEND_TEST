const controllerApi = require("./src/api/controller");
// const contacts=require('./api/persons/phoneList');

const myfuntion = (app) => {
  app.use("/api/data", controllerApi);
  // app.use(contacts);
};

module.exports = myfuntion;
