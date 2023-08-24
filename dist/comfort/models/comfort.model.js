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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comfort = void 0;
const swagger_1 = require("@nestjs/swagger");
const sequelize_typescript_1 = require("sequelize-typescript");
const comfort_stadium_model_1 = require("../../comfort_stadium/models/comfort_stadium.model");
let Comfort = exports.Comfort = class Comfort extends sequelize_typescript_1.Model {
};
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1',
        description: 'comfort id',
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], Comfort.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'comfort',
        description: 'comfort',
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Comfort.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => comfort_stadium_model_1.CamfortStadium),
    __metadata("design:type", Array)
], Comfort.prototype, "camfort_Stadium", void 0);
exports.Comfort = Comfort = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'comfort' })
], Comfort);
//# sourceMappingURL=comfort.model.js.map