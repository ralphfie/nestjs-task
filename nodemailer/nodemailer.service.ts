import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { SuccessrateService } from 'src/successrate/successrate.service';

const test = 'halu';

@Injectable()
export class NodemailerService {
constructor(private readonly mailerService: MailerService,
    private readonly successRate: SuccessrateService) {}
    
    public async example(): Promise<void> {
        const fiber: string = await this.successRate.getSuccessRateFiber();
        const copper: string = await this.successRate.getSuccessRateCopper();
        this.mailerService.sendMail({
            to: 'rfie9393@gmail.com', // list of receivers
            from: 'camelia.rnd@gmail.com', // sender address
            subject: 'Schedule Success Rate Alarm ', // Subject line
            text: 'On-progress', // plaintext body
            html: `Fiber Poller Success Rate (Less Than 90%) :- <br> ${fiber} <br><br> Copper Poller Success Rate (Less Than 85%):- <br> ${copper}`, // HTML body content
          })
          .then((success) => {
              console.log(success),
              console.log(fiber)
          })
          .catch((err) => {
              console.log(err)
          });
      }
    }