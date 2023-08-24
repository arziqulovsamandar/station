import { BotService } from './bot.service';
import { Context } from 'telegraf';
export declare class BotUpdate {
    private readonly botService;
    constructor(botService: BotService);
    onStart(ctx: Context): Promise<void>;
    onContact(ctx: Context): Promise<void>;
    onStop(ctx: Context): Promise<void>;
}
