/*
 * Title : decorating html file
 * Description : decorating html response and avoiding redundancy
 * Author : Kishor Paroi
 * Date : 2023/11/22
 * Time : 10:46:23 PM
 */

function decorateHtmlResponse(page_title) {
  return function (req, res, next) {
    res.locals.html = true;
    res.locals.title = `${page_title} - ${process.env.APP_NAME}`;
    res.locals.loggedInUser = {};
    res.locals.errors = {};
    res.locals.data = {};
    next();
  };
}

export default decorateHtmlResponse;
