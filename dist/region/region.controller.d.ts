import { RegionService } from './region.service';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { Region } from './models/region.model';
export declare class RegionController {
    private readonly regionService;
    constructor(regionService: RegionService);
    create(createRegionDto: CreateRegionDto): Promise<Region>;
    findAll(): Promise<Region[]>;
    findOne(id: number): Promise<Region>;
    update(id: number, updateRegionDto: UpdateRegionDto): Promise<Region>;
    remove(id: number): Promise<void>;
}
