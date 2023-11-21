/*
 * Title : Chat Application
 * Description : Realtime Node.Js Chat Application with Websocket.io and Express.Js
 * Author : Kishor Paroi
 * Date : 2023/11/21
 * Time : 9:27:44 PM
 */

// Dependencies
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

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
