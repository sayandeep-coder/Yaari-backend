/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/api-gateway/src/app.module.ts":
/*!********************************************!*\
  !*** ./apps/api-gateway/src/app.module.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const throttler_1 = __webpack_require__(/*! @nestjs/throttler */ "@nestjs/throttler");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const common_2 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const auth_module_1 = __webpack_require__(/*! ./auth/auth.module */ "./apps/api-gateway/src/auth/auth.module.ts");
const user_module_1 = __webpack_require__(/*! ./user/user.module */ "./apps/api-gateway/src/user/user.module.ts");
const post_module_1 = __webpack_require__(/*! ./post/post.module */ "./apps/api-gateway/src/post/post.module.ts");
const story_module_1 = __webpack_require__(/*! ./story/story.module */ "./apps/api-gateway/src/story/story.module.ts");
const message_module_1 = __webpack_require__(/*! ./message/message.module */ "./apps/api-gateway/src/message/message.module.ts");
const notification_module_1 = __webpack_require__(/*! ./notification/notification.module */ "./apps/api-gateway/src/notification/notification.module.ts");
const search_module_1 = __webpack_require__(/*! ./search/search.module */ "./apps/api-gateway/src/search/search.module.ts");
const upload_module_1 = __webpack_require__(/*! ./upload/upload.module */ "./apps/api-gateway/src/upload/upload.module.ts");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            throttler_1.ThrottlerModule.forRoot([
                {
                    ttl: 60000,
                    limit: 100,
                },
            ]),
            microservices_1.ClientsModule.register([
                {
                    name: 'AUTH_SERVICE',
                    transport: microservices_1.Transport.TCP,
                    options: {
                        host: 'localhost',
                        port: parseInt(process.env.AUTH_SERVICE_PORT) || 3001,
                    },
                },
                {
                    name: 'USER_SERVICE',
                    transport: microservices_1.Transport.TCP,
                    options: {
                        host: 'localhost',
                        port: parseInt(process.env.USER_SERVICE_PORT) || 3002,
                    },
                },
                {
                    name: 'POST_SERVICE',
                    transport: microservices_1.Transport.TCP,
                    options: {
                        host: 'localhost',
                        port: parseInt(process.env.POST_SERVICE_PORT) || 3003,
                    },
                },
                {
                    name: 'STORY_SERVICE',
                    transport: microservices_1.Transport.TCP,
                    options: {
                        host: 'localhost',
                        port: parseInt(process.env.STORY_SERVICE_PORT) || 3004,
                    },
                },
                {
                    name: 'MESSAGE_SERVICE',
                    transport: microservices_1.Transport.TCP,
                    options: {
                        host: 'localhost',
                        port: parseInt(process.env.MESSAGE_SERVICE_PORT) || 3005,
                    },
                },
                {
                    name: 'NOTIFICATION_SERVICE',
                    transport: microservices_1.Transport.TCP,
                    options: {
                        host: 'localhost',
                        port: parseInt(process.env.NOTIFICATION_SERVICE_PORT) || 3006,
                    },
                },
                {
                    name: 'SEARCH_SERVICE',
                    transport: microservices_1.Transport.TCP,
                    options: {
                        host: 'localhost',
                        port: parseInt(process.env.SEARCH_SERVICE_PORT) || 3007,
                    },
                },
            ]),
            auth_module_1.AuthModule,
            user_module_1.UserModule,
            post_module_1.PostModule,
            story_module_1.StoryModule,
            message_module_1.MessageModule,
            notification_module_1.NotificationModule,
            search_module_1.SearchModule,
            upload_module_1.UploadModule,
        ],
        providers: [
            {
                provide: core_1.APP_GUARD,
                useClass: throttler_1.ThrottlerGuard,
            },
            {
                provide: core_1.APP_GUARD,
                useClass: common_2.JwtAuthGuard,
            },
        ],
    })
], AppModule);


/***/ }),

/***/ "./apps/api-gateway/src/auth/auth.controller.ts":
/*!******************************************************!*\
  !*** ./apps/api-gateway/src/auth/auth.controller.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const common_2 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const common_3 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
let AuthController = class AuthController {
    constructor(authClient) {
        this.authClient = authClient;
    }
    async register(registerDto) {
        try {
            console.log('Gateway received registration request:', registerDto);
            const result = await (0, rxjs_1.firstValueFrom)(this.authClient.send({ cmd: 'register' }, registerDto));
            console.log('Gateway received response from auth service');
            return result;
        }
        catch (error) {
            console.error('Gateway error during registration:', error);
            if (error && typeof error === 'object' && 'error' in error) {
                const rpcError = error;
                const status = rpcError.error?.statusCode || rpcError.error?.status || 500;
                const message = rpcError.error?.message || rpcError.message || 'Internal server error';
                const HttpException = (__webpack_require__(/*! @nestjs/common */ "@nestjs/common").HttpException);
                throw new HttpException(message, status);
            }
            throw error;
        }
    }
    async login(loginDto) {
        try {
            return await (0, rxjs_1.firstValueFrom)(this.authClient.send({ cmd: 'login' }, loginDto));
        }
        catch (error) {
            if (error && typeof error === 'object' && 'error' in error) {
                const rpcError = error;
                const status = rpcError.error?.statusCode || rpcError.error?.status || 500;
                const message = rpcError.error?.message || rpcError.message || 'Internal server error';
                const HttpException = (__webpack_require__(/*! @nestjs/common */ "@nestjs/common").HttpException);
                throw new HttpException(message, status);
            }
            throw error;
        }
    }
    async logout(user, body) {
        return (0, rxjs_1.firstValueFrom)(this.authClient.send({ cmd: 'logout' }, {
            userId: user.id,
            sessionId: body.sessionId
        }));
    }
    async getMe(user) {
        return (0, rxjs_1.firstValueFrom)(this.authClient.send({ cmd: 'get_me' }, { userId: user.id }));
    }
    async refreshToken(user) {
        return (0, rxjs_1.firstValueFrom)(this.authClient.send({ cmd: 'refresh_token' }, { userId: user.id }));
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_3.Public)(),
    (0, common_1.Post)('register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
__decorate([
    (0, common_3.Public)(),
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('logout'),
    __param(0, (0, common_3.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, common_3.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "getMe", null);
__decorate([
    (0, common_1.Post)('refresh'),
    __param(0, (0, common_3.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "refreshToken", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __param(0, (0, common_2.Inject)('AUTH_SERVICE')),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _a : Object])
], AuthController);


/***/ }),

/***/ "./apps/api-gateway/src/auth/auth.module.ts":
/*!**************************************************!*\
  !*** ./apps/api-gateway/src/auth/auth.module.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const auth_controller_1 = __webpack_require__(/*! ./auth.controller */ "./apps/api-gateway/src/auth/auth.controller.ts");
const jwt_strategy_1 = __webpack_require__(/*! ./jwt.strategy */ "./apps/api-gateway/src/auth/jwt.strategy.ts");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            passport_1.PassportModule,
            jwt_1.JwtModule.register({
                secret: process.env.JWT_SECRET || 'your-super-secret-jwt-key',
                signOptions: {
                    expiresIn: process.env.JWT_EXPIRES_IN || '7d',
                    issuer: process.env.JWT_ISSUER || 'yaari',
                },
            }),
            microservices_1.ClientsModule.register([
                {
                    name: 'AUTH_SERVICE',
                    transport: microservices_1.Transport.TCP,
                    options: {
                        host: 'localhost',
                        port: parseInt(process.env.AUTH_SERVICE_PORT) || 3001,
                    },
                },
            ]),
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [jwt_strategy_1.JwtStrategy],
    })
], AuthModule);


/***/ }),

/***/ "./apps/api-gateway/src/auth/jwt.strategy.ts":
/*!***************************************************!*\
  !*** ./apps/api-gateway/src/auth/jwt.strategy.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtStrategy = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const passport_jwt_1 = __webpack_require__(/*! passport-jwt */ "passport-jwt");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
let JwtStrategy = class JwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy) {
    constructor(configService) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: configService.get('JWT_SECRET'),
        });
        this.configService = configService;
    }
    async validate(payload) {
        if (!payload.sub) {
            throw new common_1.UnauthorizedException();
        }
        return {
            id: payload.sub,
            username: payload.username,
            email: payload.email,
        };
    }
};
exports.JwtStrategy = JwtStrategy;
exports.JwtStrategy = JwtStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], JwtStrategy);


/***/ }),

/***/ "./apps/api-gateway/src/message/message.controller.ts":
/*!************************************************************!*\
  !*** ./apps/api-gateway/src/message/message.controller.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MessageController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const common_2 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
let MessageController = class MessageController {
    constructor(messageClient) {
        this.messageClient = messageClient;
    }
    async getConversations(user, query) {
        return (0, rxjs_1.firstValueFrom)(this.messageClient.send({ cmd: 'get_conversations' }, { userId: user.id, ...query }));
    }
    async createConversation(user, body) {
        return (0, rxjs_1.firstValueFrom)(this.messageClient.send({ cmd: 'create_conversation' }, { userId: user.id, ...body }));
    }
    async getMessages(id, query) {
        return (0, rxjs_1.firstValueFrom)(this.messageClient.send({ cmd: 'get_messages' }, { conversationId: id, ...query }));
    }
    async sendMessage(id, user, body) {
        return (0, rxjs_1.firstValueFrom)(this.messageClient.send({ cmd: 'send_message' }, { conversationId: id, userId: user.id, ...body }));
    }
};
exports.MessageController = MessageController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_2.CurrentUser)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], MessageController.prototype, "getConversations", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_2.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], MessageController.prototype, "createConversation", null);
__decorate([
    (0, common_1.Get)(':id/messages'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], MessageController.prototype, "getMessages", null);
__decorate([
    (0, common_1.Post)(':id/messages'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_2.CurrentUser)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], MessageController.prototype, "sendMessage", null);
exports.MessageController = MessageController = __decorate([
    (0, common_1.Controller)('conversations'),
    __param(0, (0, common_1.Inject)('MESSAGE_SERVICE')),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _a : Object])
], MessageController);


/***/ }),

/***/ "./apps/api-gateway/src/message/message.module.ts":
/*!********************************************************!*\
  !*** ./apps/api-gateway/src/message/message.module.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MessageModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const message_controller_1 = __webpack_require__(/*! ./message.controller */ "./apps/api-gateway/src/message/message.controller.ts");
let MessageModule = class MessageModule {
};
exports.MessageModule = MessageModule;
exports.MessageModule = MessageModule = __decorate([
    (0, common_1.Module)({
        imports: [
            microservices_1.ClientsModule.register([
                {
                    name: 'MESSAGE_SERVICE',
                    transport: microservices_1.Transport.TCP,
                    options: {
                        host: 'localhost',
                        port: parseInt(process.env.MESSAGE_SERVICE_PORT) || 3005,
                    },
                },
            ]),
        ],
        controllers: [message_controller_1.MessageController],
    })
], MessageModule);


/***/ }),

/***/ "./apps/api-gateway/src/notification/notification.controller.ts":
/*!**********************************************************************!*\
  !*** ./apps/api-gateway/src/notification/notification.controller.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NotificationController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const common_2 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
let NotificationController = class NotificationController {
    constructor(notificationClient) {
        this.notificationClient = notificationClient;
    }
    async getNotifications(user, query) {
        return (0, rxjs_1.firstValueFrom)(this.notificationClient.send({ cmd: 'get_notifications' }, { userId: user.id, ...query }));
    }
    async markAsRead(id, user) {
        return (0, rxjs_1.firstValueFrom)(this.notificationClient.send({ cmd: 'mark_as_read' }, { notificationId: id, userId: user.id }));
    }
};
exports.NotificationController = NotificationController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_2.CurrentUser)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "getNotifications", null);
__decorate([
    (0, common_1.Post)(':id/read'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_2.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "markAsRead", null);
exports.NotificationController = NotificationController = __decorate([
    (0, common_1.Controller)('notifications'),
    __param(0, (0, common_1.Inject)('NOTIFICATION_SERVICE')),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _a : Object])
], NotificationController);


/***/ }),

/***/ "./apps/api-gateway/src/notification/notification.module.ts":
/*!******************************************************************!*\
  !*** ./apps/api-gateway/src/notification/notification.module.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NotificationModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const notification_controller_1 = __webpack_require__(/*! ./notification.controller */ "./apps/api-gateway/src/notification/notification.controller.ts");
let NotificationModule = class NotificationModule {
};
exports.NotificationModule = NotificationModule;
exports.NotificationModule = NotificationModule = __decorate([
    (0, common_1.Module)({
        imports: [
            microservices_1.ClientsModule.register([
                {
                    name: 'NOTIFICATION_SERVICE',
                    transport: microservices_1.Transport.TCP,
                    options: {
                        host: 'localhost',
                        port: parseInt(process.env.NOTIFICATION_SERVICE_PORT) || 3006,
                    },
                },
            ]),
        ],
        controllers: [notification_controller_1.NotificationController],
    })
], NotificationModule);


/***/ }),

/***/ "./apps/api-gateway/src/post/post.controller.ts":
/*!******************************************************!*\
  !*** ./apps/api-gateway/src/post/post.controller.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PostController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const common_2 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
let PostController = class PostController {
    constructor(postClient) {
        this.postClient = postClient;
    }
    async getFeed(user, query) {
        return (0, rxjs_1.firstValueFrom)(this.postClient.send({ cmd: 'get_feed' }, { userId: user.id, ...query }));
    }
    async getPost(id, user) {
        return (0, rxjs_1.firstValueFrom)(this.postClient.send({ cmd: 'get_post' }, { postId: id, userId: user.id }));
    }
    async createPost(user, createDto) {
        return (0, rxjs_1.firstValueFrom)(this.postClient.send({ cmd: 'create_post' }, { userId: user.id, ...createDto }));
    }
    async deletePost(id, user) {
        return (0, rxjs_1.firstValueFrom)(this.postClient.send({ cmd: 'delete_post' }, { postId: id, userId: user.id }));
    }
    async likePost(id, user) {
        return (0, rxjs_1.firstValueFrom)(this.postClient.send({ cmd: 'like_post' }, { postId: id, userId: user.id }));
    }
    async unlikePost(id, user) {
        return (0, rxjs_1.firstValueFrom)(this.postClient.send({ cmd: 'unlike_post' }, { postId: id, userId: user.id }));
    }
    async getComments(id, query) {
        return (0, rxjs_1.firstValueFrom)(this.postClient.send({ cmd: 'get_comments' }, { postId: id, ...query }));
    }
    async addComment(id, user, body) {
        return (0, rxjs_1.firstValueFrom)(this.postClient.send({ cmd: 'add_comment' }, { postId: id, userId: user.id, ...body }));
    }
};
exports.PostController = PostController;
__decorate([
    (0, common_1.Get)('feed'),
    __param(0, (0, common_2.CurrentUser)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "getFeed", null);
__decorate([
    (0, common_1.Get)('posts/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_2.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "getPost", null);
__decorate([
    (0, common_1.Post)('posts'),
    __param(0, (0, common_2.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "createPost", null);
__decorate([
    (0, common_1.Delete)('posts/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_2.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "deletePost", null);
__decorate([
    (0, common_1.Post)('posts/:id/like'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_2.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "likePost", null);
__decorate([
    (0, common_1.Delete)('posts/:id/like'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_2.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "unlikePost", null);
__decorate([
    (0, common_1.Get)('posts/:id/comments'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "getComments", null);
__decorate([
    (0, common_1.Post)('posts/:id/comments'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_2.CurrentUser)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "addComment", null);
exports.PostController = PostController = __decorate([
    (0, common_1.Controller)(),
    __param(0, (0, common_1.Inject)('POST_SERVICE')),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _a : Object])
], PostController);


/***/ }),

/***/ "./apps/api-gateway/src/post/post.module.ts":
/*!**************************************************!*\
  !*** ./apps/api-gateway/src/post/post.module.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PostModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const post_controller_1 = __webpack_require__(/*! ./post.controller */ "./apps/api-gateway/src/post/post.controller.ts");
let PostModule = class PostModule {
};
exports.PostModule = PostModule;
exports.PostModule = PostModule = __decorate([
    (0, common_1.Module)({
        imports: [
            microservices_1.ClientsModule.register([
                {
                    name: 'POST_SERVICE',
                    transport: microservices_1.Transport.TCP,
                    options: {
                        host: 'localhost',
                        port: parseInt(process.env.POST_SERVICE_PORT) || 3003,
                    },
                },
            ]),
        ],
        controllers: [post_controller_1.PostController],
    })
], PostModule);


/***/ }),

/***/ "./apps/api-gateway/src/search/search.controller.ts":
/*!**********************************************************!*\
  !*** ./apps/api-gateway/src/search/search.controller.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SearchController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const common_2 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
let SearchController = class SearchController {
    constructor(searchClient) {
        this.searchClient = searchClient;
    }
    async search(query, user, params) {
        return (0, rxjs_1.firstValueFrom)(this.searchClient.send({ cmd: 'search' }, { query, userId: user?.id, ...params }));
    }
};
exports.SearchController = SearchController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('q')),
    __param(1, (0, common_2.CurrentUser)()),
    __param(2, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], SearchController.prototype, "search", null);
exports.SearchController = SearchController = __decorate([
    (0, common_1.Controller)('search'),
    __param(0, (0, common_1.Inject)('SEARCH_SERVICE')),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _a : Object])
], SearchController);


/***/ }),

/***/ "./apps/api-gateway/src/search/search.module.ts":
/*!******************************************************!*\
  !*** ./apps/api-gateway/src/search/search.module.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SearchModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const search_controller_1 = __webpack_require__(/*! ./search.controller */ "./apps/api-gateway/src/search/search.controller.ts");
let SearchModule = class SearchModule {
};
exports.SearchModule = SearchModule;
exports.SearchModule = SearchModule = __decorate([
    (0, common_1.Module)({
        imports: [
            microservices_1.ClientsModule.register([
                {
                    name: 'SEARCH_SERVICE',
                    transport: microservices_1.Transport.TCP,
                    options: {
                        host: 'localhost',
                        port: parseInt(process.env.SEARCH_SERVICE_PORT) || 3007,
                    },
                },
            ]),
        ],
        controllers: [search_controller_1.SearchController],
    })
], SearchModule);


/***/ }),

/***/ "./apps/api-gateway/src/story/story.controller.ts":
/*!********************************************************!*\
  !*** ./apps/api-gateway/src/story/story.controller.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StoryController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const common_2 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
let StoryController = class StoryController {
    constructor(storyClient) {
        this.storyClient = storyClient;
    }
    async getStories(user) {
        return (0, rxjs_1.firstValueFrom)(this.storyClient.send({ cmd: 'get_stories' }, { userId: user.id }));
    }
    async createStory(user, createDto) {
        return (0, rxjs_1.firstValueFrom)(this.storyClient.send({ cmd: 'create_story' }, { userId: user.id, ...createDto }));
    }
    async viewStory(id, user) {
        return (0, rxjs_1.firstValueFrom)(this.storyClient.send({ cmd: 'view_story' }, { storyId: id, userId: user.id }));
    }
};
exports.StoryController = StoryController;
__decorate([
    (0, common_1.Get)('home'),
    __param(0, (0, common_2.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StoryController.prototype, "getStories", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_2.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], StoryController.prototype, "createStory", null);
__decorate([
    (0, common_1.Post)(':id/view'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_2.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], StoryController.prototype, "viewStory", null);
exports.StoryController = StoryController = __decorate([
    (0, common_1.Controller)('stories'),
    __param(0, (0, common_1.Inject)('STORY_SERVICE')),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _a : Object])
], StoryController);


/***/ }),

/***/ "./apps/api-gateway/src/story/story.module.ts":
/*!****************************************************!*\
  !*** ./apps/api-gateway/src/story/story.module.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StoryModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const story_controller_1 = __webpack_require__(/*! ./story.controller */ "./apps/api-gateway/src/story/story.controller.ts");
let StoryModule = class StoryModule {
};
exports.StoryModule = StoryModule;
exports.StoryModule = StoryModule = __decorate([
    (0, common_1.Module)({
        imports: [
            microservices_1.ClientsModule.register([
                {
                    name: 'STORY_SERVICE',
                    transport: microservices_1.Transport.TCP,
                    options: {
                        host: 'localhost',
                        port: parseInt(process.env.STORY_SERVICE_PORT) || 3004,
                    },
                },
            ]),
        ],
        controllers: [story_controller_1.StoryController],
    })
], StoryModule);


/***/ }),

/***/ "./apps/api-gateway/src/upload/upload.controller.ts":
/*!**********************************************************!*\
  !*** ./apps/api-gateway/src/upload/upload.controller.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UploadController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const platform_express_1 = __webpack_require__(/*! @nestjs/platform-express */ "@nestjs/platform-express");
const upload_service_1 = __webpack_require__(/*! ./upload.service */ "./apps/api-gateway/src/upload/upload.service.ts");
let UploadController = class UploadController {
    constructor(uploadService) {
        this.uploadService = uploadService;
    }
    async uploadImage(file) {
        return this.uploadService.uploadImage(file);
    }
    async uploadVideo(file) {
        return this.uploadService.uploadVideo(file);
    }
    async uploadMultiple(files) {
        return this.uploadService.uploadMultiple(files);
    }
};
exports.UploadController = UploadController;
__decorate([
    (0, common_1.Post)('image'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UploadController.prototype, "uploadImage", null);
__decorate([
    (0, common_1.Post)('video'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UploadController.prototype, "uploadVideo", null);
__decorate([
    (0, common_1.Post)('multiple'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('files', 10)),
    __param(0, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], UploadController.prototype, "uploadMultiple", null);
exports.UploadController = UploadController = __decorate([
    (0, common_1.Controller)('upload'),
    __metadata("design:paramtypes", [typeof (_a = typeof upload_service_1.UploadService !== "undefined" && upload_service_1.UploadService) === "function" ? _a : Object])
], UploadController);


/***/ }),

/***/ "./apps/api-gateway/src/upload/upload.module.ts":
/*!******************************************************!*\
  !*** ./apps/api-gateway/src/upload/upload.module.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UploadModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const upload_controller_1 = __webpack_require__(/*! ./upload.controller */ "./apps/api-gateway/src/upload/upload.controller.ts");
const upload_service_1 = __webpack_require__(/*! ./upload.service */ "./apps/api-gateway/src/upload/upload.service.ts");
let UploadModule = class UploadModule {
};
exports.UploadModule = UploadModule;
exports.UploadModule = UploadModule = __decorate([
    (0, common_1.Module)({
        imports: [config_1.ConfigModule],
        controllers: [upload_controller_1.UploadController],
        providers: [upload_service_1.UploadService],
    })
], UploadModule);


/***/ }),

/***/ "./apps/api-gateway/src/upload/upload.service.ts":
/*!*******************************************************!*\
  !*** ./apps/api-gateway/src/upload/upload.service.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UploadService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const cloudinary_1 = __webpack_require__(/*! cloudinary */ "cloudinary");
let UploadService = class UploadService {
    constructor(configService) {
        this.configService = configService;
        cloudinary_1.v2.config({
            cloud_name: this.configService.get('CLOUDINARY_CLOUD_NAME'),
            api_key: this.configService.get('CLOUDINARY_API_KEY'),
            api_secret: this.configService.get('CLOUDINARY_API_SECRET'),
        });
    }
    async uploadImage(file) {
        return new Promise((resolve, reject) => {
            const uploadStream = cloudinary_1.v2.uploader.upload_stream({
                folder: 'yaari/images',
                resource_type: 'image',
            }, (error, result) => {
                if (error)
                    return reject(error);
                resolve({
                    url: result.secure_url,
                    publicId: result.public_id,
                    width: result.width,
                    height: result.height,
                    format: result.format,
                });
            });
            uploadStream.end(file.buffer);
        });
    }
    async uploadVideo(file) {
        return new Promise((resolve, reject) => {
            const uploadStream = cloudinary_1.v2.uploader.upload_stream({
                folder: 'yaari/videos',
                resource_type: 'video',
            }, (error, result) => {
                if (error)
                    return reject(error);
                resolve({
                    url: result.secure_url,
                    publicId: result.public_id,
                    width: result.width,
                    height: result.height,
                    duration: result.duration,
                    format: result.format,
                });
            });
            uploadStream.end(file.buffer);
        });
    }
    async uploadMultiple(files) {
        const uploads = files.map((file) => {
            const isVideo = file.mimetype.startsWith('video/');
            return isVideo ? this.uploadVideo(file) : this.uploadImage(file);
        });
        return Promise.all(uploads);
    }
};
exports.UploadService = UploadService;
exports.UploadService = UploadService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], UploadService);


/***/ }),

/***/ "./apps/api-gateway/src/user/user.controller.ts":
/*!******************************************************!*\
  !*** ./apps/api-gateway/src/user/user.controller.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const common_2 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
let UserController = class UserController {
    constructor(userClient) {
        this.userClient = userClient;
    }
    async getUserProfile(username, user) {
        return (0, rxjs_1.firstValueFrom)(this.userClient.send({ cmd: 'get_profile' }, { username, currentUserId: user?.id }));
    }
    async updateProfile(user, updateDto) {
        return (0, rxjs_1.firstValueFrom)(this.userClient.send({ cmd: 'update_profile' }, { userId: user.id, ...updateDto }));
    }
    async getFollowers(username, query) {
        return (0, rxjs_1.firstValueFrom)(this.userClient.send({ cmd: 'get_followers' }, { username, ...query }));
    }
    async getFollowing(username, query) {
        return (0, rxjs_1.firstValueFrom)(this.userClient.send({ cmd: 'get_following' }, { username, ...query }));
    }
    async followUser(username, user) {
        return (0, rxjs_1.firstValueFrom)(this.userClient.send({ cmd: 'follow_user' }, { username, userId: user.id }));
    }
    async unfollowUser(username, user) {
        return (0, rxjs_1.firstValueFrom)(this.userClient.send({ cmd: 'unfollow_user' }, { username, userId: user.id }));
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Get)(':username'),
    __param(0, (0, common_1.Param)('username')),
    __param(1, (0, common_2.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUserProfile", null);
__decorate([
    (0, common_1.Patch)('me'),
    __param(0, (0, common_2.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Get)(':username/followers'),
    __param(0, (0, common_1.Param)('username')),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getFollowers", null);
__decorate([
    (0, common_1.Get)(':username/following'),
    __param(0, (0, common_1.Param)('username')),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getFollowing", null);
__decorate([
    (0, common_1.Post)(':username/follow'),
    __param(0, (0, common_1.Param)('username')),
    __param(1, (0, common_2.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "followUser", null);
__decorate([
    (0, common_1.Delete)(':username/follow'),
    __param(0, (0, common_1.Param)('username')),
    __param(1, (0, common_2.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "unfollowUser", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('users'),
    __param(0, (0, common_1.Inject)('USER_SERVICE')),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _a : Object])
], UserController);


/***/ }),

/***/ "./apps/api-gateway/src/user/user.module.ts":
/*!**************************************************!*\
  !*** ./apps/api-gateway/src/user/user.module.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const user_controller_1 = __webpack_require__(/*! ./user.controller */ "./apps/api-gateway/src/user/user.controller.ts");
let UserModule = class UserModule {
};
exports.UserModule = UserModule;
exports.UserModule = UserModule = __decorate([
    (0, common_1.Module)({
        imports: [
            microservices_1.ClientsModule.register([
                {
                    name: 'USER_SERVICE',
                    transport: microservices_1.Transport.TCP,
                    options: {
                        host: 'localhost',
                        port: parseInt(process.env.USER_SERVICE_PORT) || 3002,
                    },
                },
            ]),
        ],
        controllers: [user_controller_1.UserController],
    })
], UserModule);


/***/ }),

/***/ "./libs/common/src/decorators/current-user.decorator.ts":
/*!**************************************************************!*\
  !*** ./libs/common/src/decorators/current-user.decorator.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CurrentUser = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
exports.CurrentUser = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
});


/***/ }),

/***/ "./libs/common/src/decorators/index.ts":
/*!*********************************************!*\
  !*** ./libs/common/src/decorators/index.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./current-user.decorator */ "./libs/common/src/decorators/current-user.decorator.ts"), exports);
__exportStar(__webpack_require__(/*! ./public.decorator */ "./libs/common/src/decorators/public.decorator.ts"), exports);


/***/ }),

/***/ "./libs/common/src/decorators/public.decorator.ts":
/*!********************************************************!*\
  !*** ./libs/common/src/decorators/public.decorator.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Public = exports.IS_PUBLIC_KEY = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
exports.IS_PUBLIC_KEY = 'isPublic';
const Public = () => (0, common_1.SetMetadata)(exports.IS_PUBLIC_KEY, true);
exports.Public = Public;


/***/ }),

/***/ "./libs/common/src/dto/index.ts":
/*!**************************************!*\
  !*** ./libs/common/src/dto/index.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./pagination.dto */ "./libs/common/src/dto/pagination.dto.ts"), exports);


/***/ }),

/***/ "./libs/common/src/dto/pagination.dto.ts":
/*!***********************************************!*\
  !*** ./libs/common/src/dto/pagination.dto.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PaginationDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
class PaginationDto {
    constructor() {
        this.limit = 20;
    }
}
exports.PaginationDto = PaginationDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PaginationDto.prototype, "cursor", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(100),
    __metadata("design:type", Number)
], PaginationDto.prototype, "limit", void 0);


/***/ }),

/***/ "./libs/common/src/filters/http-exception.filter.ts":
/*!**********************************************************!*\
  !*** ./libs/common/src/filters/http-exception.filter.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AllExceptionsFilter = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let AllExceptionsFilter = class AllExceptionsFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        let status = common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        let message = 'Internal server error';
        let errors = undefined;
        if (exception instanceof common_1.HttpException) {
            status = exception.getStatus();
            const exceptionResponse = exception.getResponse();
            const er = exceptionResponse;
            if (typeof exceptionResponse === 'string') {
                message = exceptionResponse;
            }
            else {
                message = er?.message ?? er?.error ?? er?.msg ?? message;
                errors = er?.errors ?? errors;
            }
        }
        else if (exception && typeof exception === 'object' && 'error' in exception) {
            const rpcError = exception;
            if (rpcError.error) {
                status = rpcError.error.statusCode || rpcError.error.status || status;
                message = rpcError.error.message ?? rpcError.message ?? rpcError.error ?? message;
                errors = rpcError.error.errors ?? errors;
            }
        }
        else if (exception instanceof Error) {
            message = exception.message || message;
            console.error('Unhandled exception:', exception);
        }
        else {
            console.error('Unknown exception:', exception);
        }
        const responseBody = {
            statusCode: status,
            message: (Array.isArray(message) ? message.join(', ') : (message || 'Internal server error')),
            timestamp: new Date().toISOString(),
        };
        if (errors) {
            responseBody.errors = errors;
        }
        response.status(status).json(responseBody);
    }
};
exports.AllExceptionsFilter = AllExceptionsFilter;
exports.AllExceptionsFilter = AllExceptionsFilter = __decorate([
    (0, common_1.Catch)()
], AllExceptionsFilter);


/***/ }),

/***/ "./libs/common/src/filters/index.ts":
/*!******************************************!*\
  !*** ./libs/common/src/filters/index.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./http-exception.filter */ "./libs/common/src/filters/http-exception.filter.ts"), exports);


/***/ }),

/***/ "./libs/common/src/guards/index.ts":
/*!*****************************************!*\
  !*** ./libs/common/src/guards/index.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./jwt-auth.guard */ "./libs/common/src/guards/jwt-auth.guard.ts"), exports);


/***/ }),

/***/ "./libs/common/src/guards/jwt-auth.guard.ts":
/*!**************************************************!*\
  !*** ./libs/common/src/guards/jwt-auth.guard.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtAuthGuard = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const public_decorator_1 = __webpack_require__(/*! ../decorators/public.decorator */ "./libs/common/src/decorators/public.decorator.ts");
let JwtAuthGuard = class JwtAuthGuard extends (0, passport_1.AuthGuard)('jwt') {
    constructor(reflector) {
        super();
        this.reflector = reflector;
    }
    canActivate(context) {
        const isPublic = this.reflector.getAllAndOverride(public_decorator_1.IS_PUBLIC_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        if (isPublic) {
            return true;
        }
        return super.canActivate(context);
    }
};
exports.JwtAuthGuard = JwtAuthGuard;
exports.JwtAuthGuard = JwtAuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.Reflector !== "undefined" && core_1.Reflector) === "function" ? _a : Object])
], JwtAuthGuard);


/***/ }),

/***/ "./libs/common/src/index.ts":
/*!**********************************!*\
  !*** ./libs/common/src/index.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./decorators */ "./libs/common/src/decorators/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./dto */ "./libs/common/src/dto/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./filters */ "./libs/common/src/filters/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./guards */ "./libs/common/src/guards/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./interceptors */ "./libs/common/src/interceptors/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./interfaces */ "./libs/common/src/interfaces/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./utils */ "./libs/common/src/utils/index.ts"), exports);


/***/ }),

/***/ "./libs/common/src/interceptors/index.ts":
/*!***********************************************!*\
  !*** ./libs/common/src/interceptors/index.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./transform.interceptor */ "./libs/common/src/interceptors/transform.interceptor.ts"), exports);


/***/ }),

/***/ "./libs/common/src/interceptors/transform.interceptor.ts":
/*!***************************************************************!*\
  !*** ./libs/common/src/interceptors/transform.interceptor.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TransformInterceptor = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
let TransformInterceptor = class TransformInterceptor {
    intercept(context, next) {
        return next.handle().pipe((0, operators_1.map)((data) => ({ data })));
    }
};
exports.TransformInterceptor = TransformInterceptor;
exports.TransformInterceptor = TransformInterceptor = __decorate([
    (0, common_1.Injectable)()
], TransformInterceptor);


/***/ }),

/***/ "./libs/common/src/interfaces/index.ts":
/*!*********************************************!*\
  !*** ./libs/common/src/interfaces/index.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./user.interface */ "./libs/common/src/interfaces/user.interface.ts"), exports);


/***/ }),

/***/ "./libs/common/src/interfaces/user.interface.ts":
/*!******************************************************!*\
  !*** ./libs/common/src/interfaces/user.interface.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./libs/common/src/utils/hash.util.ts":
/*!********************************************!*\
  !*** ./libs/common/src/utils/hash.util.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HashUtil = void 0;
const bcrypt = __webpack_require__(/*! bcrypt */ "bcrypt");
class HashUtil {
    static async hash(password) {
        const salt = await bcrypt.genSalt(10);
        return bcrypt.hash(password, salt);
    }
    static async compare(password, hash) {
        return bcrypt.compare(password, hash);
    }
}
exports.HashUtil = HashUtil;


/***/ }),

/***/ "./libs/common/src/utils/index.ts":
/*!****************************************!*\
  !*** ./libs/common/src/utils/index.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./hash.util */ "./libs/common/src/utils/hash.util.ts"), exports);


/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/config":
/*!*********************************!*\
  !*** external "@nestjs/config" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/jwt":
/*!******************************!*\
  !*** external "@nestjs/jwt" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),

/***/ "@nestjs/microservices":
/*!****************************************!*\
  !*** external "@nestjs/microservices" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@nestjs/microservices");

/***/ }),

/***/ "@nestjs/passport":
/*!***********************************!*\
  !*** external "@nestjs/passport" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@nestjs/passport");

/***/ }),

/***/ "@nestjs/platform-express":
/*!*******************************************!*\
  !*** external "@nestjs/platform-express" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@nestjs/platform-express");

/***/ }),

/***/ "@nestjs/throttler":
/*!************************************!*\
  !*** external "@nestjs/throttler" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@nestjs/throttler");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "class-transformer":
/*!************************************!*\
  !*** external "class-transformer" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("class-transformer");

/***/ }),

/***/ "class-validator":
/*!**********************************!*\
  !*** external "class-validator" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),

/***/ "cloudinary":
/*!*****************************!*\
  !*** external "cloudinary" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("cloudinary");

/***/ }),

/***/ "passport-jwt":
/*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("passport-jwt");

/***/ }),

/***/ "rxjs":
/*!***********************!*\
  !*** external "rxjs" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("rxjs");

/***/ }),

/***/ "rxjs/operators":
/*!*********************************!*\
  !*** external "rxjs/operators" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("rxjs/operators");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**************************************!*\
  !*** ./apps/api-gateway/src/main.ts ***!
  \**************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const app_module_1 = __webpack_require__(/*! ./app.module */ "./apps/api-gateway/src/app.module.ts");
const common_2 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        transform: true,
        forbidNonWhitelisted: true,
    }));
    app.useGlobalFilters(new common_2.AllExceptionsFilter());
    app.enableCors({
        origin: process.env.FRONTEND_URL || '*',
        credentials: true,
    });
    const port = process.env.PORT || 3000;
    await app.listen(port);
    console.log(`API Gateway is running on http://localhost:${port}`);
}
bootstrap();

})();

/******/ })()
;