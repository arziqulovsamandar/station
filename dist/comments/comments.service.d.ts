import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Caments } from './models/comment.model';
export declare class CommentsService {
    private readonly comforModel;
    constructor(comforModel: typeof Caments);
    create(createCamfortStadiumDto: CreateCommentDto): Promise<Caments>;
    findAll(): Promise<Caments[]>;
    findOne(id: number): Promise<Caments>;
    update(id: number, updateCamfortStadiumDto: UpdateCommentDto): Promise<Caments>;
    remove(id: number): Promise<void>;
}
