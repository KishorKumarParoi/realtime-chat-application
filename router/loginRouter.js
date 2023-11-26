/*
 * Title : login Router
 * Description : Login Router with controller
 * Author : Kishor Paroi
 * Date : 2023/11/22
 * Time : 10:14:22 PM
 */

// external imports
import express from "express";
import { getLogin, login, logout } from "../controllers/loginController.js";
import { redirectIfLoggedIn } from "../middlewares/common/checkLogin.js";
import decorateHtmlResponse from "../middlewares/common/decorateHTMLResponse.js";
import {
  doLoginValidationHandler,
  doLoginValidators,
} from "../middlewares/login/loginValidators.js";

const router = express.Router();
const page_title = "Login";

// login page
router.get("/", decorateHtmlResponse(page_title), redirectIfLoggedIn, getLogin);

// process login
router.post(
  "/",
  decorateHtmlResponse(page_title),
  doLoginValidators,
  doLoginValidationHandler,
  login
);

// logout
router.delete("/", logout);

// export router
export default router;
