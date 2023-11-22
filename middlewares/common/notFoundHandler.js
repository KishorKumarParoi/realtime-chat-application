/*
 * Title : Not Found Error Handler
 * Description : Not Found error handler middleware
 * Author : Kishor Paroi
 * Date : 2023/11/22
 * Time : 4:20:33 PM
 */

// Dependencies
import createError from "http-errors";

// 404 not found handler
function notFoundHandler(req, res, next) {
  next(createError(404, "Your requested content was not found!"));
}

export default notFoundHandler;
