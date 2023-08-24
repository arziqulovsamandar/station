import { CreateStadiumTimeDto } from './dto/create-stadium_time.dto';
import { UpdateStadiumTimeDto } from './dto/update-stadium_time.dto';
export declare class StadiumTimesService {
    create(createStadiumTimeDto: CreateStadiumTimeDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateStadiumTimeDto: UpdateStadiumTimeDto): string;
    remove(id: number): string;
}
