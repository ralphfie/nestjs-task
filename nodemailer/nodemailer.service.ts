import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NodemailerService {
    constructor(private readonly mailerService: MailerService) {}

    public example(): void {
        this.mailerService.sendMail({
            to: 'rfie9393@gmail.com', // list of receivers
            from: 'goth7nest@gmail.com', // sender address
            subject: 'Schedule Success Rate Alarm ', // Subject line
            text: 'On-progress', // plaintext body
            html: `Test: `, // HTML body content
          })
          .then((success) => {
              console.log(success)
          })
          .catch((err) => {
              console.log(err)
          });
      }

}
