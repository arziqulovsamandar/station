"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const user_model_1 = require("./models/user.model");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const uuid_1 = require("uuid");
const sequelize_2 = require("sequelize");
const mail_service_1 = require("../mail/mail.service");
const otpGenerator = require("otp-generator");
const bot_service_1 = require("../bot/bot.service");
const otp_model_1 = require("../otp/model/otp.model");
const addMinutes_1 = require("../helpers/addMinutes");
const crypto_1 = require("../helpers/crypto");
let UsersService = exports.UsersService = class UsersService {
    constructor(userRepo, otpRepo, jwtService, mailService, botService) {
        this.userRepo = userRepo;
        this.otpRepo = otpRepo;
        this.jwtService = jwtService;
        this.mailService = mailService;
        this.botService = botService;
    }
    findOne(id) {
        return ' This action returns a #${id} user;';
    }
    update(id, updateUserDto) {
        return 'This action updates a #${id} user;';
    }
    remove(id) {
        return 'This action removes a #${id} user;';
    }
    async registration(createUserDto, res) {
        const user = await this.userRepo.findOne({
            where: { username: createUserDto.username },
        });
        if (user) {
            throw new common_1.BadRequestException('Username already exists');
        }
        if (createUserDto.password !== createUserDto.confirm_password) {
            throw new common_1.BadRequestException('Password is not match');
        }
        const hashed_password = await bcrypt.hash(createUserDto.password, 7);
        const newUser = await this.userRepo.create({
            ...createUserDto,
            hashed_password: hashed_password,
        });
        const tokens = await this.getTokens(newUser);
        const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7);
        const uniqueKey = (0, uuid_1.v4)();
        const updateUser = await this.userRepo.update({
            hashed_refresh_token: hashed_refresh_token,
            activation_link: uniqueKey,
        }, { where: { id: newUser.id }, returning: true });
        res.cookie('refresh_token', tokens.refresh_token, {
            maxAge: 15 * 24 * 60 * 60 * 1000,
            httpOnly: true,
        });
        await this.mailService.sendUserConfirmation(updateUser[1][0]);
        const response = {
            message: 'User registered',
            user: updateUser[1][0],
            tokens,
        };
        return response;
    }
    async getTokens(user) {
        const JwtPayload = {
            id: user.id,
            is_active: user.is_active,
            is_owner: user.is_owner,
        };
        const [accessToken, refreshToken] = await Promise.all([
            this.jwtService.signAsync(JwtPayload, {
                secret: process.env.ACCESS_TOKEN_KEY,
                expiresIn: process.env.ACCESS_TOKEN_TIME,
            }),
            this.jwtService.signAsync(JwtPayload, {
                secret: process.env.REFRESH_TOKEN_KEY,
                expiresIn: process.env.REFRESH_TOKEN_TIME,
            }),
        ]);
        return {
            access_token: accessToken,
            refresh_token: refreshToken,
        };
    }
    async login(loginUserDto, res) {
        const { email, password } = loginUserDto;
        const user = await this.userRepo.findOne({ where: { email } });
        if (!user) {
            throw new common_1.UnauthorizedException('user topilmadi');
        }
        const isMatchPass = await bcrypt.compare(password, user.hashed_password);
        if (!isMatchPass) {
            throw new common_1.UnauthorizedException('User not registration');
        }
        const tokens = await this.getTokens(user);
        const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7);
        const updateUser = await this.userRepo.update({
            hashed_refresh_token: hashed_refresh_token,
        }, { where: { id: user.id }, returning: true });
        res.cookie('refresh_token', tokens.refresh_token, {
            maxAge: 15 * 24 * 60 * 60 * 1000,
            httpOnly: true,
        });
        const response = {
            message: 'User registered',
            user: updateUser[1][0],
            tokens,
        };
        return response;
    }
    async logout(refreshToken, res) {
        const userData = await this.jwtService.verify(refreshToken, {
            secret: process.env.REFRESH_TOKEN_KEY,
        });
        if (!userData) {
            throw new common_1.ForbiddenException('user not found');
        }
        const updateUser = await this.userRepo.update({ hashed_refresh_token: null }, { where: { id: userData.id }, returning: true });
        res.clearCookie('refresh_token');
        const response = {
            message: 'user logged out successfuly',
            user: updateUser[1][0],
        };
        return response;
    }
    async refreshToken(user_id, refreshToken, res) {
        const decodedToken = this.jwtService.decode(refreshToken);
        if (user_id != decodedToken['id']) {
            throw new common_1.UnauthorizedException('user topilmadi');
        }
        const user = await this.userRepo.findOne({ where: { id: user_id } });
        if (!user || !user.hashed_refresh_token) {
            throw new common_1.UnauthorizedException('User not found');
        }
        const tokenMatch = await bcrypt.compare(refreshToken, user.hashed_refresh_token);
        if (!tokenMatch) {
            throw new common_1.ForbiddenException('Forbidden');
        }
        const tokens = await this.getTokens(user);
        const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7);
        const updateUser = await this.userRepo.update({
            hashed_refresh_token: hashed_refresh_token,
        }, { where: { id: user.id }, returning: true });
        res.cookie('refresh_token', tokens.refresh_token, {
            maxAge: 15 * 24 * 60 * 60 * 1000,
            httpOnly: true,
        });
        const response = {
            message: 'User refreshed',
            user: updateUser[1][0],
            tokens,
        };
        return response;
    }
    async findAll(findUserDto) {
        const where = {};
        if (findUserDto.first_name) {
            where['first_name'] = {
                [sequelize_2.Op.like]: `%${findUserDto.first_name}%`,
            };
        }
        if (findUserDto.last_name) {
            where['last_name'] = {
                [sequelize_2.Op.like]: `%${findUserDto.last_name}%`,
            };
        }
        if (findUserDto.username) {
            where['username'] = {
                [sequelize_2.Op.like]: `%${findUserDto.username}%`,
            };
        }
        if (findUserDto.phone) {
            where['phone'] = {
                [sequelize_2.Op.like]: `%${findUserDto.phone}%`,
            };
        }
        if (findUserDto.email) {
            where['email'] = {
                [sequelize_2.Op.like]: `%${findUserDto.email}%`,
            };
        }
        if (findUserDto.birthday_begin && findUserDto.birthday_end) {
            where[sequelize_2.Op.and] = {
                [sequelize_2.Op.between]: `%${findUserDto.first_name}%`,
            };
        }
        else if (findUserDto.birthday_begin) {
            where['birthday'] = { [sequelize_2.Op.gte]: findUserDto.birthday_begin };
        }
        else if (findUserDto.birthday_end) {
            where['birthday'] = { [sequelize_2.Op.lte]: findUserDto.birthday_end };
        }
        const users = await user_model_1.User.findAll({ where });
        if (!users) {
            throw new common_1.BadRequestException('user not found');
        }
        return users;
    }
    async activate(link) {
        if (!link) {
            throw new common_1.BadRequestException('Activate link not found');
        }
        const updateUSer = await this.userRepo.update({ is_active: true }, { where: { activation_link: link, is_active: false }, returning: true });
        if (!updateUSer[1][0]) {
            throw new common_1.BadRequestException('user already activated');
        }
        const response = {
            message: 'User activated successfuly',
            user: updateUSer,
        };
        return response;
    }
    async newOTP(phoneUserDto) {
        const phone_number = phoneUserDto.phone;
        const otp = otpGenerator.generate(4, {
            upperCaseAlphabets: false,
            lowerCaseAlphabets: false,
            specialChars: false,
        });
        const isSend = await this.botService.sendOtp(phone_number, otp);
        console.log(isSend);
        if (!isSend) {
            throw new common_1.HttpException("avval Botdan ro'yxatdan o'ting", common_1.HttpStatus.BAD_REQUEST);
        }
        const now = new Date();
        const expiration_time = (0, addMinutes_1.AddMinutesToDate)(now, 5);
        await this.otpRepo.destroy({
            where: { check: phone_number },
        });
        const newOtp = await this.otpRepo.create({
            id: (0, uuid_1.v4)(),
            otp,
            expiration_time,
            check: phone_number,
        });
        const details = {
            timesstamp: now,
            check: phone_number,
            seccess: true,
            message: 'OTP sent to user',
            otp_id: newOtp.id,
        };
        const encoded = await (0, crypto_1.encode)(JSON.stringify(details));
        return { status: 'Seccess ', Details: encoded };
    }
    async verifyOtp(verifyOtpDtp) {
        const { verification_key, otp, check } = verifyOtpDtp;
        const currentdate = new Date();
        const decoded = await (0, crypto_1.decode)(verification_key);
        const obj = JSON.parse(decoded);
        const check_obj = obj.check;
        if (check_obj != check) {
            throw new common_1.BadRequestException('Otp bu raqamga yuborilmagan');
        }
        const result = await this.otpRepo.findOne({
            where: { id: obj.otp_id },
        });
        if (result != null) {
            if (!result.verified) {
                if (crypto_1.dates.compare(result.expiration_time, currentdate)) {
                    if (otp === result.otp) {
                        const user = await this.userRepo.findOne({
                            where: { phone: check },
                        });
                        if (user) {
                            const updateUser = await this.userRepo.update({ is_owner: true }, { where: { id: user.id }, returning: true });
                            await this.otpRepo.update({ verified: true }, { where: { id: obj.otp_id }, returning: true });
                            const response = {
                                message: 'user updated as owner',
                                user: updateUser[1][0],
                            };
                            return response;
                        }
                    }
                    else {
                        throw new common_1.BadRequestException('Otp is not match');
                    }
                }
                else {
                    throw new common_1.BadRequestException('Otp expired');
                }
            }
            else {
                throw new common_1.BadRequestException('Otp already used');
            }
        }
        else {
            throw new common_1.BadRequestException('Bunday foydalanuvchi yoq');
        }
    }
};
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(user_model_1.User)),
    __param(1, (0, sequelize_1.InjectModel)(otp_model_1.Otp)),
    __metadata("design:paramtypes", [Object, Object, jwt_1.JwtService,
        mail_service_1.MailService,
        bot_service_1.BotService])
], UsersService);
//# sourceMappingURL=users.service.js.map