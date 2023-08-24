import { CreateUserWalletDto } from './dto/create-user_wallet.dto';
import { UpdateUserWalletDto } from './dto/update-user_wallet.dto';
export declare class UserWalletService {
    create(createUserWalletDto: CreateUserWalletDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateUserWalletDto: UpdateUserWalletDto): string;
    remove(id: number): string;
}
