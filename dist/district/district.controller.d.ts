import { DistrictService } from './district.service';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';
import { District } from './models/district.model';
export declare class DistrictController {
    private readonly districtService;
    constructor(districtService: DistrictService);
    create(createComfortDto: CreateDistrictDto): Promise<District>;
    findAll(): Promise<District[]>;
    findOne(id: number): Promise<District>;
    update(id: number, updateComfortDto: UpdateDistrictDto): Promise<District>;
    remove(id: string): Promise<void>;
}
