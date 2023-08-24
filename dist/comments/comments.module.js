"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsModule = void 0;
const common_1 = require("@nestjs/common");
const comments_service_1 = require("./comments.service");
const comments_controller_1 = require("./comments.controller");
const sequelize_1 = require("@nestjs/sequelize");
const stadium_model_1 = require("../stadiums/models/stadium.model");
const user_card_model_1 = require("../user_cards/models/user_card.model");
let CommentsModule = exports.CommentsModule = class CommentsModule {
};
exports.CommentsModule = CommentsModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([Comment, stadium_model_1.Stadium, user_card_model_1.UserCard])],
        controllers: [comments_controller_1.CommentsController],
        providers: [comments_service_1.CommentsService],
        exports: [comments_service_1.CommentsService],
    })
], CommentsModule);
//# sourceMappingURL=comments.module.js.map