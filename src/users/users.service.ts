import {
  BadRequestException,
  ForbiddenException,
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './models/user.model';
import { Response } from 'express';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { v4 as uuidv4, v4 } from 'uuid';
import { LoginUserDto } from './dto/login-user.dto';
import { Op } from 'sequelize';
import { FindUserDto } from './dto/find-user.dto';
import { MailService } from '../mail/mail.service';
import * as otpGenerator from 'otp-generator';
import { BotService } from '../bot/bot.service';
import { Otp } from '../otp/model/otp.model';
import { PhoneUserDto } from './dto/phone-user.dto';
import { AddMinutesToDate } from '../helpers/addMinutes';
import { dates, decode, encode } from '../helpers/crypto';
import { VerifyOtpDto } from './dto/verifiyOtp.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private readonly userRepo: typeof User,
    @InjectModel(Otp) private readonly otpRepo: typeof Otp,
    private readonly jwtService: JwtService,
    private readonly mailService: MailService,
    private readonly botService: BotService,
  ) {}

  // findAll() {
  //   return " This action returns all users;"
  // }

  findOne(id: number) {
    return ' This action returns a #${id} user;';
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return 'This action updates a #${id} user;';
  }

  remove(id: number) {
    return 'This action removes a #${id} user;';
  }

  async registration(createUserDto: CreateUserDto, res: Response) {
    const user = await this.userRepo.findOne({
      where: { username: createUserDto.username },
    });
    if (user) {
      throw new BadRequestException('Username already exists');
    }
    if (createUserDto.password !== createUserDto.confirm_password) {
      throw new BadRequestException('Password is not match');
    }

    const hashed_password = await bcrypt.hash(createUserDto.password, 7);
    const newUser = await this.userRepo.create({
      ...createUserDto,
      hashed_password: hashed_password,
    });
    const tokens = await this.getTokens(newUser);

    const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7);
    const uniqueKey: string = uuidv4();
    const updateUser = await this.userRepo.update(
      {
        hashed_refresh_token: hashed_refresh_token,
        activation_link: uniqueKey,
      },
      { where: { id: newUser.id }, returning: true },
    );
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

  async getTokens(user: User) {
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

  async login(loginUserDto: LoginUserDto, res: Response) {
    const { email, password } = loginUserDto;
    const user = await this.userRepo.findOne({ where: { email } });
    if (!user) {
      throw new UnauthorizedException('user topilmadi');
    }
    const isMatchPass = await bcrypt.compare(password, user.hashed_password);
    if (!isMatchPass) {
      throw new UnauthorizedException('User not registration');
    }

    const tokens = await this.getTokens(user);
    const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7);
    const updateUser = await this.userRepo.update(
      {
        hashed_refresh_token: hashed_refresh_token,
      },
      { where: { id: user.id }, returning: true },
    );
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

  async logout(refreshToken: string, res: Response) {
    const userData = await this.jwtService.verify(refreshToken, {
      secret: process.env.REFRESH_TOKEN_KEY,
    });
    if (!userData) {
      throw new ForbiddenException('user not found');
    }
    const updateUser = await this.userRepo.update(
      { hashed_refresh_token: null },
      { where: { id: userData.id }, returning: true },
    );
    res.clearCookie('refresh_token');
    const response = {
      message: 'user logged out successfuly',
      user: updateUser[1][0],
    };
    return response;
  }

  async refreshToken(user_id: number, refreshToken: string, res: Response) {
    const decodedToken = this.jwtService.decode(refreshToken);
    if (user_id != decodedToken['id']) {
      throw new UnauthorizedException('user topilmadi');
    }
    const user = await this.userRepo.findOne({ where: { id: user_id } });
    if (!user || !user.hashed_refresh_token) {
      throw new UnauthorizedException('User not found');
    }
    const tokenMatch = await bcrypt.compare(
      refreshToken,
      user.hashed_refresh_token,
    );
    if (!tokenMatch) {
      throw new ForbiddenException('Forbidden');
    }

    const tokens = await this.getTokens(user);
    const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7);
    const updateUser = await this.userRepo.update(
      {
        hashed_refresh_token: hashed_refresh_token,
      },
      { where: { id: user.id }, returning: true },
    );
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

  async findAll(findUserDto: FindUserDto) {
    const where = {};
    if (findUserDto.first_name) {
      where['first_name'] = {
        [Op.like]: `%${findUserDto.first_name}%`,
      };
    }

    if (findUserDto.last_name) {
      where['last_name'] = {
        [Op.like]: `%${findUserDto.last_name}%`,
      };
    }

    if (findUserDto.username) {
      where['username'] = {
        [Op.like]: `%${findUserDto.username}%`,
      };
    }

    if (findUserDto.phone) {
      where['phone'] = {
        [Op.like]: `%${findUserDto.phone}%`,
      };
    }

    if (findUserDto.email) {
      where['email'] = {
        [Op.like]: `%${findUserDto.email}%`,
      };
    }

    if (findUserDto.birthday_begin && findUserDto.birthday_end) {
      where[Op.and] = {
        [Op.between]: `%${findUserDto.first_name}%`,
      };
    } else if (findUserDto.birthday_begin) {
      where['birthday'] = { [Op.gte]: findUserDto.birthday_begin };
    } else if (findUserDto.birthday_end) {
      where['birthday'] = { [Op.lte]: findUserDto.birthday_end };
    }
    const users = await User.findAll({ where });
    if (!users) {
      throw new BadRequestException('user not found');
    }
    return users;
  }

  async activate(link: string) {
    if (!link) {
      throw new BadRequestException('Activate link not found');
    }
    const updateUSer = await this.userRepo.update(
      { is_active: true },
      { where: { activation_link: link, is_active: false }, returning: true },
    );
    if (!updateUSer[1][0]) {
      throw new BadRequestException('user already activated');
    }
    const response = {
      message: 'User activated successfuly',
      user: updateUSer,
    };
    return response;
  }

  async newOTP(phoneUserDto: PhoneUserDto) {
    const phone_number = phoneUserDto.phone;
    const otp = otpGenerator.generate(4, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });

    const isSend = await this.botService.sendOtp(phone_number, otp);
    console.log(isSend);

    if (!isSend) {
      throw new HttpException(
        "avval Botdan ro'yxatdan o'ting",
        HttpStatus.BAD_REQUEST,
      );
    }
    const now = new Date();
    const expiration_time = AddMinutesToDate(now, 5);
    await this.otpRepo.destroy({
      where: { check: phone_number },
    });
    const newOtp = await this.otpRepo.create({
      id: v4(),
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
    const encoded = await encode(JSON.stringify(details));
    return { status: 'Seccess ', Details: encoded };
  }

  async verifyOtp(verifyOtpDtp: VerifyOtpDto) {
    const { verification_key, otp, check } = verifyOtpDtp;
    const currentdate = new Date();
    const decoded = await decode(verification_key);
    const obj = JSON.parse(decoded);
    const check_obj = obj.check;
    if (check_obj != check) {
      throw new BadRequestException('Otp bu raqamga yuborilmagan');
    }
    const result = await this.otpRepo.findOne({
      where: { id: obj.otp_id },
    });
    if (result != null) {
      if (!result.verified) {
        if (dates.compare(result.expiration_time, currentdate)) {
          if (otp === result.otp) {
            const user = await this.userRepo.findOne({
              where: { phone: check },
            });
            if (user) {
              const updateUser = await this.userRepo.update(
                { is_owner: true },
                { where: { id: user.id }, returning: true },
              );
              await this.otpRepo.update(
                { verified: true },
                { where: { id: obj.otp_id }, returning: true },
              );

              const response = {
                message: 'user updated as owner',
                user: updateUser[1][0],
              };
              return response;
            }
          } else {
            throw new BadRequestException('Otp is not match');
          }
        } else {
          throw new BadRequestException('Otp expired');
        }
      } else {
        throw new BadRequestException('Otp already used');
      }
    } else {
      throw new BadRequestException('Bunday foydalanuvchi yoq');
    }
  }
}
