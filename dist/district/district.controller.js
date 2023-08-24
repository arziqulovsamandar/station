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
exports.DistrictController = void 0;
const common_1 = require("@nestjs/common");
const district_service_1 = require("./district.service");
const create_district_dto_1 = require("./dto/create-district.dto");
const update_district_dto_1 = require("./dto/update-district.dto");
const swagger_1 = require("@nestjs/swagger");
let DistrictController = exports.DistrictController = class DistrictController {
    constructor(districtService) {
        this.districtService = districtService;
    }
    async create(createComfortDto) {
        return this.districtService.create(createComfortDto);
    }
    async findAll() {
        return this.districtService.findAll();
    }
    findOne(id) {
        return this.districtService.findOne(id);
    }
    async update(id, updateComfortDto) {
        return this.districtService.update(+id, updateComfortDto);
    }
    async remove(id) {
        return this.districtService.remove(+id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'create comfort' }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_district_dto_1.CreateDistrictDto]),
    __metadata("design:returntype", Promise)
], DistrictController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'all comfort' }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DistrictController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'id search comfort' }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DistrictController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'update' }),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_district_dto_1.UpdateDistrictDto]),
    __metadata("design:returntype", Promise)
], DistrictController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete' }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DistrictController.prototype, "remove", null);
exports.DistrictController = DistrictController = __decorate([
    (0, common_1.Controller)('district'),
    __metadata("design:paramtypes", [district_service_1.DistrictService])
], DistrictController);
//# sourceMappingURL=district.controller.js.map