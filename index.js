const express = require("express");
const app = express();

app.get("/home", (req, res) => {
  try {
    return res.json({ page: "home" });
  } catch (error) {
    console.log(error);
  }
});

const port = 3003;
app.listen(port, () => {
  console.log("Server listening at port " + port);
});
