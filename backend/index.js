const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5000;
const app = express();
require("dotenv").config();

app.use(cors());
app.listen(port, () => {
  console.log(`listening at ${port}`);
});

app.get("https://comment-api-vufj.onrender.com/", async (req, res) => {
  try {
    const response = await fetch(process.env.FETCH_URL);
    if (response.ok) {
      const data = await response.json();
      res.json({
        status: "success",
        body: data,
      });
    } else {
      res.json({
        status: "failure",
        body: null,
        error: "Failed to fetch data from OpenWeatherMap API",
      });
    }
  } catch (error) {
    res.json({
      status: 500,
      body: null,
      error: error.message,
    });
  }
});
