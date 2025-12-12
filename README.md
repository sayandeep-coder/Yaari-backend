Yaari — Instagram-like Backend (NestJS monorepo)

Production-ready Instagram-like backend built as a NestJS monorepo with microservices.

Tech stack

Framework: NestJS 10 (TypeScript, Node.js)

Architecture: Microservices

ORM: Prisma 5 (@prisma/client)

Database: PostgreSQL (e.g., Neon)

Auth: JWT + Passport

Cache / queues / rate-limits: Redis (ioredis / node-redis)

Media: Cloudinary

Node: 18+ and npm

High-level repo layout
yaari-backend/
├── apps/
│   ├── api-gateway/          # Main API Gateway
│   ├── auth-service/         # Authentication
│   ├── user-service/         # User management
│   ├── post-service/         # Posts & comments
│   ├── story-service/        # Stories
│   ├── message-service/      # Messaging (DMs)
│   ├── notification-service/ # Notifications (real-time)
│   └── search-service/       # Search (users, hashtags, posts)
├── libs/
│   ├── common/               # Shared utilities, guards, filters
│   ├── prisma/               # Shared Prisma client wrapper
│   └── redis/                # Shared Redis client wrapper
├── prisma/
│   └── schema.prisma         # Prisma schema
└── .env                      # Environment variables (per-app overrides possible)

Microservices & default ports

API Gateway — 3000

Auth Service — 3001

User Service — 3002

Post Service — 3003

Story Service — 3004

Message Service — 3005

Notification Service — 3006

Search Service — 3007

Ports are configurable via per-app .env files — these are defaults used for development.

Features

Secure authentication (JWT + Redis sessions)

User profiles with privacy settings (public / private)

Posts with multiple media (images & videos, carousel support)

Comments with nested replies

Likes (posts & comments)

Follow system (public/private, pending/accepted)

Stories with 24-hour expiry

Direct messages (DMs) and group chats

Real-time notifications

Hashtag system

Search (users, hashtags, posts)

Collections (saved posts)

Rate limiting at API Gateway level

Input validation and centralized error handling

Cursor-based pagination (infinite scroll)

Soft deletes for important resources

Cloudinary for media storage

Prisma as single source of DB schema

Redis for sessions, caching, queues

Requirements

Node.js 18+

npm

A Prisma-supported database (Postgres recommended — Neon example)

Optional: Redis, Cloudinary (configure via env)

Setup

Clone repo and install dependencies (root workspace):

npm install


Create .env at project root and/or per-app .env files. Required environment variables typically include:

DATABASE_URL — PostgreSQL connection string (used by Prisma)

JWT_SECRET, JWT_EXPIRES_IN (e.g., 7d)

REDIS_URL (or host/port)

Cloudinary credentials (if using cloud uploads)

Any service-specific variables (ports, microservice names, etc.)

Generate Prisma client:

npx prisma generate


Create / apply migrations (dev):

npx prisma migrate dev --name init


Or deploy migrations in non-dev environments:

npx prisma migrate deploy


(Optional) Open Prisma Studio:

npx prisma studio

Scripts (commonly available)

npm run start — Start api-gateway (production/local default)

npm run start:dev — Start api-gateway in watch/dev mode

npm run start:debug — Start api-gateway in debug + watch

npm run start:prod — Run compiled api-gateway from dist

npm run start:auth — Start auth-service in watch mode

npm run build — Build api-gateway

npm run prisma:generate — npx prisma generate

npm run prisma:migrate — convenience for migrations (npx prisma migrate ...)

npm run prisma:studio — npx prisma studio

Exact script names may vary per repository; check package.json at root and within apps/* for service-specific scripts.

Development flow

Ensure .env is configured for services you want to run.

Generate Prisma client and run migrations:

npx prisma generate
npx prisma migrate dev --name init


Run services in development (example):

npm run start:dev      # start API gateway in dev/watch
npm run start:auth     # start auth-service
# start other services similarly or use a dev script that starts all

Build & Run (Production)

Build:

npm run build


Apply migrations (deploy):

npx prisma migrate deploy


Start production services:

npm run start:prod


