/*
 * Title : People Model
 * Description : Model of Login Database
 * Author : Kishor Paroi
 * Date : 2023/11/23
 * Time : 4:31:52 PM
 */

import mongoose from "mongoose";

const peopleSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

const People = new mongoose.model("People", peopleSchema);

export default People;
