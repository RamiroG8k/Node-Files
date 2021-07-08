// Common Modules
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import { config } from 'dotenv';
import routes from './routes';
import './database';
// Others
import path from 'path';
import multer from 'multer';

/**
 * CONFIG
 * inits app with express,
 * disables x-powered-by header
 * enables custom file to load env vars
 */
const app = express();
app.disable('x-powered-by');
config({ path: __dirname + '/.env' });
// View engine config
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Developer middleware
app.use(morgan('dev'));

// Data as JSON
app.use(express.json());

// Cors
app.use(cors());

// Helmet
app.use(helmet());

// General routes
// app.use('/api', routes);

// Folder Middleware
app.use(multer({
    // dest: 'public/images'
    dest: path.join(__dirname, 'public/images')
}).single('image'));

// Form routes
app.get('/api', (req, res) => {
    res.render('index');
});

app.post('/api/upload', (req, res) => {
    console.log(req.file)
    res.send('uploaded');
});

// Init
app.listen(process.env.PORT, () => {
    console.log('Server listening on Port:', process.env.PORT);
});
