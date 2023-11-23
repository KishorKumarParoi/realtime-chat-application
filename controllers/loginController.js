/*
 * Title : login controller
 * Description : login controller for login router
 * Author : Kishor Paroi
 * Date : 2023/11/22
 * Time : 10:16:21 PM
 */

// get login page

function getLogin(req, res, next) {
  res.render("index");
  // {
  //   title: "Login - Chat Application",
  // });
}

export { getLogin };
