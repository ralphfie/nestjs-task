import { Controller, Get, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
import { SuccessrateService } from './successrate.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Success Rate')
@Controller()
export class SuccessrateController {
    constructor(private readonly client: SuccessrateService ) {}
     
    //Get All Fiber Data   
    @Get('fiber')
    getSuccessRateFiber(): Promise<string> {
      return this.client.getSuccessRateFiber();
    }

    //Get All Copper Data
    @Get('copper')
    getSuccessRateCopper(): Promise<string> {
      return this.client.getSuccessRateCopper();
    }
    
    // Tring to fetch single value from api
    @Get('fiber-data')
    @UseInterceptors(ClassSerializerInterceptor)
    getSuccessRateFiber1(): Promise<string> {
      return this.client.getSuccessRateFiber1();
    }


}
