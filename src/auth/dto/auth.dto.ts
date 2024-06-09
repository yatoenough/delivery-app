import {
	IsEmail,
	IsNotEmpty,
	IsString,
	IsStrongPassword
} from 'class-validator';

export class AuthDto {
	@IsEmail()
	@IsNotEmpty()
	email: string;

	@IsString()
	@IsNotEmpty()
	username: string;

	@IsStrongPassword()
	@IsNotEmpty()
	password: string;
}
