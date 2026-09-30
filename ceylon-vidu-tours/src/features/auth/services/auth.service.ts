import { User } from '@prisma/client';

import { hashPassword } from '@/lib/auth';
import { comparePassword } from '@/lib/auth';
import { verifyRefreshToken, generateAccessToken, generateRefreshToken } from '@/lib/jwt';

import {
  createUser,
  createRefreshToken,
  deleteRefreshToken,
  findUserByEmail,
  findUserById,
  findUserByPhone,
  findRefreshToken,
} from '../repositories/auth.repository';

import { RefreshTokenInput } from '../validators/refresh-token.schema';

import { RegisterInput } from '../validators/register.schema';
import { LoginInput } from '../validators/login.schema';
import { LogoutInput } from '../validators/logout.schema';

export async function registerUser(data: RegisterInput): Promise<Omit<User, 'password'>> {
  const existingEmail = await findUserByEmail(data.email);

  if (existingEmail) {
    throw new Error('Email already exists.');
  }

  const existingPhone = await findUserByPhone(data.phone);

  if (existingPhone) {
    throw new Error('Phone number already exists.');
  }

  const hashedPassword = await hashPassword(data.password);

  const user = await createUser({
    firstName: data.firstName,
    lastName: data.lastName,
    gender: data.gender,
    email: data.email,
    phone: data.phone,
    password: hashedPassword,
    country: data.country,
    stateProvince: data.stateProvince,
    profileImage: data.profileImage,
  });

  // Remove password before returning
  const { password, ...safeUser } = user;

  return safeUser;
}

export async function loginUser(data: LoginInput) {
  const user = await findUserByEmail(data.email);

  if (!user) {
    throw new Error('Invalid email or password.');
  }

  const isPasswordValid = await comparePassword(data.password, user.password);

  if (!isPasswordValid) {
    throw new Error('Invalid email or password.');
  }

  const accessToken = generateAccessToken({
    userId: user.id,
    email: user.email,
    role: user.role,
  });

  const refreshToken = generateRefreshToken({
    userId: user.id,
  });

  const refreshTokenExpiry = new Date();
  refreshTokenExpiry.setDate(refreshTokenExpiry.getDate() + 7);

  await createRefreshToken(user.id, refreshToken, refreshTokenExpiry);

  const { password: _password, ...safeUser } = user;

  return {
    user: safeUser,
    accessToken,
    refreshToken,
  };
}

export async function getCurrentUser(userId: string) {
  const user = await findUserById(userId);

  if (!user) {
    throw new Error('User not found.');
  }

  const { password: _password, ...safeUser } = user;

  return safeUser;
}

export async function refreshAccessToken(data: RefreshTokenInput) {
  const storedToken = await findRefreshToken(data.refreshToken);

  if (!storedToken) {
    throw new Error('Invalid refresh token.');
  }

  if (storedToken.expiresAt < new Date()) {
    throw new Error('Refresh token expired.');
  }

  const payload = verifyRefreshToken(data.refreshToken);

  const user = await findUserById(payload.userId as string);

  if (!user) {
    throw new Error('User not found.');
  }

  const accessToken = generateAccessToken({
    userId: user.id,
    email: user.email,
    role: user.role,
  });

  // Remove password before returning
  const { password: _password, ...safeUser } = user;

  return {
    accessToken,
    user: safeUser,
  };
}

export async function logoutUser(data: LogoutInput) {
  const storedToken = await findRefreshToken(data.refreshToken);

  if (!storedToken) {
    throw new Error('Invalid refresh token.');
  }

  await deleteRefreshToken(data.refreshToken);

  return {
    message: 'Logout successful.',
  };
}