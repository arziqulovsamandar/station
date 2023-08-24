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
exports.MediaService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const media_model_1 = require("./models/media.model");
let MediaService = exports.MediaService = class MediaService {
    constructor(categoryModel) {
        this.categoryModel = categoryModel;
    }
    create(createCategoryDto) {
        return this.categoryModel.create(createCategoryDto);
    }
    findAll() {
        return this.categoryModel.findAll({ include: { all: true } });
    }
    findOne(id) {
        return this.categoryModel.findByPk(id);
    }
    async update(id, updateCategoryDto) {
        const upcate = await this.categoryModel.update(updateCategoryDto, {
            where: { id },
            returning: true,
        });
        return upcate[1][0].dataValues;
    }
    async remove(id) {
        const deletecategory = await this.categoryModel.destroy({
            where: { id },
        });
        if (deletecategory === 0) {
            throw new Error(`Could not delete venue type with id ${id}`);
        }
    }
};
exports.MediaService = MediaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(media_model_1.Media)),
    __metadata("design:paramtypes", [Object])
], MediaService);
//# sourceMappingURL=media.service.js.map