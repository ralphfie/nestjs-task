import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { SuccessrateService } from 'src/successrate/successrate.service';

const test = 'halu';

@Injectable()
export class NodemailerService {
constructor(private readonly mailerService: MailerService,
    private readonly successRate: SuccessrateService) {}
    
    public async example(): Promise<void> {
        const test1: string = await this.successRate.getSuccessRateFiber();
        this.mailerService.sendMail({
            to: 'rfie9393@gmail.com', // list of receivers
            from: 'camelia.rnd@gmail.com', // sender address
            subject: 'Schedule Success Rate Alarm ', // Subject line
            text: 'On-progress', // plaintext body
            html: `Test: ${test1}`, // HTML body content
          })
          .then((success) => {
              console.log(success),
              console.log(test1)
          })
          .catch((err) => {
              console.log(err)
          });
      }
    }