import { Injectable } from '@nestjs/common';

@Injectable()
export class CommentService {

    readComments(userId: number) {
        return `Comment from User = ${userId}`;
    }

    getComment(id: string) {
        return `Comment of Single = ${id}`;
    }
}