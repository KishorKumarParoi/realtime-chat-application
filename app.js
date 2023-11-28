/*
 * Title : Chat Application
 * Description : Realtime Node.Js Chat Application with Websocket.io and Express.Js
 * Author : Kishor Paroi
 * Date : 2023/11/21
 * Time : 9:27:44 PM
 */

// external imports
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import path from "path";
// import http from "http";
// import moment from "moment";

// error handler
import errorHandler from "./middlewares/common/errorHandler.js";
import notFoundHandler from "./middlewares/common/notFoundHandler.js";

// internal imports
import inboxRouter from "./router/inboxRouter.js";
import loginRouter from "./router/loginRouter.js";
import usersRouter from "./router/usersRouter.js";

// App object - module scaffolding
const app = express();
dotenv.config();

// Database connection
mongoose
  .connect(process.env.MONGO_CONNECTION_STRING, {})
  .then(() => console.log("Database connected successfully!"))
  .catch((err) => console.log(err));

// Request Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set view engine
app.set("view engine", "ejs");

// Set Static folder
app.use(express.static(path.join(process.cwd(), "public")));

// Cookie Parser
app.use(cookieParser(process.env.COOKIE_SECRET));

// Routing setup
app.use("/", loginRouter);
app.use("/users", usersRouter);
app.use("/inbox", inboxRouter);

// 404 not found error handler
app.use(notFoundHandler);
// console.log("🚀 ~ file: app.js:50 ~ notFoundHandler:", notFoundHandler);

// default error handler
app.use(errorHandler);
// console.log("🚀 ~ file: app.js:54 ~ errorHandler):", errorHandler);

// Server setup
app.listen(process.env.PORT, () => {
  console.log(process.cwd());
  console.log(`Server is running on port ${process.env.PORT}`);
});
