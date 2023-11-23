/*
 * Title : upload middleware
 * Description : Avatar upload middleware for multer
 * Author : Kishor Paroi
 * Date : 2023/11/23
 * Time : 4:47:19 PM
 */

function avatarUpload(req, res, next) {
  const upload = uploader(
    "avatars",
    ["image/jpeg", "image/jpg", "image/png"],
    1000000,
    "Only .jpeg, .jpg or .png format is allowed!"
  );
}

export default avatarUpload;
