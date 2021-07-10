import multer from 'multer';
import path from 'path';

/**
 * Config
 *      Storage
 */
const storage = multer.diskStorage({
    destination: path.join(__dirname, '../../public/images'),
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

export const imageHandler = multer({ storage }).single('image');