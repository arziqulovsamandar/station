"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserWalletDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_user_wallet_dto_1 = require("./create-user_wallet.dto");
class UpdateUserWalletDto extends (0, mapped_types_1.PartialType)(create_user_wallet_dto_1.CreateUserWalletDto) {
}
exports.UpdateUserWalletDto = UpdateUserWalletDto;
//# sourceMappingURL=update-user_wallet.dto.js.map