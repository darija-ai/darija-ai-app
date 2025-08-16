import prisma from '../../../shared/prisma/client';

class UsersService {
  async getCurrentUser(userId: string) {
    return await prisma.user.findUnique({
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
    });
  }

  async getUserById(userId: string) {
    return await prisma.user.findUnique({
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
    });
  }

  async updateUserProfile(userId: string, updateData: any) {
    return await prisma.user.update({
      where: { userId },
      data: updateData,
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
    });
  }
}

export default new UsersService();