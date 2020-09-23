import {  Module } from '@nestjs/common';
import { NodemailerController } from './nodemailer.controller';
import { NodemailerService } from './nodemailer.service';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { MailerModule } from '@nestjs-modules/mailer';
import { SuccessrateModule } from 'src/successrate/successrate.module';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
          user: 'camelia.rnd@gmail.com',//process.env.MAILDEV_INCOMING_USER,
          pass: 'c@m3l1@rnd',//process.env.MAILDEV_INCOMING_PASS,
        },
      },
      defaults:{
        from: '"Camelia" <camelia.rnd@gmail.com>',
      },
      preview: false,
      template:{
        dir: process.cwd + '/templates/',
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true,
        }
      }
    })
   ,SuccessrateModule],
  controllers: [NodemailerController],
  providers: [NodemailerService],
  exports:[NodemailerService]
})
export class NodemailerModule {}
