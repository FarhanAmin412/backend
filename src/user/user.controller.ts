import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dto/createUserDto';
import { UserService } from './user.service';
import { CommentService } from 'src/comment/comment.service';

@Controller('user')
export class UserController {

	constructor(private readonly userService: UserService, private readonly commentService: CommentService) { }

	@Get('all')
	findAll() {
		return this.userService.findAll();
	}

	@Get(':id')
	findOne(@Param('id') id: number) {
		return this.userService.findOne(id);
	}

	@Post()
	addUser(@Body() createUserDto: CreateUserDto) {
		return this.userService.addUser(createUserDto);
	}

	@Get(":userId/comments")
	getOneComment(@Param("userId") userId: number) {
		return this.commentService.readComments(userId)
	}

	@Put(":id")
	updateUser(@Param("id") id: number, @Body() updateUserDto: UpdateUserDto) {
		return this.userService.updateUser(id, updateUserDto);
	}

}
