import express from 'express';
import cors from 'cors';
import breedsRouter from './routes/breeds.js';
import { errorHandler } from './middleware/errorHandler.js';

const app = express();
app.use(cors());
app.use('/api/breeds', breedsRouter);
app.use(errorHandler);

export default app;