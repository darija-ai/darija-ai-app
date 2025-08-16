"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const uuid_1 = require("uuid");
const passwordUtils_1 = require("../utils/passwordUtils");
const JWT_SECRET = process.env.JWT_SECRET;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
class AuthService {
    prisma;
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    async signup(data) {
        const { username, password, email } = data;
        const existingUsername = await this.prisma.user.findUnique({
            where: { username },
        });
        if (existingUsername) {
            throw new Error('Username already taken');
        }
        if (email) {
            const existingEmail = await this.prisma.user.findUnique({
                where: { email },
            });
            if (existingEmail) {
                throw new Error('Email already registered');
            }
        }
        const passwordHash = await passwordUtils_1.PasswordUtils.hashPassword(password);
        const role = email === ADMIN_EMAIL ? client_1.UserRole.ADMIN : client_1.UserRole.ANNOTATOR;
        const result = await this.prisma.$transaction(async (prisma) => {
            const user = await prisma.user.create({
                data: {
                    userId: (0, uuid_1.v4)(),
                    username,
                    passwordHash,
                    email,
                    role,
                },
            });
            return user;
        });
        const token = this.generateToken(result);
        return {
            user: {
                userId: result.userId,
                username: result.username,
                email: result.email,
                role: result.role,
            },
            token,
        };
    }
    async login(data) {
        const { email, password } = data;
        const user = await this.prisma.user.findUnique({
            where: { email },
        });
        if (!user) {
            throw new Error('Invalid credentials');
        }
        if (!user.isActive) {
            throw new Error('Account is disabled. Please contact support.');
        }
        const isPasswordValid = await passwordUtils_1.PasswordUtils.verifyPassword(password, user.passwordHash);
        if (!isPasswordValid) {
            throw new Error('Invalid credentials');
        }
        const token = this.generateToken(user);
        return {
            user: {
                userId: user.userId,
                username: user.username,
                email: user.email,
                role: user.role,
            },
            token,
        };
    }
    validateToken(token) {
        try {
            return jsonwebtoken_1.default.verify(token, String(JWT_SECRET));
        }
        catch (error) {
            throw new Error('Invalid token');
        }
    }
    generateToken(user) {
        const payload = {
            userId: user.userId,
            username: user.username,
            email: user.email,
            role: user.role,
        };
        const options = {
            expiresIn: '24h', //ikram-learn
        };
        return jsonwebtoken_1.default.sign(payload, JWT_SECRET, options);
    }
}
exports.default = new AuthService();
