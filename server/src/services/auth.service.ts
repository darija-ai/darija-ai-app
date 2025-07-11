import { PrismaClient, User, UserRole } from '@prisma/client';
import jwt, { SignOptions } from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';
import { Secret } from 'jsonwebtoken';
import { PasswordUtils } from '../utils/passwordUtils';

const JWT_SECRET = process.env.JWT_SECRET;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;

export interface SignupDto {
  username: string;
  password: string;
  email?: string;
}

export interface LoginDto {
  email: string;
  password: string;
}

class AuthService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async signup(data: SignupDto): Promise<{ user: any; token: string }> {
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

    const passwordHash = await PasswordUtils.hashPassword(password);

    const role = email === ADMIN_EMAIL ? UserRole.ADMIN : UserRole.ANNOTATOR;

    const result = await this.prisma.$transaction(async prisma => {
      const user = await prisma.user.create({
        data: {
          userId: uuidv4(),
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

  async login(data: LoginDto): Promise<{ user: any; token: string }> {
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

    const isPasswordValid = await PasswordUtils.verifyPassword(
      password,
      user.passwordHash
    );

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

  validateToken(token: string): any {
    try {
      return jwt.verify(token, String(JWT_SECRET));
    } catch (error) {
      throw new Error('Invalid token');
    }
  }

  private generateToken(user: User): string {
    const payload = {
      userId: user.userId,
      username: user.username,
      email: user.email,
      role: user.role,
    };

    const options: SignOptions = {
      expiresIn:'24h', //ikram-learn
    };

    return jwt.sign(payload, JWT_SECRET as Secret, options);
  }
}

export default new AuthService();