import { ClassSerializerInterceptor, Controller, Get, UseInterceptors } from '@nestjs/common';
import {  SuccessrateService } from './successrate.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Success Rate')
@Controller('successrate')
export class SuccessrateController {
    constructor(private readonly client: SuccessrateService ) {}
    
     // Tring to fetch single value from api
     @Get('fiber-data')
     @UseInterceptors(ClassSerializerInterceptor)
     getSuccessRateFiber():Promise<String>{
       return this.client.getSuccessRateFiber();
     }
}