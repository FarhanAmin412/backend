import { Injectable } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class AuthService {

	async googleAuth(): Promise<void> {
	}

	googleLogin(req: Request) {
		if (!req?.user) {
			return 'No user from google';
		}

		return {
			message: 'User information from google',
			user: req.user
		}
	}
}
