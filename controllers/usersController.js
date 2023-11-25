/*
 * Title : users controller
 * Description : users controller for users router
 * Author : Kishor Paroi
 * Date : 2023/11/22
 * Time : 10:38:01 PM
 */

// external imports
import bcrypt from "bcrypt";
import { unlink } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// internal imports
import User from "../models/People.js";

// get Users page
async function getUsers(req, res, next) {
  try {
    const users = await User.find({});
    res.render("users", {
      users: users,
    });
  } catch (err) {
    next(err);
  }
}

// add user
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

  // save user and send error
  try {
    const result = await newUser.save();
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

// remove user

async function removeUser(req, res, next) {
  try {
    const user = await User.findByIdAndDelete({
      _id: req.params.id,
    });

    // remove user avatar if any
    if (user.avatar) {
      unlink(
        path.join(`${__dirname}/../public/uploads/avatars/${user.avatar}`),
        (err) => {
          if (err) console.log(err);
        }
      );

      res.status(200).json({
        message: "User was removed successfully!",
      });
    }
  } catch (err) {
    res.status(500).json({
      errors: {
        common: {
          msg: "Could not delete user",
        },
      },
    });
  }
}

export { addUser, getUsers, removeUser };
