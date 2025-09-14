import express from 'express';
import http from 'http';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import chalk from 'chalk';
import apiRouter from './api';

dotenv.config();

const config = {
  port: parseInt(process.env.PORT || '3001', 10),
  frontendUrl: process.env.FRONTEND_URL || process.env.CLIENT_URL || "http://localhost:3000",
  nodeEnv: process.env.NODE_ENV || 'development',
};

const app = express();
const server = http.createServer(app);

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.use('/api', apiRouter);


server.listen(config.port, () => {
  const now = new Date().toLocaleString();
  console.log(chalk.greenBright.bold(`🚀 Server started successfully!`));
  console.log(chalk.blueBright(`📅 Date: ${now}`));
  console.log(chalk.yellow(`🌐 Environment: ${config.nodeEnv}`));
  console.log(chalk.cyan(`🔗 Listening on: http://localhost:${config.port}`));
});