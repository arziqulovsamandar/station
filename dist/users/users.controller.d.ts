import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './models/user.model';
import { Response } from 'express';
import { LoginUserDto } from './dto/login-user.dto';
import { FindUserDto } from './dto/find-user.dto';
import { PhoneUserDto } from './dto/phone-user.dto';
import { VerifyOtpDto } from './dto/verifiyOtp.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    registration(createUserDto: CreateUserDto, res: Response): Promise<{
        message: string;
        user: User;
        tokens: {
            access_token: string;
            refresh_token: string;
        };
    }>;
    login(loginUserDto: LoginUserDto, res: Response): Promise<{
        message: string;
        user: User;
        tokens: {
            access_token: string;
            refresh_token: string;
        };
    }>;
    logout(refreshToken: string, res: Response): Promise<{
        message: string;
        user: User;
    }>;
    refresh(id: string, refreshToken: string, res: Response): Promise<{
        message: string;
        user: User;
        tokens: {
            access_token: string;
            refresh_token: string;
        };
    }>;
    create(createUserDto: CreateUserDto): void;
    findAll(findUserDto: FindUserDto): Promise<User[]>;
    findOne(id: string): string;
    update(id: string, updateUserDto: UpdateUserDto): string;
    remove(id: string): string;
    activate(link: string): Promise<{
        message: string;
        user: [affectedCount: number, affectedRows: User[]];
    }>;
    newOTP(phoneUserDto: PhoneUserDto): Promise<{
        status: string;
        Details: string;
    }>;
    verifyOTP(verifyOtpDto: VerifyOtpDto): Promise<{
        message: string;
        user: User;
    }>;
}
