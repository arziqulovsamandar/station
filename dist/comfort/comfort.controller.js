"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComfortController = void 0;
const common_1 = require("@nestjs/common");
const comfort_service_1 = require("./comfort.service");
const create_comfort_dto_1 = require("./dto/create-comfort.dto");
const update_comfort_dto_1 = require("./dto/update-comfort.dto");
const swagger_1 = require("@nestjs/swagger");
let ComfortController = exports.ComfortController = class ComfortController {
    constructor(comfortService) {
        this.comfortService = comfortService;
    }
    async create(createComfortDto) {
        return this.comfortService.create(createComfortDto);
    }
    async findAll() {
        return this.comfortService.findAll();
    }
    findOne(id) {
        return this.comfortService.findOne(id);
    }
    async update(id, updateComfortDto) {
        return this.comfortService.update(+id, updateComfortDto);
    }
    async remove(id) {
        return this.comfortService.remove(+id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "create comfort" }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_comfort_dto_1.CreateComfortDto]),
    __metadata("design:returntype", Promise)
], ComfortController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "all comfort" }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ComfortController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "id search comfort" }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ComfortController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'update' }),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_comfort_dto_1.UpdateComfortDto]),
    __metadata("design:returntype", Promise)
], ComfortController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete' }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ComfortController.prototype, "remove", null);
exports.ComfortController = ComfortController = __decorate([
    (0, common_1.Controller)('comfort'),
    __metadata("design:paramtypes", [comfort_service_1.ComfortService])
], ComfortController);
//# sourceMappingURL=comfort.controller.js.map