import path from 'path';
import express from 'express';
import morgan from 'morgan';
import fs from 'fs';

export default async function configureMorgan(app: express.Application) {
    const logDirectory = path.join(__dirname, '../logs');
    fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

    const accessLogStream = fs.createWriteStream(path.join(logDirectory, 'access.log'), {
        flags: 'a',
    });

    app.use(morgan('combined', { stream: accessLogStream }));
}
