import { z } from 'zod';

export const inquirySchema = z.object({
  name: z.string().trim().min(2, 'Name must be at least 2 characters'),
  email: z.string().trim().email('Invalid email address').toLowerCase(),
  phone: z.string().trim().min(5, 'Invalid phone number').optional().or(z.literal('')),
  message: z.string().trim().min(10, 'Message must be at least 10 characters'),
});

export type InquiryInput = z.infer<typeof inquirySchema>;
