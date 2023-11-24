/*
 * Title : users router
 * Description : users router for login
 * Author : Kishor Paroi
 * Date : 2023/11/22
 * Time : 10:35:46 PM
 */

// external imports
import express from "express";
import { check } from "express-validator";
import { addUser, getUsers } from "../controllers/usersController.js";
import decorateHtmlResponse from "../middlewares/common/decorateHTMLResponse.js";
import avatarUpload from "../middlewares/users/avatarUpload.js";
import {
  addUserValidationHandler,
  addUsersValidator,
} from "../middlewares/users/usersValidator.js";

const router = express.Router();
console.log(check);

// login page
router.get("/", decorateHtmlResponse("Users"), getUsers);

// add user
router.post(
  "/",
  avatarUpload,
  addUsersValidator,
  addUserValidationHandler,
  addUser
);

// export router
export default router;
