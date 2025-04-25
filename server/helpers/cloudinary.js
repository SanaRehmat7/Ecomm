// import cloudinary from ("cloudinary").v2;
import { v2 as cloudinary } from "cloudinary";

import multer from "multer";

cloudinary.config({
  cloud_name: "dwwdcabuq",
  api_key: "718124835758232",
  api_secret: "yL8G-JonmndG",
});

const storage = new multer.memoryStorage();

async function imageUploadUtil(file) {
  const result = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });

  return result;
}

const upload = multer({ storage });

export { upload, imageUploadUtil };