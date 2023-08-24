"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComfortStadiumModule = void 0;
const common_1 = require("@nestjs/common");
const comfort_stadium_service_1 = require("./comfort_stadium.service");
const comfort_stadium_controller_1 = require("./comfort_stadium.controller");
const sequelize_1 = require("@nestjs/sequelize");
const comfort_stadium_model_1 = require("./models/comfort_stadium.model");
const comfort_model_1 = require("../comfort/models/comfort.model");
let ComfortStadiumModule = exports.ComfortStadiumModule = class ComfortStadiumModule {
};
exports.ComfortStadiumModule = ComfortStadiumModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([comfort_stadium_model_1.CamfortStadium, comfort_model_1.Comfort])],
        controllers: [comfort_stadium_controller_1.CamfortStadiumStadiumController],
        providers: [comfort_stadium_service_1.CamfortStadiumService],
        exports: [comfort_stadium_service_1.CamfortStadiumService],
    })
], ComfortStadiumModule);
//# sourceMappingURL=comfort_stadium.module.js.map