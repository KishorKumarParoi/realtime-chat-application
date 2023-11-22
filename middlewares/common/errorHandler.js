/*
 * Title : Error Handler
 * Description : default error handler middleware
 * Author : Kishor Paroi
 * Date : 2023/11/22
 * Time : 4:20:33 PM
 */

// default error handler
function errorHandler(err, req, res, next) {
  //   res.locals.title = "Error Page";
  //   res.render("error");

  res.locals.error =
    process.env.NODE_ENV === "development" ? err : { message: err.message };
  res.status(err.status || 500);

  if (!res.locals.html) {
    // html response
    res.render("error", {
      title: "Error Page",
    });
  } else {
    // json response
    res.json(res.locals.error);
  }
}

export default errorHandler;
