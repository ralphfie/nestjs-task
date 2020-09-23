import { Injectable } from '@nestjs/common';
import { SuccessrateService } from 'src/successrate/successrate.service';

// token bot. Get from botFather
const token = '1269618331:AAGC4XVqIxq8AyizGrcoCyD9CDGaE7W4jSU';

// Group ID. Get from https://api.telegram.org/bot<token>/getupdates
const userid = -452616676;

@Injectable()
export class TelegramService {
    constructor(private readonly successRate: SuccessrateService){}
    onModuleInit() {
        this.botSendMessage();
    }
    
    // A function
    async botSendMessage() {
        process.env.NTBA_FIX_319 = "1";
        // get data from successrate module
        const fiber: string = await this.successRate.getSuccessRateFiber();
        const copper: string = await this.successRate.getSuccessRateCopper();
        const TelegramBot = require('node-telegram-bot-api');
        const bot = new TelegramBot(token, { polling: true });
    
        // Read local time
        let date = new Date().toLocaleTimeString();
        console.log(date);
        if(date == '11:54.00 am'){
            console.log('berjaya')

            // prefix to send message to telegram
            bot.sendMessage(userid, `Fiber Poller Success Rate (Less Than 90%) :- \n${fiber}`);
            bot.sendMessage(userid, `Copper Poller Success Rate (Less Than 85%) :- \n${copper}`);
            bot.getMe()
            .then(console.log())

        } else {console.log('gagal')}
        
    }

}