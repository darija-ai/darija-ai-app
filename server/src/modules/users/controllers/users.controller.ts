import { Request, Response } from 'express';
import usersService from '../services/users.service';

class UsersController {
    getCurrentUser = async (req: Request, res: Response) => {
        try {
            const userId = (req as any).user.userId;
            const user = await usersService.getCurrentUser(userId);
            
            res.status(200).json({
                message: 'Getting current user successfully',
                success: true,
                data: user
            });
        } catch (error) {
            console.error(
                `Get current user error: ${error instanceof Error ? error.message : 'Unknown error'
                }`
            );
            res.status(500).json({ 
                message: 'Internal server error during getting current user',
                success: false 
            });
        }
    };

    getUserById = async (req: Request, res: Response) => {
        try {
            const { userId } = req.params;
            const user = await usersService.getUserById(userId);
            
            if (!user) {
                res.status(404).json({
                    message: 'User not found',
                    success: false
                });
                return;
            }

            res.status(200).json({
                message: 'User retrieved successfully',
                success: true,
                data: user
            });
        } catch (error) {
            console.error(
                `Get user by ID error: ${error instanceof Error ? error.message : 'Unknown error'
                }`
            );
            res.status(500).json({ 
                message: 'Internal server error during getting user',
                success: false 
            });
        }
    };

    updateUserProfile = async (req: Request, res: Response) => {
        try {
            const userId = (req as any).user.userId;
            const updateData = req.body;
            
            const updatedUser = await usersService.updateUserProfile(userId, updateData);
            
            res.status(200).json({
                message: 'User profile updated successfully',
                success: true,
                data: updatedUser
            });
        } catch (error) {
            console.error(
                `Update user profile error: ${error instanceof Error ? error.message : 'Unknown error'
                }`
            );
            res.status(500).json({ 
                message: 'Internal server error during updating user profile',
                success: false 
            });
        }
    };
}

export default new UsersController();