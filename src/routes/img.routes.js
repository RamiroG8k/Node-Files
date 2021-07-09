import { Router } from 'express';
import { imageHandler } from '../middlewares';

const router = Router();

router.post('/', imageHandler, (req, res) => {
    console.log('FILE', req.file);
    console.log('ELSE', req);
    res.send('UPLOADED')
});

export default router;
