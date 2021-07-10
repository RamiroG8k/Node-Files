import { Router } from 'express';
import { imageHandler } from '../middlewares';

const router = Router();

router.post('/', imageHandler, (req, res) => {
    console.log('FILE', req.file);
    console.log('ELSE', req.body);

    const handler = { 
        name: req.body.name,
        date: new Date(),
        image: {
            filename: req.file.filename,
            path: `http://localhost:3000/images/${req.file.filename}`
        }
    };

    // res.send('UPLOADED')
    res.status(201).json({ 
        code: 201,
        status: 'success',
        message: 'Registered successfully',
        data: handler
    })
});

export default router;
