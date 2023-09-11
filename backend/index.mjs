import axios from "axios";
import express from "express";
import cors from "cors";
import dotevn from "dotenv";
dotevn.config();

const port = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.listen(port, () => {
  console.log(`listening at ${port}`);
});

app.get("/data", async (req, res) => {
  try {
    const response = await axios.get(process.env.FETCH_URL);
    const data = response.data;
    res.json({
      status: "success",
      body: data,
    });
  } catch (error) {
    res.json({
      status: "failure",
      body: null,
      error: error.message,
    });
  }
});
