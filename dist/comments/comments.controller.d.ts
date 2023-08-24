import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Caments } from './models/comment.model';
export declare class CommentsController {
    private readonly commentsService;
    constructor(commentsService: CommentsService);
    create(createCamfortStadiumDto: CreateCommentDto): Promise<Caments>;
    findAll(): Promise<Caments[]>;
    findOne(id: number): Promise<Caments>;
    update(id: number, updateCamfortStadiumDto: UpdateCommentDto): Promise<Caments>;
    remove(id: string): Promise<void>;
}
