import { Bot } from './model/bot.model';
import { Telegraf, Context } from 'telegraf';
export declare class BotService {
    private botRepo;
    private readonly bot;
    constructor(botRepo: typeof Bot, bot: Telegraf<Context>);
    onStart(ctx: Context): Promise<void>;
    onContact(ctx: Context): Promise<void>;
    onStop(ctx: Context): Promise<void>;
    sendOtp(phoneNumber: string, OTP: string): Promise<boolean>;
}
