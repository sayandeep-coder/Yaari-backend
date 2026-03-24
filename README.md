# YAARI - Instagram-like Backend

Production-ready Instagram-like backend built with NestJS microservices architecture.

## Tech Stack

- **Framework**: NestJS (TypeScript, Node.js)
- **Architecture**: Microservices
- **Database**: PostgreSQL (Neon)
- **Cache**: Redis
- **Media Storage**: Cloudinary
- **ORM**: Prisma

## Microservices

1. **API Gateway** (Port 3000) - Main entry point, rate limiting
2. **Auth Service** (Port 3001) - Authentication, JWT, sessions
3. **User Service** (Port 3002) - Profiles, follows
4. **Post Service** (Port 3003) - Posts, comments, likes
5. **Story Service** (Port 3004) - Stories, views
6. **Message Service** (Port 3005) - DMs, conversations
7. **Notification Service** (Port 3006) - Real-time notifications
8. **Search Service** (Port 3007) - Users, hashtags, posts

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables

The `.env` file is already configured with:
- Neon PostgreSQL database
- Redis Cloud instance
- Cloudinary credentials
- JWT secrets

### 3. Generate Prisma Client

```bash
npx prisma generate
```

### 4. Run Database Migrations

```bash
npx prisma migrate deploy
```

Or create a new migration:

```bash
npx prisma migrate dev --name init
```

### 5. Start Services

**Development (all services):**
```bash
npm run start:dev
```

**Production:**
```bash
npm run build
npm run start:prod
```

....
