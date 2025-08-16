"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginSchema = exports.SignupSchema = void 0;
const zod_1 = require("zod");
exports.SignupSchema = zod_1.z.object({
    username: zod_1.z
        .string()
        .min(4, { message: 'Username must be at least 4 characters long' })
        .max(32, { message: 'Username must be less than 32 characters' })
        .regex(/^[a-zA-Z0-9_]+$/, {
        message: 'Username can only contain letters, numbers, and underscores',
    }),
    password: zod_1.z
        .string()
        .min(8, { message: 'Password must be at least 8 characters long' })
        .regex(/[A-Z]/, {
        message: 'Password must contain at least one uppercase letter',
    })
        .regex(/[a-z]/, {
        message: 'Password must contain at least one lowercase letter',
    })
        .regex(/\d/, { message: 'Password must contain at least one number' }),
    email: zod_1.z
        .string()
        .email({ message: 'Please provide a valid email address' })
        .optional(),
});
exports.LoginSchema = zod_1.z.object({
    username: zod_1.z.string().min(1, { message: 'Username is required' }),
    password: zod_1.z.string().min(1, { message: 'Password is required' }),
});
