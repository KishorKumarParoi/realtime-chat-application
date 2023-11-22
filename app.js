/*
 * Title : Chat Application
 * Description : Realtime Node.Js Chat Application with Websocket.io and Express.Js
 * Author : Kishor Paroi
 * Date : 2023/11/21
 * Time : 9:27:44 PM
 */

// Dependencies
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import path from "path";

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

// Routes

// error handler

// Server setup
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
