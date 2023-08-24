"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCardsService = void 0;
const common_1 = require("@nestjs/common");
let UserCardsService = exports.UserCardsService = class UserCardsService {
    create(createUserCardDto) {
        return 'This action adds a new userCard';
    }
    findAll() {
        return `This action returns all userCards`;
    }
    findOne(id) {
        return `This action returns a #${id} userCard`;
    }
    update(id, updateUserCardDto) {
        return `This action updates a #${id} userCard`;
    }
    remove(id) {
        return `This action removes a #${id} userCard`;
    }
};
exports.UserCardsService = UserCardsService = __decorate([
    (0, common_1.Injectable)()
], UserCardsService);
//# sourceMappingURL=user_cards.service.js.map