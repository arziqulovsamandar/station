import { UserCardsService } from './user_cards.service';
import { CreateUserCardDto } from './dto/create-user_card.dto';
import { UpdateUserCardDto } from './dto/update-user_card.dto';
export declare class UserCardsController {
    private readonly userCardsService;
    constructor(userCardsService: UserCardsService);
    create(createUserCardDto: CreateUserCardDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateUserCardDto: UpdateUserCardDto): string;
    remove(id: string): string;
}
