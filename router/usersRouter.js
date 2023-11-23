/*
 * Title : users router
 * Description : users router for login
 * Author : Kishor Paroi
 * Date : 2023/11/22
 * Time : 10:35:46 PM
 */

// external imports
import express from "express";
import { getUsers } from "../controllers/usersController.js";
import decorateHtmlResponse from "../middlewares/common/decorateHTMLResponse.js";

const router = express.Router();

// login page
router.get("/", decorateHtmlResponse("Users"), getUsers);

// export router
export default router;
