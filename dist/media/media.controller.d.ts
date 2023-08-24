import { MediaService } from './media.service';
import { CreateMediaDto } from './dto/create-media.dto';
import { UpdateMediaDto } from './dto/update-media.dto';
import { Media } from './models/media.model';
export declare class MediaController {
    private readonly mediaService;
    constructor(mediaService: MediaService);
    create(createCategoryDto: CreateMediaDto): Promise<Media>;
    findAll(): Promise<Media[]>;
    findOne(id: string): Promise<Media>;
    update(id: number, updatecategoryDto: UpdateMediaDto): Promise<Media>;
    remove(id: string): Promise<void>;
}
