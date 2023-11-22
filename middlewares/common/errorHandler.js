/*
 * Title : Error Handler
 * Description : default error handler middleware
 * Author : Kishor Paroi
 * Date : 2023/11/22
 * Time : 4:20:33 PM
 */

// default error handler
function errorHandler(err, req, res, next) {
  res.render("error", {
    title: "Error Page",
  });
}

export default errorHandler;
