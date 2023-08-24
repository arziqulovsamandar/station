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
var Category_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
const swagger_1 = require("@nestjs/swagger");
const sequelize_typescript_1 = require("sequelize-typescript");
let Category = exports.Category = Category_1 = class Category extends sequelize_typescript_1.Model {
};
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1',
        description: 'categories id',
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], Category.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'bunyodkor',
        description: 'categories name',
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: true,
    }),
    __metadata("design:type", String)
], Category.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Category_1),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", Number)
], Category.prototype, "parent_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Category_1),
    __metadata("design:type", Category)
], Category.prototype, "categorie", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => Category_1),
    __metadata("design:type", Array)
], Category.prototype, "categories", void 0);
exports.Category = Category = Category_1 = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'category' })
], Category);
//# sourceMappingURL=category.model.js.map