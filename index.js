require("dotenv").config();
const { dbConnection } = require("./database/index");

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

function launchServer() {
  const app = express();
  app
    .use(cors())
    .use(morgan("dev"))
    .use(express.json())
    .use("/api", require("./api/routers/index"))
    .listen(process.env.PORT, () =>
      console.log("Server listening on port 3000")
    );
}

async function startApi() {
  await dbConnection();
  launchServer();
}

startApi();
