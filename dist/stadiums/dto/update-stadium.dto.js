"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateStadiumDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_stadium_dto_1 = require("./create-stadium.dto");
class UpdateStadiumDto extends (0, mapped_types_1.PartialType)(create_stadium_dto_1.CreateStadiumDto) {
}
exports.UpdateStadiumDto = UpdateStadiumDto;
//# sourceMappingURL=update-stadium.dto.js.map