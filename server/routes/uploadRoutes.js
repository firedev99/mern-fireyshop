import express from 'express';
import { upload } from "../config/multer.js";
import { singleUpload, multipleUpload } from "../controllers/uploadControllers.js";
const router = express.Router();


router.post('/main-image', upload.single('singleImageSrc'), singleUpload);
router.post('/side-images', upload.array('imageSrc'), multipleUpload);

export default router