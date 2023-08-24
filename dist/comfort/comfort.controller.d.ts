import { ComfortService } from './comfort.service';
import { CreateComfortDto } from './dto/create-comfort.dto';
import { UpdateComfortDto } from './dto/update-comfort.dto';
import { Comfort } from './models/comfort.model';
export declare class ComfortController {
    private readonly comfortService;
    constructor(comfortService: ComfortService);
    create(createComfortDto: CreateComfortDto): Promise<Comfort>;
    findAll(): Promise<Comfort[]>;
    findOne(id: number): Promise<Comfort>;
    update(id: number, updateComfortDto: UpdateComfortDto): Promise<Comfort>;
    remove(id: string): Promise<void>;
}
