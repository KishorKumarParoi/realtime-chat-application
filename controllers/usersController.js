/*
 * Title : users controller
 * Description : users controller for users router
 * Author : Kishor Paroi
 * Date : 2023/11/22
 * Time : 10:38:01 PM
 */

// get Users page

import bcrypt from "bcrypt";
import User from "../models/People.js";

function getUsers(req, res, next) {
  res.render("users");
  // {
  //   title: "Users - Chat Application",
  // });
}

// add users
async function addUser(req, res, next) {
  let newUser;
  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  if (req.files.length > 0 && req.files) {
    newUser = new User({
      ...req.body,
      avatar: req.files[0].filename,
      password: hashedPassword,
    });
  } else {
    newUser = new User({
      ...req.body,
      password: hashedPassword,
    });
  }

  // save users and send errors
  try {
    const data = await User.create(newUser);
    res.status(200).json({
      message: "User was added successfully!",
    });
  } catch (err) {
    res.status(500).json({
      errors: {
        common: {
          msg: "Unknown error occured",
        },
      },
    });
  }
}

export { addUser, getUsers };
