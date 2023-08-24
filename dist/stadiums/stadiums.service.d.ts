import { CreateStadiumDto } from './dto/create-stadium.dto';
import { UpdateStadiumDto } from './dto/update-stadium.dto';
export declare class StadiumsService {
    create(createStadiumDto: CreateStadiumDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateStadiumDto: UpdateStadiumDto): string;
    remove(id: number): string;
}
