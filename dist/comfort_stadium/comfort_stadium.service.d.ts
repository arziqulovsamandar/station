import { CreateComfortStadiumDto } from './dto/create-comfort_stadium.dto';
import { UpdateComfortStadiumDto } from './dto/update-comfort_stadium.dto';
import { CamfortStadium } from './models/comfort_stadium.model';
export declare class CamfortStadiumService {
    private readonly comforModel;
    constructor(comforModel: typeof CamfortStadium);
    create(createCamfortStadiumDto: CreateComfortStadiumDto): Promise<CamfortStadium>;
    findAll(): Promise<CamfortStadium[]>;
    findOne(id: number): Promise<CamfortStadium>;
    update(id: number, updateCamfortStadiumDto: UpdateComfortStadiumDto): Promise<CamfortStadium>;
    remove(id: number): Promise<void>;
}
