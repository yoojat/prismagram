import multer from "multer";

const upload = multer({ dest: "uploads/" });
export const uploadMiddleware = upload.single("file");

export const uploadController = (req, res) => {
  // file은 middleware에서 옴
  const { file } = req;
  console.log(file);
  res.end();
};
