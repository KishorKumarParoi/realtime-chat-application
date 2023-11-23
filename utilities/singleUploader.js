/*
 * Title : Single file uploader
 * Description : Single file uploader middleware for multer
 * Author : Kishor Paroi
 * Date : 2023/11/23
 * Time : 9:41:11 PM
 */
// external imports
import createError from "http-errors";
import multer from "multer";
import path from "path";

function uploader(
  subfolder_path,
  allowed_path_types,
  max_file_size,
  error_msg
) {
  // make upload object
  const UPLOADS_FOLDER = `${process.cwd()}/../../public/uploads/${subfolder_path}`;

  // define the storage
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, UPLOADS_FOLDER);
    },
    filename: (req, file, cb) => {
      const fileExt = path.extname(file.originalname);
      const fileName =
        file.originalname.replace(fileExt, "").toLowerCase().split().join("-") +
        "-" +
        Date.now();
      cb(null, fileName + fileExt);
    },
  });

  // final upload object
  const upload = multer({
    storage,
    limits: {
      fileSize: max_file_size,
    },
    fileFilter: (req, file, cb) => {
      if (allowed_path_types.includes(file.mimetype)) {
        cb(null, true);
      } else {
        cb(createError(error_msg));
      }
    },
  });

  return upload;
}

export default uploader;
