import jwt, { JwtPayload } from 'jsonwebtoken';

import { env } from '@/lib/env';

export interface TokenPayload extends JwtPayload {
  userId: string;
  email: string;
  role: string;
}

/**
 * Generate Access Token
 */
export function generateAccessToken(payload: { userId: string; email: string; role: string }) {
  return jwt.sign(payload, env.JWT_SECRET, {
    expiresIn: env.JWT_EXPIRES_IN as jwt.SignOptions['expiresIn'],
  });
}

/**
 * Verify Access Token
 */
export function verifyAccessToken(token: string): TokenPayload {
  return jwt.verify(token, env.JWT_SECRET) as TokenPayload;
}

/**
 * Generate Refresh Token
 */
export function generateRefreshToken(payload: { userId: string }) {
  return jwt.sign(payload, env.JWT_REFRESH_SECRET, {
    expiresIn: env.JWT_REFRESH_EXPIRES_IN as jwt.SignOptions['expiresIn'],
  });
}

/**
 * Verify Refresh Token
 */
export function verifyRefreshToken(token: string): JwtPayload {
  return jwt.verify(token, env.JWT_REFRESH_SECRET) as JwtPayload;
}
