import { NextRequest, NextResponse } from 'next/server';

/**
 * High-Security Utility Module for Ceylon Vidu Tours
 */

// Simple In-Memory Rate Limiter Store
interface RateLimitRecord {
    count: number;
    resetTime: number;
}

const rateLimitMap = new Map<string, RateLimitRecord>();

// Cleanup stale rate limit entries every 5 minutes
setInterval(() => {
    const now = Date.now();
    for (const [key, record] of rateLimitMap.entries()) {
        if (now > record.resetTime) {
            rateLimitMap.delete(key);
        }
    }
}, 5 * 60 * 1000);

/**
 * Check Rate Limit for an IP address or key
 */
export function checkRateLimit(
    ip: string,
    action: string,
    limit: number = 30,
    windowMs: number = 60 * 1000
): { allowed: boolean; remaining: number; resetInSec: number } {
    const key = `${action}:${ip}`;
    const now = Date.now();
    const record = rateLimitMap.get(key);

    if (!record || now > record.resetTime) {
        rateLimitMap.set(key, {
            count: 1,
            resetTime: now + windowMs,
        });
        return { allowed: true, remaining: limit - 1, resetInSec: Math.ceil(windowMs / 1000) };
    }

    if (record.count >= limit) {
        return {
            allowed: false,
            remaining: 0,
            resetInSec: Math.ceil((record.resetTime - now) / 1000),
        };
    }

    record.count += 1;
    return {
        allowed: true,
        remaining: limit - record.count,
        resetInSec: Math.ceil((record.resetTime - now) / 1000),
    };
}

/**
 * Extract Client IP from Request Headers safely
 */
export function getClientIp(request: NextRequest): string {
    const xForwardedFor = request.headers.get('x-forwarded-for');
    if (xForwardedFor) {
        return xForwardedFor.split(',')[0].trim();
    }
    const realIp = request.headers.get('x-real-ip');
    if (realIp) {
        return realIp.trim();
    }
    return '127.0.0.1';
}

/**
 * Decode HTML entities in strings (e.g. &#x2F; -> /, &amp; -> &)
 */
export function decodeHtmlEntities(str: string): string {
    if (typeof str !== 'string') return '';
    return str
        .replace(/&#x2F;/gi, '/')
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#x27;/g, "'");
}

/**
 * Recursively decode HTML entities in objects/arrays
 */
export function decodeObjectEntities(val: any): any {
    if (typeof val === 'string') {
        return decodeHtmlEntities(val);
    }
    if (Array.isArray(val)) {
        return val.map(decodeObjectEntities);
    }
    if (val !== null && typeof val === 'object') {
        const res: any = {};
        for (const [k, v] of Object.entries(val)) {
            res[k] = decodeObjectEntities(v);
        }
        return res;
    }
    return val;
}

/**
 * Sanitize String Input (XSS & Injection Protection)
 */
export function sanitizeInput(str: string): string {
    if (typeof str !== 'string') return '';
    
    // First unescape any entity-encoded slashes or ampersands in URLs
    const trimmed = decodeHtmlEntities(str.trim());

    // If string is a URL (starts with http:// or https://), preserve slashes and ampersands
    const isUrl = /^https?:\/\//i.test(trimmed);
    if (isUrl) {
        return trimmed
            .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
            .replace(/javascript:/gi, '')
            .replace(/data:/gi, '')
            .replace(/on\w+\s*=\s*["'][^"']*["']/gi, '');
    }

    return trimmed
        // Remove script tags and contents
        .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
        // Remove dangerous event handlers (onerror, onload, onclick, etc.)
        .replace(/on\w+\s*=\s*["'][^"']*["']/gi, '')
        .replace(/javascript:/gi, '')
        .replace(/data:/gi, '')
        // Escape HTML control characters (< and >)
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

/**
 * Sanitize Object Properties recursively
 */
export function sanitizeObject<T>(obj: T): T {
    if (typeof obj === 'string') {
        return sanitizeInput(obj) as unknown as T;
    }
    if (Array.isArray(obj)) {
        return obj.map(item => sanitizeObject(item)) as unknown as T;
    }
    if (obj !== null && typeof obj === 'object') {
        const sanitizedObj: any = {};
        for (const [key, value] of Object.entries(obj)) {
            sanitizedObj[sanitizeInput(key)] = sanitizeObject(value);
        }
        return sanitizedObj as T;
    }
    return obj;
}

/**
 * Validate UUID format (v4)
 */
export function isValidUUID(uuid: string): boolean {
    if (typeof uuid !== 'string') return false;
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return uuidRegex.test(uuid);
}

/**
 * Validate URL Slug format
 */
export function isValidSlug(slug: string): boolean {
    if (typeof slug !== 'string') return false;
    const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
    return slugRegex.test(slug);
}

/**
 * Verify Request Origin / CSRF Protection for state mutation requests
 */
export function verifyRequestOrigin(request: NextRequest): boolean {
    const origin = request.headers.get('origin');
    const host = request.headers.get('host');
    const referer = request.headers.get('referer');

    if (!origin && !referer) {
        // Same-origin browser requests might omit origin for GETs, but state mutations should have origin or referer
        return true;
    }

    if (origin) {
        const originHost = origin.replace(/^https?:\/\//, '');
        if (host && originHost !== host) {
            return false;
        }
    }

    if (referer) {
        const refererHost = referer.replace(/^https?:\/\//, '').split('/')[0];
        if (host && refererHost !== host) {
            return false;
        }
    }

    return true;
}

/**
 * Secure HTTP Headers Helper
 */
export function applySecurityHeaders(response: NextResponse): NextResponse {
    response.headers.set('X-Frame-Options', 'DENY');
    response.headers.set('X-Content-Type-Options', 'nosniff');
    response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
    response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
    response.headers.set('X-XSS-Protection', '1; mode=block');
    return response;
}
