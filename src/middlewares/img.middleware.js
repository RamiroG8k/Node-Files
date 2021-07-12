import multer from 'multer';
import path from 'path';
import { v4 as uuid } from 'uuid';

/**
 * Config
 *      Storage
 */
const storage = multer.diskStorage({
    destination: path.join(__dirname, '../../public/images'),
    filename: (req, file, cb) => {
        cb(null, uuid() + '.webp');
        // cb(null, uuid() + path.extname(file.originalname));
    }
});

export const imageHandler = multer({
    storage,
    fileFilter: (req, file, cb) => {
        const types = /jpeg|jpg|png|gif/;
        const mimetype = types.test(file.mimetype);
        const extension = types.test(path.extname(file.originalname));
        return (mimetype && extension) ?
            cb(null, true) :
            cb('File must be image type (jpeg | jpg | png | gif)');
    }
}).single('image');