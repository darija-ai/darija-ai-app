"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = __importDefault(require("../controllers/auth.controller"));
const auth_middleware_1 = require("../middlewares/auth.middleware");
const authRouter = (0, express_1.Router)();
authRouter.post('/signup', auth_controller_1.default.signup);
authRouter.post('/login', auth_controller_1.default.login);
authRouter.post('/logout', auth_controller_1.default.logout);
authRouter.get('/me', auth_middleware_1.requireAuth, auth_controller_1.default.getCurrentUser);
exports.default = authRouter;
