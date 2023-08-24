import {
  Action,
  Command,
  Ctx,
  Hears,
  Message,
  On,
  Start,
  Update,
} from 'nestjs-telegraf';
import { BotService } from './bot.service';
import { Context, Markup } from 'telegraf';
import { Controller, Res } from '@nestjs/common';

@Update()
@Controller('audio')
export class BotUpdate {
  constructor(private readonly botService: BotService) {}
  @Start()
  async onStart(@Ctx() ctx: Context) {
    return this.botService.onStart(ctx);
  }

  @On('contact')
  async onContact(@Ctx() ctx:Context){
    return this.botService.onContact(ctx);
  }
  @Command('stop')
  async onStop(@Ctx() ctx:Context){
    return this.botService.onStop(ctx);
  }
  // @On('contact')
  // async onContact(@Ctx() ctx: Context) {
  //   if ('contact' in ctx.message) {
  //     await ctx.reply('Thank you');
  //     await ctx.reply(String(ctx.message.contact.phone_number));
  //     await ctx.reply(String(ctx.message.contact.first_name));
  //     await ctx.reply(String(ctx.message.contact.last_name));
  //     await ctx.reply(String(ctx.message.contact.user_id));
  //   }
  // }

  // @On('photo')
  // async onPhoto(@Ctx() ctx: Context) {
  //   if ('photo' in ctx.message) {
  //     console.log(ctx.message.photo);
  //     await ctx.replyWithPhoto(
  //       String(ctx.message.photo[ctx.message.photo.length - 1].file_id),
  //     );
  //   }
  // }

  // @On('video')
  // async onVideo(@Ctx() ctx: Context) {
  //   if ('video' in ctx.message) {
  //     console.log(ctx.message.video);

  //     await ctx.reply(String(ctx.message.video.file_name));
  //   }
  // }

  // @On('sticker')
  // async onStiker(@Ctx() ctx: Context) {
  //   if ('sticker' in ctx.message) await ctx.reply('👍');
  // }

  // // @On('text')
  // // async onText(@Ctx() ctx: Context) {
  // //   if ('text' in ctx.message) await ctx.reply(String(ctx.message.text.));
  // // }

  // @On('audio')
  // async getAudio(@Ctx() ctx: Context) {
  //   if ('audio' in ctx.message) {
  //     console.log(ctx.message.audio);
  //     return ctx.message.audio;
  //   }
  //   return ctx.message.message_id;
  // }

  // @On('invoice')
  // async onInvoice(@Ctx() ctx: Context) {
  //   if ('invoice' in ctx.message) {
  //     await ctx.reply(String(ctx.message.invoice.title));
  //   }
  // }

  // @On('voice')
  // async onvoice(@Ctx() ctx: Context) {
  //   if ('voice' in ctx.message) {
  //     await ctx.reply(String(ctx.message.voice.duration));
  //   }
  // }

  // @On('document')
  // async onDoc(@Ctx() ctx: Context) {
  //   if ('document' in ctx.message) {
  //     await ctx.reply(String(ctx.message.document.file_name));
  //   }
  // }

  // @On('venue')
  // async onvenue(@Ctx() ctx: Context) {
  //   if ('venue' in ctx.message) {
  //     await ctx.reply(String(ctx.message.venue.address));
  //   }
  // }

  // @Hears('hi')
  // async hears(@Ctx() ctx: Context) {
  //   await ctx.reply('Hey here');
  // }

  // @Command('info')
  // async onInfo(@Ctx() ctx: Context) {
  //   await ctx.reply('Information');
  // }

  // @Command('inline_keyboard')
  // async inlineButton(@Ctx() ctx: Context) {
  //   const inlineKeyboard = [
  //     [{ text: 'Button 1', callback_data: 'button1' }],
  //     [{ text: 'Button 2', callback_data: 'button2' }],
  //     [{ text: 'Button 3', callback_data: 'button3' }],
  //     [{ text: 'Button 4', callback_data: 'button4' }],
  //   ];
  //   ctx.reply('Kerakli tugmalarni bosing', {
  //     reply_markup: {
  //       inline_keyboard: inlineKeyboard,
  //     },
  //   });
  // }

  // @Action('button1')
  // async onAction(@Ctx() ctx: Context) {
  //   ctx.reply('http://@senator0477');
  // }
  // @Action('button2')
  // async onAction2(@Ctx() ctx: Context) {
  //   ctx.reply('http://@senator0477');
  // }
  // @Action('button3')
  // async onAction3(@Ctx() ctx: Context) {
  //   ctx.reply('http://@senator0477');
  // }
  // @Action('button4')
  // async onAction4(@Ctx() ctx: Context) {
  //   ctx.reply('http://@senator0477');
  // }

  // @Command('main_keyboard')
  // async mainButton(@Ctx() ctx: Context) {
  //   ctx.reply(`Choose a main button:`, {
  //     parse_mode: 'HTML',
  //     ...Markup.keyboard([
  //       ['bir', 'ikki', 'uch'],
  //       ["to'rt"],
  //       [Markup.button.contactRequest('📞 Telefon raqamni yubrish')],
  //       [Markup.button.locationRequest('Locaion yuborish')],
  //     ])
  //       .oneTime()
  //       .resize(),
  //   });
  // }
  // @Hears('bir')
  // async onButton1(@Ctx() ctx: Context) {
  //   ctx.reply('Bir http://@senator0477');
  // }
  // @Hears('ikki')
  // async onButton2(@Ctx() ctx: Context) {
  //   ctx.reply('Ikki http://@senator0477');
  // }
  // @Hears('uch')
  // async onButton3(@Ctx() ctx: Context) {
  //   ctx.reply('uch http://@senator0477');
  // }
  // @Hears("to'rt")
  // async onButton4(@Ctx() ctx: Context) {
  //   ctx.reply("to'rt http://@senator0477");
  // }


}

