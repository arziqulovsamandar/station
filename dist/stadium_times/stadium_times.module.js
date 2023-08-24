"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StadiumTimesModule = void 0;
const common_1 = require("@nestjs/common");
const stadium_times_service_1 = require("./stadium_times.service");
const stadium_times_controller_1 = require("./stadium_times.controller");
const sequelize_1 = require("@nestjs/sequelize");
const stadium_time_model_1 = require("./models/stadium_time.model");
let StadiumTimesModule = exports.StadiumTimesModule = class StadiumTimesModule {
};
exports.StadiumTimesModule = StadiumTimesModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([stadium_time_model_1.StadiumTime])],
        controllers: [stadium_times_controller_1.StadiumTimesController],
        providers: [stadium_times_service_1.StadiumTimesService],
        exports: [stadium_times_service_1.StadiumTimesService],
    })
], StadiumTimesModule);
//# sourceMappingURL=stadium_times.module.js.map