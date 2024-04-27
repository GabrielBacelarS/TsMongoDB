import express from 'express';
import config from 'config';
import router from './router';
import morgan from 'morgan';
import db from '../config/db';
import configureMorgan from './middlewares/morgan-config';

const app = express();
const port = config.get<number>('port');
app.use(express.json());
app.use(morgan('dev'))
configureMorgan(app);

app.use('/api/', router);

app.listen(port, async () => {
    await db();
    console.log(`Starting on port ${port} localhost:${port}`);
});
