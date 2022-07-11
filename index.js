const express = require("express");
const cors = require("cors");
require("./db/db");
require("dotenv").config();
const bodyParser = require("body-parser");
const router = express.Router();

const Port = process.env.PORT;
const app = express();

const userController = require("./controller/user.controller");
const dataController = require("./controller/data.controller");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/* CORS configuration */
app.use(cors());

// Adding prefix to all routes
app.use("/", router);

/* List of Routes */
router.get("/", async (req, res) => {
  res.json({
    views: "/views",
  });
});
router.post("/login", cors(), async (req, res) => {
  await userController.loginUser(req, res);
});
router.post("/register", cors(), async (req, res) => {
  await userController.registerUser(req, res);
});
router.post("/data", cors(), async (req, res) => {
  await dataController.postData(req, res);
});
router.put("/data", cors(), async (req, res) => {
  await dataController.getData(req, res);
});

/* Server start */
app.listen(Port, console.log(Port));
