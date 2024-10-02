const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const cors = require("cors");
const app = express();
app.use(bodyParser.json());
app.use(cors());

const vertexAIEndpoint = "https://your-vertex-ai-endpoint";

app.post("/chat", async (req, res) => {
  const { message } = req.body;

  try {
    const response = await axios.post(vertexAIEndpoint, {
      message: message,
    });
    res.json({ answer: response.data.answer });
  } catch (error) {
    console.error("Error contacting Vertex AI:", error.message);
    res.status(500).json("Error");
  }
});

app.listen(3001, () => {
  console.log("Backend running on port 3001");
});
