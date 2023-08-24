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
exports.CamfortStadiumStadiumController = void 0;
const common_1 = require("@nestjs/common");
const comfort_stadium_service_1 = require("./comfort_stadium.service");
const create_comfort_stadium_dto_1 = require("./dto/create-comfort_stadium.dto");
const update_comfort_stadium_dto_1 = require("./dto/update-comfort_stadium.dto");
const swagger_1 = require("@nestjs/swagger");
let CamfortStadiumStadiumController = exports.CamfortStadiumStadiumController = class CamfortStadiumStadiumController {
    constructor(CamfortStadiumStadiumService) {
        this.CamfortStadiumStadiumService = CamfortStadiumStadiumService;
    }
    async create(createCamfortStadiumDto) {
        return this.CamfortStadiumStadiumService.create(createCamfortStadiumDto);
    }
    async findAll() {
        return this.CamfortStadiumStadiumService.findAll();
    }
    findOne(id) {
        return this.CamfortStadiumStadiumService.findOne(id);
    }
    async update(id, updateCamfortStadiumDto) {
        return this.CamfortStadiumStadiumService.update(+id, updateCamfortStadiumDto);
    }
    async remove(id) {
        return this.CamfortStadiumStadiumService.remove(+id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'create CamfortStadium' }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_comfort_stadium_dto_1.CreateComfortStadiumDto]),
    __metadata("design:returntype", Promise)
], CamfortStadiumStadiumController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'all CamfortStadium' }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CamfortStadiumStadiumController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'id search CamfortStadium' }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CamfortStadiumStadiumController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'update' }),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_comfort_stadium_dto_1.UpdateComfortStadiumDto]),
    __metadata("design:returntype", Promise)
], CamfortStadiumStadiumController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete' }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CamfortStadiumStadiumController.prototype, "remove", null);
exports.CamfortStadiumStadiumController = CamfortStadiumStadiumController = __decorate([
    (0, common_1.Controller)('CamfortStadium-stadium'),
    __metadata("design:paramtypes", [comfort_stadium_service_1.CamfortStadiumService])
], CamfortStadiumStadiumController);
//# sourceMappingURL=comfort_stadium.controller.js.map