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

## API Endpoints

### Authentication (`/auth`)
- `POST /auth/register` - Register new user
- `POST /auth/login` - Login user
- `POST /auth/logout` - Logout user
- `GET /auth/me` - Get current user

### Users (`/users`)
- `GET /users/:username` - Get user profile
- `PATCH /users/me` - Update profile
- `GET /users/:username/followers` - Get followers
- `GET /users/:username/following` - Get following
- `POST /users/:username/follow` - Follow user
- `DELETE /users/:username/follow` - Unfollow user

### Posts (`/posts`)
- `GET /feed` - Get home feed
- `GET /posts/:id` - Get post details
- `POST /posts` - Create post
- `DELETE /posts/:id` - Delete post
- `POST /posts/:id/like` - Like post
- `DELETE /posts/:id/like` - Unlike post
- `GET /posts/:id/comments` - Get comments
- `POST /posts/:id/comments` - Add comment

### Stories (`/stories`)
- `GET /stories/home` - Get stories feed
- `POST /stories` - Create story
- `POST /stories/:id/view` - Mark story as viewed

### Messages (`/messages`)
- `GET /conversations` - Get all conversations
- `POST /conversations` - Create conversation
- `GET /conversations/:id/messages` - Get messages
- `POST /conversations/:id/messages` - Send message

### Notifications (`/notifications`)
- `GET /notifications` - Get notifications
- `POST /notifications/:id/read` - Mark as read

### Search (`/search`)
- `GET /search?q=query` - Search users, hashtags, posts

## Database Schema

The Prisma schema includes:
- Users (with auth, profiles)
- Posts (with media, carousel support)
- Comments (with nested replies)
- Likes (posts, comments)
- Follows (with pending/accepted status)
- Stories (24h expiry)
- Messages (DMs, group chats)
- Notifications
- Collections (saved posts)
- Hashtags

## Features

✅ Secure authentication (JWT + Redis sessions)
✅ User profiles with privacy settings
✅ Posts with multiple media (images/videos)
✅ Comments with nested replies
✅ Likes on posts and comments
✅ Follow system (public/private accounts)
✅ Stories with 24h expiry
✅ Direct messaging
✅ Real-time notifications
✅ Hashtag system
✅ Search functionality
✅ Collections (saved posts)
✅ Rate limiting
✅ Input validation
✅ Error handling
✅ Pagination (cursor-based)
✅ Cloudinary media uploads

## Project Structure

```
yaari-backend/
├── apps/
│   ├── api-gateway/          # Main API Gateway
│   ├── auth-service/          # Authentication
│   ├── user-service/          # User management
│   ├── post-service/          # Posts & comments
│   ├── story-service/         # Stories
│   ├── message-service/       # Messaging
│   ├── notification-service/  # Notifications
│   └── search-service/        # Search
├── libs/
│   ├── common/                # Shared utilities
│   ├── prisma/                # Database client
│   └── redis/                 # Redis client
├── prisma/
│   └── schema.prisma          # Database schema
└── .env                       # Environment variables
```

## Development

### View Database
```bash
npx prisma studio
```

### Reset Database
```bash
npx prisma migrate reset
```

### Generate Migration
```bash
npx prisma migrate dev --name your_migration_name
```

## Production Deployment

1. Set environment variables
2. Run `npm run build`
3. Run `npx prisma migrate deploy`
4. Run `npm run start:prod`

## Notes

- All passwords are hashed with bcrypt
- JWT tokens expire in 7 days
- Sessions are stored in Redis for fast validation
- Media files are uploaded to Cloudinary
- Rate limiting is applied at API Gateway level
- All endpoints (except auth) require authentication
- Cursor-based pagination for infinite scroll
- Soft deletes for important data
