/*
 * Title : upload middleware
 * Description : Avatar upload middleware for multer
 * Author : Kishor Paroi
 * Date : 2023/11/23
 * Time : 4:47:19 PM
 */

import uploader from "../../utilities/singleUploader.js";

function avatarUpload(req, res, next) {
  console.log(uploader);

  const upload = uploader(
    "avatars",
    ["image/jpeg", "image/jpg", "image/png"],
    1000000,
    "Only .jpeg, .jpg or .png format is allowed!"
  );

  // call the middleware function
  upload.any()(req, res, (err) => {
    if (err) {
      res.status(500).json({
        errors: {
          avatar: {
            msg: err.message,
          },
        },
      });
    } else {
      next();
    }
  });
}

export default avatarUpload;
