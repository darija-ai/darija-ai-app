import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors';
import chalk from 'chalk';


dotenv.config()

const config = {
    port: parseInt(process.env.PORT || '3000', 10),
    frontendUrl: process.env.FRONTEND_URL || 'http://localhost:3001',
    nodeEnv: process.env.NODE_ENV || 'development',
};

const app = express();

app.use(
    cors({
        origin: config.frontendUrl,
        credentials: true,
    })
);

app.listen(config.port, () => {
    console.log(chalk.cyan(`🔗 Listening on: http://localhost:${config.port}`));
})