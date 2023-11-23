/*
 * Title : inbox router
 * Description : inbox router for sending and receiving messages
 * Author : Kishor Paroi
 * Date : 2023/11/22
 * Time : 10:35:07 PM
 */

// external imports
import express from "express";
import { getInbox } from "../controllers/inboxController.js";
import decorateHtmlResponse from "../middlewares/common/decorateHTMLResponse.js";

const router = express.Router();

// Inbox page
router.get("/", decorateHtmlResponse("Inbox"), getInbox);

// export router
export default router;
