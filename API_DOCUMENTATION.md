# YAARI API Documentation

Base URL: `http://localhost:3000`

## Authentication

All endpoints except `/auth/register` and `/auth/login` require authentication.

**Authorization Header:**
```
Authorization: Bearer YOUR_JWT_TOKEN
```

---

## 📋 Auth Endpoints

### 1. Register User

**POST** `/auth/register`

Create a new user account.

**Request Body:**
```json
{
  "email": "user@example.com",
  "username": "username",
  "password": "password123",
  "fullName": "Full Name"
}
```

**Validation:**
- `email`: Valid email format
- `username`: 3-30 characters, alphanumeric + underscore only
- `password`: Minimum 8 characters
- `fullName`: Required, 1-100 characters

**Response:** `201 Created`
```json
{
  "user": {
    "id": "uuid",
    "email": "user@example.com",
    "username": "username",
    "fullName": "Full Name",
    "bio": null,
    "avatarUrl": null,
    "websiteUrl": null,
    "isVerified": false,
    "isPrivate": false,
    "createdAt": "2025-11-03T14:00:00.000Z"
  },
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "sessionId": "1730642400000-abc123def"
}
```

**Errors:**
- `409 Conflict` - Email or username already exists
- `400 Bad Request` - Validation failed

---

### 2. Login

**POST** `/auth/login`

Authenticate and get access token.

**Request Body:**
```json
{
  "emailOrUsername": "username",
  "password": "password123"
}
```

**Response:** `200 OK`
```json
{
  "user": {
    "id": "uuid",
    "email": "user@example.com",
    "username": "username",
    "fullName": "Full Name",
    "bio": null,
    "avatarUrl": null,
    "websiteUrl": null,
    "isVerified": false,
    "isPrivate": false,
    "createdAt": "2025-11-03T14:00:00.000Z"
  },
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "sessionId": "1730642400000-abc123def"
}
```

**Errors:**
- `401 Unauthorized` - Invalid credentials

---

### 3. Get Current User

**GET** `/auth/me`

Get authenticated user's profile.

**Headers:**
```
Authorization: Bearer YOUR_TOKEN
```

**Response:** `200 OK`
```json
{
  "id": "uuid",
  "email": "user@example.com",
  "username": "username",
  "fullName": "Full Name",
  "bio": null,
  "avatarUrl": null,
  "websiteUrl": null,
  "isVerified": false,
  "isPrivate": false,
  "createdAt": "2025-11-03T14:00:00.000Z"
}
```

**Errors:**
- `401 Unauthorized` - Invalid or expired token

---

### 4. Logout

**POST** `/auth/logout`

Invalidate current session or all sessions.

**Headers:**
```
Authorization: Bearer YOUR_TOKEN
```

**Request Body (Optional):**
```json
{
  "sessionId": "1730642400000-abc123def"
}
```

If `sessionId` is provided, only that session is invalidated. Otherwise, all user sessions are invalidated.

**Response:** `200 OK`
```json
{
  "message": "Logged out successfully"
}
```

---

### 5. Refresh Token

**POST** `/auth/refresh`

Get a new access token.

**Headers:**
```
Authorization: Bearer YOUR_TOKEN
```

**Response:** `200 OK`
```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "sessionId": "1730642400000-xyz789ghi"
}
```

---

## 📤 Upload Endpoints

### 1. Upload Image

**POST** `/upload/image`

Upload an image to Cloudinary.

**Headers:**
```
Authorization: Bearer YOUR_TOKEN
Content-Type: multipart/form-data
```

**Request Body:**
- `file`: Image file (jpg, png, gif, webp, etc.)

**Response:** `200 OK`
```json
{
  "url": "https://res.cloudinary.com/djcysdrfv/image/upload/v1730642400/yaari/images/abc123.jpg",
  "publicId": "yaari/images/abc123",
  "width": 1080,
  "height": 1080,
  "format": "jpg"
}
```

---

### 2. Upload Video

**POST** `/upload/video`

Upload a video to Cloudinary.

**Headers:**
```
Authorization: Bearer YOUR_TOKEN
Content-Type: multipart/form-data
```

**Request Body:**
- `file`: Video file (mp4, mov, avi, etc.)

**Response:** `200 OK`
```json
{
  "url": "https://res.cloudinary.com/djcysdrfv/video/upload/v1730642400/yaari/videos/xyz789.mp4",
  "publicId": "yaari/videos/xyz789",
  "width": 1920,
  "height": 1080,
  "duration": 15.5,
  "format": "mp4"
}
```

---

### 3. Upload Multiple Files

**POST** `/upload/multiple`

Upload multiple images/videos (max 10).

**Headers:**
```
Authorization: Bearer YOUR_TOKEN
Content-Type: multipart/form-data
```

**Request Body:**
- `files`: Array of files

**Response:** `200 OK`
```json
[
  {
    "url": "https://res.cloudinary.com/.../image1.jpg",
    "publicId": "yaari/images/image1",
    "width": 1080,
    "height": 1080,
    "format": "jpg"
  },
  {
    "url": "https://res.cloudinary.com/.../video1.mp4",
    "publicId": "yaari/videos/video1",
    "width": 1920,
    "height": 1080,
    "duration": 10.2,
    "format": "mp4"
  }
]
```

---

## 👤 User Endpoints

### 1. Get User Profile

**GET** `/users/:username`

Get a user's public profile.

**Response:** `200 OK`
```json
{
  "id": "uuid",
  "username": "username",
  "fullName": "Full Name",
  "bio": "User bio",
  "avatarUrl": "https://...",
  "websiteUrl": "https://...",
  "isVerified": false,
  "isPrivate": false,
  "followersCount": 100,
  "followingCount": 50,
  "postsCount": 25,
  "isFollowing": false,
  "isFollowedBy": false
}
```

---

### 2. Update Profile

**PATCH** `/users/me`

Update authenticated user's profile.

**Request Body:**
```json
{
  "fullName": "New Name",
  "bio": "My bio",
  "avatarUrl": "https://...",
  "websiteUrl": "https://...",
  "isPrivate": true
}
```

All fields are optional.

**Response:** `200 OK`
```json
{
  "id": "uuid",
  "username": "username",
  "fullName": "New Name",
  "bio": "My bio",
  "avatarUrl": "https://...",
  "websiteUrl": "https://...",
  "isPrivate": true
}
```

---

### 3. Get Followers

**GET** `/users/:username/followers?cursor=&limit=20`

Get user's followers list.

**Query Parameters:**
- `cursor` (optional): Pagination cursor
- `limit` (optional): Results per page (default: 20, max: 100)

**Response:** `200 OK`
```json
{
  "data": [
    {
      "id": "uuid",
      "username": "follower1",
      "fullName": "Follower Name",
      "avatarUrl": "https://...",
      "isVerified": false
    }
  ],
  "nextCursor": "cursor_string",
  "hasMore": true
}
```

---

### 4. Get Following

**GET** `/users/:username/following?cursor=&limit=20`

Get list of users this user follows.

**Response:** Same format as Get Followers

---

### 5. Follow User

**POST** `/users/:username/follow`

Follow a user.

**Response:** `200 OK`
```json
{
  "status": "accepted",
  "message": "Successfully followed user"
}
```

If account is private:
```json
{
  "status": "pending",
  "message": "Follow request sent"
}
```

---

### 6. Unfollow User

**DELETE** `/users/:username/follow`

Unfollow a user.

**Response:** `200 OK`
```json
{
  "message": "Successfully unfollowed user"
}
```

---

## 📸 Post Endpoints

### 1. Get Feed

**GET** `/feed?cursor=&limit=20`

Get home feed with posts from followed users.

**Query Parameters:**
- `cursor` (optional): Pagination cursor
- `limit` (optional): Results per page (default: 20)

**Response:** `200 OK`
```json
{
  "data": [
    {
      "id": "uuid",
      "author": {
        "id": "uuid",
        "username": "username",
        "avatarUrl": "https://...",
        "isVerified": false
      },
      "caption": "Post caption",
      "location": "Location",
      "type": "image",
      "media": [
        {
          "id": "uuid",
          "url": "https://...",
          "thumbnailUrl": "https://...",
          "mediaType": "image",
          "width": 1080,
          "height": 1080
        }
      ],
      "likeCount": 100,
      "commentCount": 25,
      "viewCount": 500,
      "isLiked": false,
      "isSaved": false,
      "createdAt": "2025-11-03T14:00:00.000Z"
    }
  ],
  "nextCursor": "cursor_string",
  "hasMore": true
}
```

---

### 2. Get Post

**GET** `/posts/:id`

Get a single post by ID.

**Response:** `200 OK`
```json
{
  "id": "uuid",
  "author": {
    "id": "uuid",
    "username": "username",
    "avatarUrl": "https://...",
    "isVerified": false
  },
  "caption": "Post caption",
  "location": "Location",
  "type": "image",
  "media": [
    {
      "id": "uuid",
      "url": "https://...",
      "thumbnailUrl": "https://...",
      "mediaType": "image",
      "width": 1080,
      "height": 1080,
      "sortOrder": 0
    }
  ],
  "likeCount": 100,
  "commentCount": 25,
  "viewCount": 500,
  "isLiked": false,
  "isSaved": false,
  "isCommentsDisabled": false,
  "createdAt": "2025-11-03T14:00:00.000Z"
}
```

---

### 3. Create Post

**POST** `/posts`

Create a new post.

**Request Body:**
```json
{
  "caption": "Post caption #hashtag",
  "location": "New York, USA",
  "type": "image",
  "media": [
    {
      "url": "https://res.cloudinary.com/.../image.jpg",
      "thumbnailUrl": "https://...",
      "mediaType": "image",
      "width": 1080,
      "height": 1080,
      "sortOrder": 0
    }
  ],
  "isCommentsDisabled": false
}
```

**Response:** `201 Created`
```json
{
  "id": "uuid",
  "caption": "Post caption #hashtag",
  "location": "New York, USA",
  "type": "image",
  "media": [...],
  "likeCount": 0,
  "commentCount": 0,
  "viewCount": 0,
  "createdAt": "2025-11-03T14:00:00.000Z"
}
```

---

### 4. Delete Post

**DELETE** `/posts/:id`

Delete your own post.

**Response:** `200 OK`
```json
{
  "message": "Post deleted successfully"
}
```

---

### 5. Like Post

**POST** `/posts/:id/like`

Like a post.

**Response:** `200 OK`
```json
{
  "message": "Post liked",
  "likeCount": 101
}
```

---

### 6. Unlike Post

**DELETE** `/posts/:id/like`

Remove like from a post.

**Response:** `200 OK`
```json
{
  "message": "Post unliked",
  "likeCount": 100
}
```

---

### 7. Get Comments

**GET** `/posts/:id/comments?cursor=&limit=20`

Get comments for a post.

**Response:** `200 OK`
```json
{
  "data": [
    {
      "id": "uuid",
      "author": {
        "id": "uuid",
        "username": "username",
        "avatarUrl": "https://..."
      },
      "content": "Great post!",
      "likeCount": 5,
      "isLiked": false,
      "replyCount": 2,
      "createdAt": "2025-11-03T14:00:00.000Z"
    }
  ],
  "nextCursor": "cursor_string",
  "hasMore": true
}
```

---

### 8. Add Comment

**POST** `/posts/:id/comments`

Add a comment to a post.

**Request Body:**
```json
{
  "content": "Great post!",
  "parentCommentId": "uuid"
}
```

`parentCommentId` is optional (for replies).

**Response:** `201 Created`
```json
{
  "id": "uuid",
  "content": "Great post!",
  "likeCount": 0,
  "createdAt": "2025-11-03T14:00:00.000Z"
}
```

---

## 📖 Story Endpoints

### 1. Get Stories Feed

**GET** `/stories/home`

Get stories from followed users.

**Response:** `200 OK`
```json
{
  "data": [
    {
      "userId": "uuid",
      "username": "username",
      "avatarUrl": "https://...",
      "hasUnseenStories": true,
      "stories": [
        {
          "id": "uuid",
          "mediaUrl": "https://...",
          "thumbnailUrl": "https://...",
          "mediaType": "image",
          "caption": "Story caption",
          "isViewed": false,
          "expiresAt": "2025-11-04T14:00:00.000Z",
          "createdAt": "2025-11-03T14:00:00.000Z"
        }
      ]
    }
  ]
}
```

---

### 2. Create Story

**POST** `/stories`

Create a new story (expires in 24 hours).

**Request Body:**
```json
{
  "mediaUrl": "https://res.cloudinary.com/.../story.jpg",
  "thumbnailUrl": "https://...",
  "mediaType": "image",
  "caption": "Story caption"
}
```

**Response:** `201 Created`
```json
{
  "id": "uuid",
  "mediaUrl": "https://...",
  "thumbnailUrl": "https://...",
  "mediaType": "image",
  "caption": "Story caption",
  "expiresAt": "2025-11-04T14:00:00.000Z",
  "createdAt": "2025-11-03T14:00:00.000Z"
}
```

---

### 3. View Story

**POST** `/stories/:id/view`

Mark a story as viewed.

**Response:** `200 OK`
```json
{
  "message": "Story viewed"
}
```

---

## 💬 Message Endpoints

### 1. Get Conversations

**GET** `/conversations?cursor=&limit=20`

Get all conversations for authenticated user.

**Response:** `200 OK`
```json
{
  "data": [
    {
      "id": "uuid",
      "isGroup": false,
      "participants": [
        {
          "id": "uuid",
          "username": "username",
          "avatarUrl": "https://..."
        }
      ],
      "lastMessage": {
        "id": "uuid",
        "type": "text",
        "text": "Hello!",
        "createdAt": "2025-11-03T14:00:00.000Z"
      },
      "unreadCount": 2,
      "lastMessageAt": "2025-11-03T14:00:00.000Z"
    }
  ],
  "nextCursor": "cursor_string",
  "hasMore": true
}
```

---

### 2. Create Conversation

**POST** `/conversations`

Create a new conversation.

**Request Body:**
```json
{
  "participantIds": ["uuid1", "uuid2"],
  "isGroup": false
}
```

**Response:** `201 Created`
```json
{
  "id": "uuid",
  "isGroup": false,
  "participants": [...],
  "createdAt": "2025-11-03T14:00:00.000Z"
}
```

---

### 3. Get Messages

**GET** `/conversations/:id/messages?cursor=&limit=50`

Get messages in a conversation.

**Response:** `200 OK`
```json
{
  "data": [
    {
      "id": "uuid",
      "sender": {
        "id": "uuid",
        "username": "username",
        "avatarUrl": "https://..."
      },
      "type": "text",
      "text": "Hello!",
      "mediaUrl": null,
      "postId": null,
      "createdAt": "2025-11-03T14:00:00.000Z"
    }
  ],
  "nextCursor": "cursor_string",
  "hasMore": true
}
```

---

### 4. Send Message

**POST** `/conversations/:id/messages`

Send a message in a conversation.

**Request Body:**
```json
{
  "type": "text",
  "text": "Hello!"
}
```

For media:
```json
{
  "type": "image",
  "mediaUrl": "https://..."
}
```

For sharing a post:
```json
{
  "type": "post",
  "postId": "uuid"
}
```

**Response:** `201 Created`
```json
{
  "id": "uuid",
  "type": "text",
  "text": "Hello!",
  "createdAt": "2025-11-03T14:00:00.000Z"
}
```

---

## 🔔 Notification Endpoints

### 1. Get Notifications

**GET** `/notifications?unread=true&cursor=&limit=20`

Get notifications for authenticated user.

**Query Parameters:**
- `unread` (optional): Filter unread only (true/false)
- `cursor` (optional): Pagination cursor
- `limit` (optional): Results per page

**Response:** `200 OK`
```json
{
  "data": [
    {
      "id": "uuid",
      "kind": "like",
      "actor": {
        "id": "uuid",
        "username": "username",
        "avatarUrl": "https://..."
      },
      "post": {
        "id": "uuid",
        "thumbnailUrl": "https://..."
      },
      "isRead": false,
      "createdAt": "2025-11-03T14:00:00.000Z"
    }
  ],
  "nextCursor": "cursor_string",
  "hasMore": true
}
```

**Notification Types:**
- `like` - Someone liked your post
- `comment` - Someone commented on your post
- `follow` - Someone followed you
- `message` - New message
- `mention` - Someone mentioned you

---

### 2. Mark as Read

**POST** `/notifications/:id/read`

Mark a notification as read.

**Response:** `200 OK`
```json
{
  "message": "Notification marked as read"
}
```

---

## 🔍 Search Endpoint

### 1. Search

**GET** `/search?q=query&type=all&limit=20`

Search for users, hashtags, and posts.

**Query Parameters:**
- `q` (required): Search query
- `type` (optional): Filter by type (all, users, hashtags, posts)
- `limit` (optional): Results per page

**Response:** `200 OK`
```json
{
  "users": [
    {
      "id": "uuid",
      "username": "username",
      "fullName": "Full Name",
      "avatarUrl": "https://...",
      "isVerified": false
    }
  ],
  "hashtags": [
    {
      "tag": "travel",
      "postCount": 1500
    }
  ],
  "posts": [
    {
      "id": "uuid",
      "thumbnailUrl": "https://...",
      "likeCount": 100
    }
  ]
}
```

---

## Error Responses

All endpoints return errors in this format:

```json
{
  "statusCode": 400,
  "message": "Error message",
  "timestamp": "2025-11-03T14:00:00.000Z"
}
```

**Common Status Codes:**
- `400 Bad Request` - Invalid input
- `401 Unauthorized` - Missing or invalid token
- `403 Forbidden` - No permission
- `404 Not Found` - Resource not found
- `409 Conflict` - Resource already exists
- `429 Too Many Requests` - Rate limit exceeded
- `500 Internal Server Error` - Server error

---

## Rate Limiting

- **Limit:** 100 requests per minute per IP
- **Header:** `X-RateLimit-Remaining` shows remaining requests

When rate limit is exceeded:
```json
{
  "statusCode": 429,
  "message": "Too many requests"
}
```

---

## Testing with Postman

1. Import `docs/postman/Yaari.postman_collection.json`
2. Import `docs/postman/Yaari.postman_environment.json`
3. Register a user
4. Login and copy the `accessToken`
5. Set the `token` variable in Postman environment
6. Test other endpoints

---

## Testing with cURL

### Register
```bash
curl -X POST http://localhost:3000/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@test.com","username":"testuser","password":"password123","fullName":"Test User"}'
```

### Login
```bash
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"emailOrUsername":"testuser","password":"password123"}'
```

### Get Profile (replace TOKEN)
```bash
curl http://localhost:3000/auth/me \
  -H "Authorization: Bearer YOUR_TOKEN"
```

### Upload Image (replace TOKEN and path)
```bash
curl -X POST http://localhost:3000/upload/image \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -F "file=@/path/to/image.jpg"
```

---

## WebSocket Support (Coming Soon)

Real-time features will use WebSocket:
- Live notifications
- Typing indicators
- Online status
- Message delivery status

---

## Notes

- All timestamps are in ISO 8601 format (UTC)
- All IDs are UUIDs
- Pagination uses cursor-based pagination
- Media URLs are from Cloudinary CDN
- JWT tokens expire in 7 days
- Sessions are stored in Redis for fast validation
