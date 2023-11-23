/*
 * Title : inbox controller for inbox router
 * Description : inbox controller middleware for inbox router
 * Author : Kishor Paroi
 * Date : 2023/11/22
 * Time : 10:37:25 PM
 */

// get Inbox page

function getInbox(req, res, next) {
  res.render("inbox");
  // {
  //   title: "Inbox - Chat Application",
  // };
}

export { getInbox };
