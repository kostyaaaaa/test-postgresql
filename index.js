const express = require("express");
require("./src/connect");

const initializeRouter = require("./src/routers");
const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());

initializeRouter(app);

app.listen(PORT, () => {
  console.log("listening on port", PORT);
});
