import { StadiumsService } from './stadiums.service';
import { CreateStadiumDto } from './dto/create-stadium.dto';
import { UpdateStadiumDto } from './dto/update-stadium.dto';
export declare class StadiumsController {
    private readonly stadiumsService;
    constructor(stadiumsService: StadiumsService);
    create(createStadiumDto: CreateStadiumDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateStadiumDto: UpdateStadiumDto): string;
    remove(id: string): string;
}
