import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { NodemailerService } from './nodemailer.service';

@Controller('nodemailer')
export class NodemailerController {
  constructor(private readonly nodeMailer: NodemailerService ){}
  
  @ApiTags('Nodemailer')
  @Get()
  example() {
    return this.nodeMailer.example()
  }
}
