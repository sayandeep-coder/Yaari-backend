export interface JwtPayload {
  sub: string;
  username: string;
  email: string;
}

export interface UserResponse {
  id: string;
  email: string;
  username: string;
  fullName?: string;
  bio?: string;
  avatarUrl?: string;
  websiteUrl?: string;
  isVerified: boolean;
  isPrivate: boolean;
  createdAt: Date;
}
