/*
 * Title : users controller
 * Description : users controller for users router
 * Author : Kishor Paroi
 * Date : 2023/11/22
 * Time : 10:38:01 PM
 */

// get Users page

function getUsers(req, res, next) {
  res.render("users");
  // {
  //   title: "Users - Chat Application",
  // });
}

export { getUsers };
