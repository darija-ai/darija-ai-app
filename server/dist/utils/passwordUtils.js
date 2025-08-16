"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordUtils = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
class PasswordUtils {
    static async hashPassword(password) {
        const salt = await bcryptjs_1.default.genSalt(10);
        return bcryptjs_1.default.hash(password, salt);
    }
    static async verifyPassword(password, hash) {
        return bcryptjs_1.default.compare(password, hash);
    }
}
exports.PasswordUtils = PasswordUtils;
