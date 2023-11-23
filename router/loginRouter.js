/*
 * Title : login Router
 * Description : Login Router with controller
 * Author : Kishor Paroi
 * Date : 2023/11/22
 * Time : 10:14:22 PM
 */

// external imports
import express from "express";
import { getLogin } from "../controllers/loginController.js";
import decorateHtmlResponse from "../middlewares/common/decorateHTMLResponse.js";

const router = express.Router();

// login page
router.get("/", decorateHtmlResponse("Login"), getLogin);

// export router
export default router;
