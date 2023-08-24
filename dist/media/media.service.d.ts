import { CreateMediaDto } from './dto/create-media.dto';
import { UpdateMediaDto } from './dto/update-media.dto';
import { Media } from './models/media.model';
export declare class MediaService {
    private readonly categoryModel;
    constructor(categoryModel: typeof Media);
    create(createCategoryDto: CreateMediaDto): Promise<Media>;
    findAll(): Promise<Media[]>;
    findOne(id: number): Promise<Media>;
    update(id: number, updateCategoryDto: UpdateMediaDto): Promise<Media>;
    remove(id: number): Promise<void>;
}
