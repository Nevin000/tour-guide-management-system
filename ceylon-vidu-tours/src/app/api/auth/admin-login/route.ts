export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { ZodError } from "zod";

import { prisma } from "@/lib/prisma";
import { comparePassword } from "@/lib/auth";
import { generateAccessToken, generateRefreshToken } from "@/lib/jwt";
import { errorResponse, successResponse } from "@/lib/response";

const adminLoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = adminLoginSchema.parse(body);

    // 1. Locate user & verify password
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json(errorResponse("Invalid email or password."), { status: 400 });
    }

    const isPasswordValid = await comparePassword(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json(errorResponse("Invalid email or password."), { status: 400 });
    }

    // STRICT ROLE CONTROL: Ensure only ADMIN permissions can log in here
    if (user.role !== "ADMIN") {
      return NextResponse.json(errorResponse("Access denied. Admin privileges required."), { status: 403 });
    }

    // Generate tokens directly
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

    // Save refresh token to database
    await prisma.refreshToken.create({
      data: {
        userId: user.id,
        token: refreshToken,
        expiresAt: refreshTokenExpiry,
      },
    });

    const { password: _password, ...safeUser } = user;

    const response = NextResponse.json(
      successResponse("Admin Authentication Successful.", {
        user: safeUser,
        accessToken,
      }),
      { status: 200 }
    );

    response.cookies.set({
      name: "adminRefreshToken",
      value: refreshToken,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return response;

  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(errorResponse("Validation failed.", error.flatten()), { status: 400 });
    }

    console.error("Admin Login Error:", error);
    return NextResponse.json(errorResponse("An internal server error occurred."), { status: 500 });
  }
}
