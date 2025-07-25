import { Request, Response } from 'express';
import prisma from '../prisma/client';
import authService from '../services/auth.service';

class AuthController {
    signup = async (req: Request, res: Response): Promise<void> => {
        try {
            const userData = req.body;

            const result = await authService.signup(userData);

            res.status(201).json({
                message: 'User registered successfully',
                user: result.user,
                token: result.token,
            });
        } catch (error) {
            console.error(
                `Registration error: ${error instanceof Error ? error.message : 'Unknown error'
                }`
            );

            if (error instanceof Error && error.message.includes('already')) {
                res.status(409).json({ message: error.message });
                return;
            }

            res
                .status(500)
                .json({ message: 'Internal server error during registration' });
        }
    };

    login = async (req: Request, res: Response): Promise<void> => {
        try {
            const loginData = req.body;

            const result = await authService.login(loginData);

            res.status(200).json({
                message: 'Login successful',
                user: result.user,
                token: result.token,
            });
        } catch (error) {
            console.error(
                `Login error: ${error instanceof Error ? error.message : 'Unknown error'
                }`
            );

            if (error instanceof Error && error.message.includes('credentials')) {
                res.status(401).json({ message: 'Invalid username or password' });
                return;
            }

            if (error instanceof Error && error.message.includes('disabled')) {
                res.status(403).json({ message: error.message });
                return;
            }

            res.status(500).json({ message: 'Internal server error during login' });
        }
    };

    logout = async (req: Request, res: Response): Promise<void> => {
        try {
            res.status(200).json({ message: 'Logout successful' });
        } catch (error) {
            console.error(
                `Logout error: ${error instanceof Error ? error.message : 'Unknown error'
                }`
            );
            res.status(500).json({ message: 'Internal server error during logout' });
        }
    };

    getCurrentUser = async (req: Request, res: Response) => {
        try {
            const userId = (req as any).user.userId;
            const user = await prisma.user.findUnique({
                where: { userId },
                select: {
                    userId: true,
                    username: true,
                    email: true,
                    isActive: true,
                    role: true,
                    minutes: true,
                    words: true,
                    createdAt: true,
                }
            })
            res.status(200).json({
                message: 'Getting current user succesfully',
                success: true,
                data: user
            })
        } catch (error) {
            console.error(
                `Get current user error: ${error instanceof Error ? error.message : 'Unknown error'
                }`
            );
            res.status(500).json({ message: 'Internal server error during getting current user' })
        }
    }

}

export default new AuthController();