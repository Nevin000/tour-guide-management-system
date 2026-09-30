FROM node:22-alpine AS base

# Install dependencies needed on Alpine Linux
RUN apk add --no-cache libc6-compat

WORKDIR /app

# Enable pnpm via Corepack
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
ENV PNPM_CONFIG_ONLY_BUILT_DEPENDENCIES="*"
RUN corepack enable

# --- Stage 1: Dependencies ---
FROM base AS deps
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml* .npmrc* ./
COPY prisma ./prisma/
RUN pnpm install --frozen-lockfile --ignore-scripts

# --- Stage 2: Builder ---
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
ENV DATABASE_URL="postgresql://postgres:postgres@db:5432/ceylon_vidu_tours?schema=public"
ENV JWT_SECRET="dummy_jwt_secret_key_for_docker_build_phase_32chars"
ENV JWT_EXPIRES_IN="7d"
ENV JWT_REFRESH_SECRET="dummy_jwt_refresh_secret_key_for_docker_build_phase_32chars"
ENV JWT_REFRESH_EXPIRES_IN="30d"

# Generate Prisma Client and build Next.js application
RUN pnpm exec prisma generate
RUN pnpm build

# --- Stage 3: Runner ---
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Copy Next.js standalone output & static assets
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Copy Prisma assets and node_modules for runtime migration execution
COPY --from=builder --chown=nextjs:nodejs /app/prisma ./prisma
COPY --from=builder --chown=nextjs:nodejs /app/node_modules ./node_modules

# Copy entrypoint script
COPY --chown=nextjs:nodejs docker-entrypoint.sh ./
RUN chmod +x ./docker-entrypoint.sh

USER nextjs

EXPOSE 3000

ENTRYPOINT ["/app/docker-entrypoint.sh"]
CMD ["node", "server.js"]
