// server/index.js

const path = require("path");
const express = require("express");
const moment = require('moment');
const axios = require("axios");
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 9090;

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(path.resolve(__dirname, "../client/build")));

app.get("/macroapi", (req, res) => {
  res.json({ message: "Hello from the macro app server!" });
});

app.get("/microapi1", async (req, res) => {
  let resp = {data: []};
  try {
    resp = await axios.get('http://0.0.0.0:8000/microapp1/');
  } catch (err) {
    console.error(err)
  }
  res.json(resp.data);
});

app.post("/microapi1", async (req, res) => {
  let resp = {data: []};
  try {
    resp = await axios.post('http://0.0.0.0:8000/microapp1/', req.body);
  } catch (err) {
    console.error(err)
  }
  res.json(resp.data);
});

app.get("/microapi2", async (req, res) => {
  let resp = {data: []};
  try {
    resp = await axios.get('http://0.0.0.0:8000/microapp2/');
  } catch (err) {
    console.error(err)
  }
  res.json(resp.data);
});

app.post("/microapi2", async (req, res) => {
  let resp = {data: []};
  try {
    resp = await axios.post('http://0.0.0.0:8000/microapp2/', req.body);
  } catch (err) {
    console.error(err)
  }
  res.json(resp.data);
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
