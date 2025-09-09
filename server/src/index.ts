import express from 'express';
import http from 'http';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import chalk from 'chalk';
import apiRouter from './routes/api';

dotenv.config();

const config = {
  port: parseInt(process.env.PORT || '899', 10),
  frontendUrl: process.env.FRONTEND_URL,
  nodeEnv: process.env.NODE_ENV || 'development1',
};

const app = express();
const server = http.createServer(app);

app.use(
  cors({
    origin: config.frontendUrl,
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());

app.use('/api', apiRouter);


server.listen(config.port, () => {
  const now = new Date().toLocaleString();
  console.log(chalk.greenBright.bold(`🚀 Server started successfully!`));
  console.log(chalk.blueBright(`📅 Date: ${now}`));
  console.log(chalk.yellow(`🌐 Environment: ${config.nodeEnv}`));
  console.log(chalk.cyan(`🔗 Listening on: http://localhost:${config.port}`));
});