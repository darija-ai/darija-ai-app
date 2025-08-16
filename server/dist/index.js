"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const chalk_1 = __importDefault(require("chalk"));
const api_1 = __importDefault(require("./routes/api"));
dotenv_1.default.config();
const config = {
    port: parseInt(process.env.PORT || '3000', 10),
    frontendUrl: process.env.FRONTEND_URL || 'http://localhost:3001',
    nodeEnv: process.env.NODE_ENV || 'development',
};
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
app.use((0, cors_1.default)({
    origin: config.frontendUrl,
    credentials: true,
}));
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
app.use('/api', api_1.default);
server.listen(config.port, () => {
    const now = new Date().toLocaleString();
    console.log(chalk_1.default.greenBright.bold(`🚀 Server started successfully!`));
    console.log(chalk_1.default.blueBright(`📅 Date: ${now}`));
    console.log(chalk_1.default.yellow(`🌐 Environment: ${config.nodeEnv}`));
    console.log(chalk_1.default.cyan(`🔗 Listening on: http://localhost:${config.port}`));
});
