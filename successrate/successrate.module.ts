import { forwardRef, HttpModule, HttpService, Module } from '@nestjs/common';
import { SuccessrateController } from './successrate.controller';
import { SuccessrateService } from './successrate.service';

@Module({
  imports : [HttpModule],
  controllers: [SuccessrateController],
  providers: [SuccessrateService],
  exports: [SuccessrateService]
})
export class SuccessrateModule {}
