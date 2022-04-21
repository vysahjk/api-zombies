import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import { join } from 'path';
const app = express();

app.use(cors());
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ limit: '50MB' }));
app.use(express.static(join(__dirname, 'public')))

import partieRoutes from './partie/partieRoutes';
app.use('/api/partie', partieRoutes);

import playerRoutes from './player/playerRoutes';
app.use('/api/player', playerRoutes)

export default app;