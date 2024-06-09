import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { AuthDto } from './dto/auth.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
	constructor(private readonly prisma: PrismaService) {}

	async register(dto: AuthDto) {
		const existingUser = await this.prisma.user.findUnique({
			where: {
				email: dto.email
			}
		});

		if (existingUser) {
			throw new BadRequestException(
				`User with email ${dto.email} already exists. Please log in.`
			);
		}

		const newUser = await this.prisma.user.create({
			data: {
				...dto,
				password: await bcrypt.hash(dto.password, 10)
			}
		});

		return newUser;
	}

	async login(dto: AuthDto) {}
}
