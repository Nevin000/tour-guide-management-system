import { Prisma, User } from '@prisma/client';

import { prisma } from '@/lib/prisma';

export async function findUserByEmail(email: string): Promise<User | null> {
  return prisma.user.findUnique({
    where: { email },
  });
}

export async function findUserByPhone(phone: string): Promise<User | null> {
  return prisma.user.findUnique({
    where: { phone },
  });
}

export async function createUser(data: Prisma.UserCreateInput): Promise<User> {
  return prisma.user.create({
    data,
  });
}

export async function findUserById(id: string): Promise<User | null> {
  return prisma.user.findUnique({
    where: {
      id,
    },
  });
}

/**
 * Create Refresh Token
 */
export async function createRefreshToken(userId: string, token: string, expiresAt: Date) {
  return prisma.refreshToken.create({
    data: {
      userId,
      token,
      expiresAt,
    },
  });
}

/**
 * Find Refresh Token
 */
export async function findRefreshToken(token: string) {
  return prisma.refreshToken.findUnique({
    where: {
      token,
    },
  });
}

/**
 * Delete Refresh Token
 */
export async function deleteRefreshToken(token: string) {
  return prisma.refreshToken.delete({
    where: {
      token,
    },
  });
}

/**
 * Delete All User Refresh Tokens
 */
export async function deleteAllUserRefreshTokens(userId: string) {
  return prisma.refreshToken.deleteMany({
    where: {
      userId,
    },
  });
}
