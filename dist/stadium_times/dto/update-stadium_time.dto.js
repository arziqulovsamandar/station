"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateStadiumTimeDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_stadium_time_dto_1 = require("./create-stadium_time.dto");
class UpdateStadiumTimeDto extends (0, mapped_types_1.PartialType)(create_stadium_time_dto_1.CreateStadiumTimeDto) {
}
exports.UpdateStadiumTimeDto = UpdateStadiumTimeDto;
//# sourceMappingURL=update-stadium_time.dto.js.map