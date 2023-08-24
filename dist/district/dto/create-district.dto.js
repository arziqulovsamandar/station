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
exports.CreateDistrictDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateDistrictDto {
}
exports.CreateDistrictDto = CreateDistrictDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'bunyodkor',
        description: 'categories',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateDistrictDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1',
        description: 'categories id',
    }),
    __metadata("design:type", Number)
], CreateDistrictDto.prototype, "region_id", void 0);
//# sourceMappingURL=create-district.dto.js.map