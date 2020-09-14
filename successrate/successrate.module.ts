import { Module, HttpModule } from '@nestjs/common';
import { SuccessrateController } from './successrate.controller';
import { SuccessrateService } from './successrate.service';

@Module({
  imports : [HttpModule],
  controllers: [SuccessrateController],
  providers: [SuccessrateService]
})
export class SuccessrateModule {}
