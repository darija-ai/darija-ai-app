import { Request, Response, NextFunction } from 'express';
import { PrismaClient, UserRole } from '@prisma/client';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

interface JWTPayload {
  userId: string;
  username: string;
  email?: string;
  role: UserRole;
}

declare global {
  namespace Express {
    interface Request {
      user?: JWTPayload;
    }
  }
}

const prisma = new PrismaClient();

export const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      res.status(401).json({ message: 'Authorization header missing' });
      return;
    }

    const parts = authHeader.split(' ');
    if (parts.length !== 2 || parts[0] !== 'Bearer') {
      res.status(401).json({
        message: 'Invalid authorization format, use "Bearer [token]"',
      });
      return;
    }

    const token = parts[1];//dsds

    try {
      if (!JWT_SECRET) {
        throw new Error('JWT_SECRET is not defined');
      }

      const decoded = jwt.verify(token, JWT_SECRET) as JWTPayload;

      if (!decoded.userId || !decoded.username || !decoded.role) {
        throw new Error('Invalid token payload structure');
      }

      req.user = {
        userId: decoded.userId,
        username: decoded.username,
        email: decoded.email,
        role: decoded.role,
      };

      const user = await prisma.user.findUnique({
        where: { userId: decoded.userId },
        select: { isActive: true },
      });

      if (!user || !user.isActive) {
        res.status(401).json({ message: 'Account is inactive or not found' });
        return;
      }
      console.log("done here")
      next();
    } catch (error) {
      console.warn('Token validation failed:', error);
      res.status(401).json({ message: 'Invalid or expired token' });
      return;
    }
  } catch (error) {
    console.error('Authentication middleware error:', error);
    res
      .status(500)
      .json({ message: 'Internal server error during authentication' });
    return;
  }
};