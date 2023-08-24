import { CreateComfortDto } from './dto/create-comfort.dto';
import { UpdateComfortDto } from './dto/update-comfort.dto';
import { Comfort } from './models/comfort.model';
export declare class ComfortService {
    private readonly comforModel;
    constructor(comforModel: typeof Comfort);
    create(createComfortDto: CreateComfortDto): Promise<Comfort>;
    findAll(): Promise<Comfort[]>;
    findOne(id: number): Promise<Comfort>;
    update(id: number, updateComfortDto: UpdateComfortDto): Promise<Comfort>;
    remove(id: number): Promise<void>;
}
