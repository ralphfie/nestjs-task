import { Module } from '@nestjs/common';
import { NodemailerController } from './nodemailer.controller';
import { NodemailerService } from './nodemailer.service';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { MailerModule } from '@nestjs-modules/mailer';
import { SuccessrateService } from 'src/successrate/successrate.service';

@Module({
  imports: [
   MailerModule.forRoot({
     transport: {
       host: 'smtp.gmail.com',
       port: 587,
       secure: false,
       auth: {
         user: 'goth7nest@gmail.com',//process.env.MAILDEV_INCOMING_USER,
         pass: 'Harapan9394',//process.env.MAILDEV_INCOMING_PASS,
       },
     },
     defaults:{
       from: '"Rafie" <goth7nest@gmail.com>',
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
  ],
  controllers: [NodemailerController],
  providers: [NodemailerService],
})
export class NodemailerModule {}
