import { StadiumTimesService } from './stadium_times.service';
import { CreateStadiumTimeDto } from './dto/create-stadium_time.dto';
import { UpdateStadiumTimeDto } from './dto/update-stadium_time.dto';
export declare class StadiumTimesController {
    private readonly stadiumTimesService;
    constructor(stadiumTimesService: StadiumTimesService);
    create(createStadiumTimeDto: CreateStadiumTimeDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateStadiumTimeDto: UpdateStadiumTimeDto): string;
    remove(id: string): string;
}
