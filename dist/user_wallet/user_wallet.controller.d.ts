import { UserWalletService } from './user_wallet.service';
import { CreateUserWalletDto } from './dto/create-user_wallet.dto';
import { UpdateUserWalletDto } from './dto/update-user_wallet.dto';
export declare class UserWalletController {
    private readonly userWalletService;
    constructor(userWalletService: UserWalletService);
    create(createUserWalletDto: CreateUserWalletDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateUserWalletDto: UpdateUserWalletDto): string;
    remove(id: string): string;
}
