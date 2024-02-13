import { Controller, Get, Param } from '@nestjs/common';
import { CommentService } from './comment.service';

@Controller('comment')
export class CommentController {
    constructor(private readonly commentService: CommentService) { }

    @Get(":id")
    getComment(@Param("id") id: string) {
        return this.commentService.getComment(id);
    }
}
