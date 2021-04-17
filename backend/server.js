"use strict";

import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import controllers from "./controllers/index.js";
import helpers from "./helpers/helpers.js";

dotenv.config();

const IP = process.env.APP_IP || "127.0.4.102";
const PORT = process.env.APP_PORT || 54728;

const app = express();
app.use(cors());
app.use(express.json());
app.use(helpers.logger);

 
app.get("/api/user", (req, res, next) => controllers.getUser(req, res));
app.get("/api/islands", (req, res, next) => controllers.getIslands(req, res));
app.get("/api/islandTask", (req, res, next) =>
  controllers.getIslandTask(req, res)
);

app.get("/api/ivents", (req, res, next) => controllers.getIvents(req, res));
app.get("/api/communication", (req, res, next) =>
  controllers.getСommunication(req, res)
);
app.get("/api/questions", (req, res, next) =>
  controllers.getQuestions(req, res)
);

app.post("/api/questionValidate", (req, res, next) =>
  controllers.questionValidate(req, res)
);

app.get("/", (req, res, next) => res.send({ message: "Game API server" }));

app.use("/static", express.static("./public"));
const server = app.listen(PORT);

console.log("Start at  :>> ", PORT);
