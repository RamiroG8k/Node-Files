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

export const imageHandler = multer({
    storage,
    fileFilter: (req, file, cb) => {
        const types = /jpeg|jpg|png|gif/;
        const mimetype = types.test(file.mimetype);
        const extension = types.test(path.extname(file.originalname));
        return mimetype && extension ? cb(null, true) : cb('File must be image type (jpeg | jpg | png | gif)')
    }

}).single('image');