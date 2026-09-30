import { z } from 'zod';

export const registerSchema = z
  .object({
    firstName: z.string().trim().min(2, 'First name must be at least 2 characters').max(100),

    lastName: z.string().trim().min(2, 'Last name must be at least 2 characters').max(100),

    gender: z.enum(['MALE', 'FEMALE', 'OTHER', 'PREFER_NOT_TO_SAY']),

    email: z.string().trim().email('Invalid email address').toLowerCase(),

    phone: z
      .string()
      .trim()
      .regex(/^\+?[1-9]\d{7,14}$/, 'Invalid phone number'),

    password: z
      .string()
      .min(8, 'Password must contain at least 8 characters')
      .regex(/[A-Z]/, 'Password must contain one uppercase letter')
      .regex(/[a-z]/, 'Password must contain one lowercase letter')
      .regex(/[0-9]/, 'Password must contain one number')
      .regex(/[^A-Za-z0-9]/, 'Password must contain one special character'),

    confirmPassword: z.string(),

    country: z.string().trim().min(2).max(100),

    stateProvince: z.string().trim().min(2).max(100),

    profileImage: z.string().url().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords do not match',
  });

export type RegisterInput = z.infer<typeof registerSchema>;
