"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_routes_1 = __importDefault(require("./auth.routes"));
const annotation_router_1 = __importDefault(require("./annotation.router"));
const apiRouter = (0, express_1.Router)();
apiRouter.use('/auth', auth_routes_1.default);
apiRouter.use('/annotation', annotation_router_1.default);
exports.default = apiRouter;
