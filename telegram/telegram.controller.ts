import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TelegramService } from './telegram.service';

@ApiTags('Telegram')
@Controller('telegram')
export class TelegramController {
    constructor( private botService: TelegramService){}

  @Get('send')
  getBotDialog(@Res() res) {
  this.botService.botSendMessage();
  res.status(HttpStatus.OK).send("Bot service started");
   }

}
