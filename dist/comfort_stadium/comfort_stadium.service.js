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
exports.CamfortStadiumService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const comfort_stadium_model_1 = require("./models/comfort_stadium.model");
let CamfortStadiumService = exports.CamfortStadiumService = class CamfortStadiumService {
    constructor(comforModel) {
        this.comforModel = comforModel;
    }
    async create(createCamfortStadiumDto) {
        return this.comforModel.create(createCamfortStadiumDto);
    }
    async findAll() {
        return this.comforModel.findAll();
    }
    findOne(id) {
        return this.comforModel.findByPk(id);
    }
    async update(id, updateCamfortStadiumDto) {
        const updateCamfortStadium = await this.comforModel.update(updateCamfortStadiumDto, {
            where: { id },
            returning: true,
        });
        return updateCamfortStadium[1][0].dataValues;
    }
    async remove(id) {
        const deleteCamfortStadium = await this.comforModel.destroy({
            where: { id },
        });
        if (deleteCamfortStadium === 0) {
            throw new Error(`Could not delete customer with id ${id}`);
        }
    }
};
exports.CamfortStadiumService = CamfortStadiumService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(comfort_stadium_model_1.CamfortStadium)),
    __metadata("design:paramtypes", [Object])
], CamfortStadiumService);
//# sourceMappingURL=comfort_stadium.service.js.map