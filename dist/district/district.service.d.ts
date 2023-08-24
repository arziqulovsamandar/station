import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';
import { District } from './models/district.model';
export declare class DistrictService {
    private readonly comforModel;
    constructor(comforModel: typeof District);
    create(createComfortDto: CreateDistrictDto): Promise<District>;
    findAll(): Promise<District[]>;
    findOne(id: number): Promise<District>;
    update(id: number, updateComfortDto: UpdateDistrictDto): Promise<District>;
    remove(id: number): Promise<void>;
}
