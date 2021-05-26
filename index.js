const express = require("express");

const cors = require("cors");
const app = express();

const routesConfig = require("./routes");

app.use(express.json());
app.use(cors());

routesConfig(app);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
